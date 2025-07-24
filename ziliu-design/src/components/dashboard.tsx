import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Edit3, 
  FileText, 
  History, 
  Upload, 
  Eye, 
  Share2, 
  BarChart3, 
  Copy,
  Settings,
  LogOut,
  Crown,
  Clock,
  TrendingUp,
  Plus,
  FileUp,
  Archive
} from "lucide-react"

interface DashboardProps {
  onNavigate?: (page: string) => void
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Edit3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">字流</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                  孟健
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <div className="text-sm font-medium text-gray-900">孟健</div>
                <div className="text-xs text-gray-500">免费版用户</div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              设置
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              退出
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">欢迎回来，孟健</h1>
          <p className="text-gray-600">继续您的创作之旅，让文字如流水般顺畅发布</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50/50"
            onClick={() => handleNavigate('editor')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">新建文章</h3>
              <p className="text-gray-600">开始创作新的内容</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
            onClick={() => handleNavigate('import')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileUp className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">导入文档</h3>
              <p className="text-gray-600">从Word、Markdown导入</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
            onClick={() => handleNavigate('history')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Archive className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">历史文章</h3>
              <p className="text-gray-600">查看所有文章</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Articles */}
          <div className="lg:col-span-2">
            <Card className="shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  最近文章
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">如何使用AI提升写作效率</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          2小时前
                        </span>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">草稿</Badge>
                        <span>1,235字</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleNavigate('editor')}
                    >
                      继续编辑
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      预览
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleNavigate('publish')}
                    >
                      <Share2 className="w-4 h-4 mr-1" />
                      发布
                    </Button>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">ChatGPT实战技巧分享</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          昨天
                        </span>
                        <Badge className="bg-green-100 text-green-800">已发布</Badge>
                        <span>公众号、知乎、掘金</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">2.3k</div>
                      <div className="text-gray-600">公众号阅读</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">458</div>
                      <div className="text-gray-600">知乎阅读</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">892</div>
                      <div className="text-gray-600">掘金阅读</div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      查看数据
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-1" />
                      复制新文章
                    </Button>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Cursor编程入门指南</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          3天前
                        </span>
                        <Badge className="bg-green-100 text-green-800">已发布</Badge>
                        <span>全平台</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">1.8k</div>
                      <div className="text-gray-600">总阅读量</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">156</div>
                      <div className="text-gray-600">点赞数</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">23</div>
                      <div className="text-gray-600">评论数</div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      查看数据
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-1" />
                      复制新文章
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  本月数据
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">发布文章</span>
                  <span className="text-2xl font-bold text-blue-600">12篇</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">节省时间</span>
                  <span className="text-2xl font-bold text-cyan-600">4.5小时</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">总阅读量</span>
                  <span className="text-2xl font-bold text-gray-900">28.6k</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                    相比上月提升 23%
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Card */}
            <Card className="shadow-sm border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">升级专业版</h3>
                  <p className="text-sm text-gray-600 mb-4">解锁AI功能，提升创作效率</p>
                </div>
                
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    AI标题优化
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    智能摘要生成
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    小红书风格改写
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    20+专业样式
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  立即升级 ¥19.9/月
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">快速操作</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-blue-50"
                  onClick={() => handleNavigate('featured')}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  精选文章管理
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-blue-50"
                  onClick={() => handleNavigate('publish')}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  发布设置
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-blue-50">
                  <Settings className="w-4 h-4 mr-2" />
                  账户设置
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}