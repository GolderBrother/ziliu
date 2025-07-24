import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Edit3, Zap, Share2, Bot, ArrowRight, Star, Users, TrendingUp } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Edit3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              字流
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              登录
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-purple-500/25 border-0">
              免费注册
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm">已有 10,000+ 创作者选择字流</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              让文字如流水般
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              顺畅发布
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto">
            一次创作，智能适配，多平台发布<br />
            <span className="text-cyan-300">将30分钟的发布时间缩短至3分钟</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-10 py-6 rounded-2xl shadow-2xl shadow-purple-500/25 border-0 group"
            >
              立即免费使用
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 text-lg px-10 py-6 rounded-2xl backdrop-blur-sm"
            >
              观看演示
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
              <div className="text-white/60">活跃用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500万+</div>
              <div className="text-white/60">文章发布</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-white/60">效率提升</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">强大功能，简单易用</h2>
          <p className="text-xl text-white/60">为创作者量身打造的多平台发布工具</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/25">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">智能排版</h3>
              <p className="text-white/60 leading-relaxed">告别丑陋格式，一键美化文章样式，让内容更具吸引力</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">精选推荐</h3>
              <p className="text-white/60 leading-relaxed">智能推荐相关文章，不再手动添加，提升文章传播效果</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/25">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI改写</h3>
              <p className="text-white/60 leading-relaxed">智能适配小红书风格，轻松获得流量，扩大内容影响力</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">一键发布</h3>
              <p className="text-white/60 leading-relaxed">Chrome插件自动填充，3分钟搞定全平台发布</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">为什么选择字流？</h2>
              <p className="text-xl text-white/60">数千位创作者的共同选择</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">效率提升10倍</h3>
                  <p className="text-white/70 text-lg leading-relaxed">从30分钟的多平台发布缩短至3分钟，让创作者专注内容本身，而非繁琐的格式调整</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">智能格式适配</h3>
                  <p className="text-white/70 text-lg leading-relaxed">自动转换各平台所需格式，公众号、知乎、掘金、小红书一键搞定，告别重复劳动</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">AI智能优化</h3>
                  <p className="text-white/70 text-lg leading-relaxed">标题优化、摘要生成、标签推荐，让每篇文章都有更好的传播效果和更高的阅读量</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/25">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">专业排版样式</h3>
                  <p className="text-white/70 text-lg leading-relaxed">20+专业排版模板，让文章更美观，提升阅读体验，增强品牌形象</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">开始您的高效创作之旅</h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            加入数千位创作者，体验前所未有的发布效率
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-xl px-12 py-8 rounded-2xl shadow-2xl shadow-purple-500/25 border-0 group"
            >
              立即免费注册
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="text-white/50">
            免费试用，无需信用卡 · 30秒快速注册
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Edit3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">字流</span>
          </div>
          <div className="text-center text-white/50">
            <p>&copy; 2024 字流. 让文字如流水般顺畅发布</p>
          </div>
        </div>
      </footer>
    </div>
  )
}