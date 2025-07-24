import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Edit3, Zap, Share2, Bot, ArrowRight, Star, Users, TrendingUp } from "lucide-react"

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Edit3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">字流</span>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              功能特点
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              产品优势
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              价格方案
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
              登录
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              免费注册
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-blue-200 mb-8 shadow-sm">
              <Star className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-gray-700 text-sm font-medium">已有 10,000+ 创作者选择字流</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              让文字如流水般
              <br />
              <span className="text-blue-600">顺畅发布</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              一次创作，智能适配，多平台发布<br />
              <span className="text-blue-700 font-medium">将30分钟的发布时间缩短至3分钟</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6 rounded-lg shadow-lg"
              >
                立即免费使用
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-blue-600 border-blue-200 hover:bg-blue-50 text-lg px-10 py-6 rounded-lg"
                onClick={() => scrollToSection('features')}
              >
                了解更多
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">活跃用户</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">500万+</div>
                <div className="text-gray-600">文章发布</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-gray-600">效率提升</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">强大功能，简单易用</h2>
            <p className="text-xl text-gray-600">为创作者量身打造的多平台发布工具</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <Edit3 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">智能排版</h3>
                <p className="text-gray-600 leading-relaxed">告别丑陋格式，一键美化文章样式，让内容更具吸引力</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-600 transition-colors">
                  <Zap className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">精选推荐</h3>
                <p className="text-gray-600 leading-relaxed">智能推荐相关文章，不再手动添加，提升文章传播效果</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <Bot className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI改写</h3>
                <p className="text-gray-600 leading-relaxed">智能适配小红书风格，轻松获得流量，扩大内容影响力</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-600 transition-colors">
                  <Share2 className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">一键发布</h3>
                <p className="text-gray-600 leading-relaxed">Chrome插件自动填充，3分钟搞定全平台发布</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择字流？</h2>
              <p className="text-xl text-gray-600">数千位创作者的共同选择</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">效率提升10倍</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">从30分钟的多平台发布缩短至3分钟，让创作者专注内容本身，而非繁琐的格式调整</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">智能格式适配</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">自动转换各平台所需格式，公众号、知乎、掘金、小红书一键搞定，告别重复劳动</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI智能优化</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">标题优化、摘要生成、标签推荐，让每篇文章都有更好的传播效果和更高的阅读量</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">专业排版样式</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">20+专业排版模板，让文章更美观，提升阅读体验，增强品牌形象</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">选择适合您的方案</h2>
            <p className="text-xl text-gray-600">灵活的定价，满足不同需求</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">免费版</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">¥0</div>
                  <p className="text-gray-600">适合个人创作者</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    3个平台发布
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    基础排版样式
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    30篇文章历史
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    Chrome插件
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  立即开始
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-300 bg-blue-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  推荐
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">专业版</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">¥19.9</div>
                  <div className="text-gray-600 mb-4">每月</div>
                  <p className="text-gray-600">适合专业创作者</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    4个平台发布（含小红书）
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    AI智能优化
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    20+专业样式
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    无限文章历史
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    数据统计分析
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  升级专业版
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">开始您的高效创作之旅</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              加入数千位创作者，体验前所未有的发布效率
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-8 rounded-lg shadow-lg"
              >
                立即免费注册
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
            
            <p className="text-blue-200">
              免费试用，无需信用卡 · 30秒快速注册
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Edit3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">字流</span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 字流. 让文字如流水般顺畅发布</p>
          </div>
        </div>
      </footer>
    </div>
  )
}