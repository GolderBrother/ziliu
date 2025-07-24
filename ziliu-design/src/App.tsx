import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Home, 
  LayoutDashboard, 
  Edit3, 
  Upload, 
  Bot, 
  Share2, 
  BookOpen,
  Eye,
  ArrowLeft,
  Zap,
  Sparkles
} from "lucide-react"

// Import all components
import LandingPage from './components/landing-page'
import Dashboard from './components/dashboard'
import Editor from './components/editor'
import ImportDialog from './components/import-dialog'
import AIOptimizationPanel from './components/ai-optimization-panel'
import PublishSettings from './components/publish-settings'
import FeaturedArticles from './components/featured-articles'

function App() {
  const [currentPage, setCurrentPage] = useState("overview")
  const [showImportDialog, setShowImportDialog] = useState(false)
  const [showAIPanel, setShowAIPanel] = useState(false)

  const handleNavigate = (page: string) => {
    if (page === 'import') {
      setShowImportDialog(true)
    } else if (page === 'ai') {
      setShowAIPanel(true)
    } else {
      setCurrentPage(page)
      // 关闭弹窗
      setShowImportDialog(false)
      setShowAIPanel(false)
    }
  }

  const pages = [
    {
      id: "landing",
      name: "首页（未登录）",
      icon: Home,
      description: "产品介绍页面，展示核心价值和功能特点",
      component: <LandingPage />
    },
    {
      id: "dashboard", 
      name: "工作台",
      icon: LayoutDashboard,
      description: "用户登录后的主界面，显示文章列表和统计数据",
      component: <Dashboard onNavigate={handleNavigate} />
    },
    {
      id: "editor",
      name: "编辑器",
      icon: Edit3, 
      description: "文章编辑界面，支持Markdown和实时预览",
      component: <Editor />
    },
    {
      id: "publish",
      name: "发布设置",
      icon: Share2,
      description: "多平台发布配置，包括样式选择和参数设置",
      component: <PublishSettings />
    },
    {
      id: "featured",
      name: "精选文章管理", 
      icon: BookOpen,
      description: "管理精选推荐文章，生成推荐模块",
      component: <FeaturedArticles />
    },
    {
      id: "history",
      name: "历史文章",
      icon: BookOpen,
      description: "查看所有历史文章和管理",
      component: <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">历史文章</h1>
          <div className="grid gap-4">
            {[
              { title: "如何使用AI提升写作效率", date: "2小时前", status: "草稿", views: "0" },
              { title: "ChatGPT实战技巧分享", date: "昨天", status: "已发布", views: "2.3k" },
              { title: "Cursor编程入门指南", date: "3天前", status: "已发布", views: "1.8k" },
              { title: "我的2024年度总结", date: "1月前", status: "已发布", views: "5.6k" }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{article.title}</h3>
                      <p className="text-gray-600">{article.date} · {article.views} 阅读</p>
                    </div>
                    <Badge variant={article.status === "已发布" ? "default" : "secondary"} className={article.status === "已发布" ? "bg-green-100 text-green-800" : ""}>
                      {article.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    }
  ]

  const dialogs = [
    {
      id: "import",
      name: "文档导入弹窗",
      icon: Upload,
      description: "支持Word、Markdown等多种格式导入"
    },
    {
      id: "ai",
      name: "AI优化面板",
      icon: Bot,
      description: "AI标题优化、摘要生成等专业版功能"
    }
  ]

  // Overview page
  if (currentPage === "overview") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-6 shadow-lg">
              <Edit3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              字流（ZiLiu）设计稿
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              多平台内容发布工具 - 完整UI设计展示
            </p>
            <p className="text-gray-500 text-lg">
              让文字如流水般顺畅地流向每个平台
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            {/* Main Pages */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-white border-b border-gray-200">
                <CardTitle className="flex items-center text-gray-900 text-2xl">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  核心页面设计
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pages.map((page) => (
                    <Card 
                      key={page.id}
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
                      onClick={() => handleNavigate(page.id)}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors shadow-md">
                            <page.icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg">{page.name}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {page.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dialog Components */}
            <Card className="shadow-lg border border-gray-200">
              <CardHeader className="bg-white border-b border-gray-200">
                <CardTitle className="flex items-center text-gray-900 text-2xl">
                  <Bot className="w-6 h-6 mr-3 text-cyan-600" />
                  弹窗组件设计
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {dialogs.map((dialog) => (
                    <Card 
                      key={dialog.id}
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-cyan-300 group"
                      onClick={() => handleNavigate(dialog.id)}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-cyan-700 transition-colors shadow-md">
                            <dialog.icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg">{dialog.name}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {dialog.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Design Features */}
            <Card className="shadow-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader className="bg-white/80 border-b border-blue-200">
                <CardTitle className="text-gray-900 text-2xl flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-blue-600" />
                  设计特点
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors shadow-lg">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">现代简约</h4>
                    <p className="text-gray-600 text-sm">深蓝色主色调，简洁专业的设计风格</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-700 transition-colors shadow-lg">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">响应式布局</h4>
                    <p className="text-gray-600 text-sm">完美适配桌面和移动设备</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors shadow-lg">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">科技感</h4>
                    <p className="text-gray-600 text-sm">圆角卡片、微妙阴影、专业配色</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-700 transition-colors shadow-lg">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">功能完整</h4>
                    <p className="text-gray-600 text-sm">覆盖所有核心业务场景</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-500">
              点击上方卡片查看具体页面设计 · 基于 React + shadcn/ui 实现
            </p>
          </div>
        </div>

        {/* Dialogs */}
        <ImportDialog open={showImportDialog} onOpenChange={setShowImportDialog} />
        <AIOptimizationPanel open={showAIPanel} onOpenChange={setShowAIPanel} />
      </div>
    )
  }

  // Find current page component
  const currentPageData = pages.find(p => p.id === currentPage)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => handleNavigate("overview")}
              className="font-semibold hover:bg-gray-100 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              返回总览
            </Button>
            {currentPageData && (
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                <currentPageData.icon className="w-5 h-5 mr-2 text-blue-600" />
                <span className="font-semibold text-gray-900">{currentPageData.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Page Content */}
      {currentPageData?.component}

      {/* Dialogs */}
      <ImportDialog open={showImportDialog} onOpenChange={setShowImportDialog} />
      <AIOptimizationPanel open={showAIPanel} onOpenChange={setShowAIPanel} />
    </div>
  )
}

export default App