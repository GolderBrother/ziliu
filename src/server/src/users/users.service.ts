import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserPlan } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, username, password } = createUserDto;

    // 检查邮箱是否已存在
    const existingUser = await this.usersRepository.findOne({
      where: [{ email }, { username }],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new ConflictException('该邮箱已被注册');
      }
      if (existingUser.username === username) {
        throw new ConflictException('该用户名已被使用');
      }
    }

    // 创建新用户
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      email,
      username,
      password: hashedPassword,
      // 新用户默认获得一些免费点数
      aiCredits: 10,
      imageCredits: 30,
    });

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('用户不存在');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async update(id: string, updateData: Partial<User>): Promise<User> {
    const user = await this.findOne(id);
    
    // 如果更新包含密码，需要加密
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    
    Object.assign(user, updateData);
    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('用户不存在');
    }
  }

  async upgradeToPro(userId: string, months: number = 1): Promise<User> {
    const user = await this.findOne(userId);
    
    // 设置过期日期
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + months);
    
    // 更新用户计划
    user.plan = UserPlan.PRO;
    user.planExpiresAt = expiresAt;
    
    // 添加专业版赠送的点数
    user.aiCredits += 500;
    user.imageCredits += 500;
    
    return this.usersRepository.save(user);
  }

  async consumeAiCredits(userId: string, amount: number = 1): Promise<User> {
    const user = await this.findOne(userId);
    
    if (user.aiCredits < amount) {
      throw new ConflictException('AI点数不足');
    }
    
    user.aiCredits -= amount;
    return this.usersRepository.save(user);
  }

  async consumeImageCredits(userId: string, amount: number = 1): Promise<User> {
    const user = await this.findOne(userId);
    
    if (user.imageCredits < amount) {
      throw new ConflictException('图片点数不足');
    }
    
    user.imageCredits -= amount;
    return this.usersRepository.save(user);
  }

  async addCredits(userId: string, aiCredits: number = 0, imageCredits: number = 0): Promise<User> {
    const user = await this.findOne(userId);
    
    user.aiCredits += aiCredits;
    user.imageCredits += imageCredits;
    
    return this.usersRepository.save(user);
  }
} 