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
  Sparkles,
  Target,
  Zap
} from "lucide-react"

interface DashboardProps {
  onNavigate?: (page: string) => void
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Edit3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              字流
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Avatar className="ring-2 ring-purple-200">
              <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold">jameszhang</AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-700">jameszhang</span>
            <Button variant="ghost" size="sm" className="hover:bg-purple-50">
              <Settings className="w-4 h-4 mr-2" />
              设置
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-red-50 hover:text-red-600">
              <LogOut className="w-4 h-4 mr-2" />
              退出
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">欢迎回来，jameszhang！</h1>
          <p className="text-gray-600">继续您的创作之旅，让文字如流水般顺畅发布</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card 
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-dashed border-cyan-200 hover:border-cyan-400 bg-gradient-to-br from-cyan-50 to-blue-50 hover:scale-105"
            onClick={() => onNavigate?.('editor')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/25">
                <Plus className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">新建文章</h3>
              <p className="text-gray-600">开始创作新的精彩内容</p>
            </CardContent>
          </Card>

          <Card 
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50"
            onClick={() => onNavigate?.('import')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/25">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">导入文档</h3>
              <p className="text-gray-600">从Word或Markdown快速导入</p>
            </CardContent>
          </Card>

          <Card 
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50"
            onClick={() => onNavigate?.('history')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                <History className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">历史文章</h3>
              <p className="text-gray-600">查看所有创作内容</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Articles */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl bg-white/80 backdrop-blur-sm border-0">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-t-lg">
                <CardTitle className="flex items-center justify-between text-xl">
                  <span className="flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-blue-600" />
                    最近文章
                  </span>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50">查看全部</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-800">如何使用AI提升写作效率</h3>
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">草稿</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>2小时前</span>
                    <span className="mx-2">·</span>
                    <FileText className="w-4 h-4 mr-1" />
                    <span>1,235字</span>
                    <span className="mx-2">·</span>
                    <Target className="w-4 h-4 mr-1" />
                    <span>预计阅读 5分钟</span>
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      onClick={() => onNavigate?.('editor')}
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      继续编辑
                    </Button>
                    <Button variant="outline" className="hover:bg-blue-50">
                      <Eye className="w-4 h-4 mr-2" />
                      预览
                    </Button>
                    <Button variant="outline" className="hover:bg-green-50">
                      <Share2 className="w-4 h-4 mr-2" />
                      发布
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-800">ChatGPT实战技巧分享</h3>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">已发布</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>昨天</span>
                    <span className="mx-2">·</span>
                    <span className="flex items-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      公众号、知乎、掘金
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
                    <span className="font-semibold text-green-700">阅读：2.3k / 458 / 892</span>
                    <span className="mx-2">·</span>
                    <Sparkles className="w-4 h-4 mr-1 text-purple-600" />
                    <span className="text-purple-700">表现优秀</span>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="hover:bg-blue-50">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      查看数据
                    </Button>
                    <Button variant="outline" className="hover:bg-purple-50">
                      <Copy className="w-4 h-4 mr-2" />
                      复制新文章
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl text-gray-800">Cursor编程入门指南</h3>
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">已发布</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>3天前</span>
                    <span className="mx-2">·</span>
                    <span className="flex items-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      公众号、掘金
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <TrendingUp className="w-4 h-4 mr-1 text-blue-600" />
                    <span className="font-semibold text-blue-700">阅读：1.8k / 623</span>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="hover:bg-blue-50">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      查看数据
                    </Button>
                    <Button variant="outline" className="hover:bg-purple-50">
                      <Copy className="w-4 h-4 mr-2" />
                      复制新文章
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats & Upgrade */}
          <div className="space-y-6">
            {/* Stats Card */}
            <Card className="shadow-xl bg-gradient-to-br from-white to-blue-50 border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  本月数据
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">12</div>
                    <div className="text-sm text-gray-600">发布文章</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-1">4.5h</div>
                    <div className="text-sm text-gray-600">节省时间</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-1">28.6k</div>
                    <div className="text-sm text-gray-600">总阅读量</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-1">3</div>
                    <div className="text-sm text-gray-600">平台覆盖</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Card */}
            <Card className="shadow-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-2 border-yellow-300">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Crown className="w-6 h-6 mr-2" />
                  升级专业版
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-gray-700 font-medium">
                  解锁AI功能，提升创作效率
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white/80 rounded-lg">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium">AI标题优化</span>
                    <Sparkles className="w-4 h-4 ml-auto text-yellow-600" />
                  </div>
                  <div className="flex items-center p-3 bg-white/80 rounded-lg">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium">智能摘要生成</span>
                    <Zap className="w-4 h-4 ml-auto text-yellow-600" />
                  </div>
                  <div className="flex items-center p-3 bg-white/80 rounded-lg">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium">小红书风格改写</span>
                    <Edit3 className="w-4 h-4 ml-auto text-yellow-600" />
                  </div>
                  <div className="flex items-center p-3 bg-white/80 rounded-lg">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium">20+专业排版样式</span>
                    <FileText className="w-4 h-4 ml-auto text-yellow-600" />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 shadow-lg">
                  <Crown className="w-5 h-5 mr-2" />
                  立即升级专业版
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-600">首月仅需</p>
                  <p className="text-2xl font-bold text-orange-600">¥9.9</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-700">
                  <Sparkles className="w-5 h-5 mr-2" />
                  使用技巧
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-white/80 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">使用Markdown编写可以更好地适配各平台格式</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/80 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">安装Chrome插件可以一键填充内容到各平台</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/80 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">定期备份重要文章，避免意外丢失</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}