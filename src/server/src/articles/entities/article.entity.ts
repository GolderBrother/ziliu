import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum ArticleStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ nullable: true })
  summary?: string;

  @Column({ type: 'enum', enum: ArticleStatus, default: ArticleStatus.DRAFT })
  status: ArticleStatus;

  @Column('simple-array', { nullable: true })
  tags?: string[];

  @Column({ nullable: true })
  coverImage?: string;

  @Column({ default: 0 })
  viewCount: number;

  @Column({ type: 'jsonb', nullable: true })
  publishedPlatforms?: Record<string, any>;

  @Column({ type: 'jsonb', nullable: true })
  aiOptimizations?: Record<string, any>;

  @Column({ type: 'jsonb', nullable: true })
  formatSettings?: Record<string, any>;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 