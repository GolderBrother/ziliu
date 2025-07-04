import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 导航栏 */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">字流</span>
            <span className="text-sm text-muted-foreground">让文字如流水般顺畅发布</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">登录</Button>
            </Link>
            <Link href="/register">
              <Button variant="default">免费注册</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 英雄区域 */}
      <section className="container flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          <span className="text-primary">一次创作</span>，
          <span className="text-primary">智能适配</span>，
          <span className="text-primary">多平台发布</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
          让文字如流水般顺畅地流向每个平台，AI驱动的多平台内容发布工具
        </p>
        <div className="mt-10">
          <Link href="/register">
            <Button size="lg" className="text-lg px-8 py-6">立即免费使用</Button>
          </Link>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="container">
        <div className="h-px bg-border w-full my-10" />
      </div>

      {/* 特性列表 */}
      <section className="container py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex gap-4">
            <div className="text-primary text-2xl">✓</div>
            <div>
              <h3 className="text-xl font-semibold">公众号智能排版，告别丑陋格式</h3>
              <p className="mt-2 text-muted-foreground">
                自动应用精美样式，标题、引用、代码块一键美化，告别手动排版困扰
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-primary text-2xl">✓</div>
            <div>
              <h3 className="text-xl font-semibold">一键生成精选推荐，不再手动添加</h3>
              <p className="mt-2 text-muted-foreground">
                从历史文章中智能推荐相关内容，自动生成精美推荐模块，提升阅读粘性
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-primary text-2xl">✓</div>
            <div>
              <h3 className="text-xl font-semibold">AI改写小红书风格，轻松获得流量</h3>
              <p className="mt-2 text-muted-foreground">
                一键将技术文章转换为小红书爆款风格，专业知识也能获得更多流量曝光
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-primary text-2xl">✓</div>
            <div>
              <h3 className="text-xl font-semibold">Chrome插件自动填充，3分钟搞定全平台</h3>
              <p className="mt-2 text-muted-foreground">
                智能识别当前平台，一键填充所有内容，从30分钟发布时间缩短至3分钟
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 */}
      <footer className="border-t mt-auto">
        <div className="container py-6 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2025 字流. 保留所有权利.
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-primary">关于我们</Link>
            <Link href="/privacy" className="hover:text-primary">隐私政策</Link>
            <Link href="/terms" className="hover:text-primary">服务条款</Link>
          </div>
        </div>
      </footer>
    </main>
  );
} 