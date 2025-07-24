import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { 
  Share2, 
  Settings, 
  Eye, 
  CheckCircle,
  RefreshCw,
  Wand2,
  Image as ImageIcon,
  Zap,
  Crown,
  MessageSquare,
  Users,
  Globe,
  Smartphone
} from "lucide-react"

export default function PublishSettings() {
  const [selectedPlatforms, setSelectedPlatforms] = useState(["wechat", "zhihu", "juejin"])
  const [selectedStyle, setSelectedStyle] = useState("default")
  const [selectedArticles, setSelectedArticles] = useState([
    "ChatGPT实战技巧分享",
    "提升效率的10个工具",
    "AI时代的内容创作"
  ])

  const platforms = [
    { id: "wechat", name: "公众号", icon: MessageSquare, color: "green", free: true },
    { id: "zhihu", name: "知乎", icon: Users, color: "blue", free: true },
    { id: "juejin", name: "掘金", icon: Globe, color: "blue", free: true },
    { id: "xiaohongshu", name: "小红书", icon: Smartphone, color: "red", free: false }
  ]

  const articles = [
    { title: "ChatGPT实战技巧分享", views: "2.3k", selected: true },
    { title: "提升效率的10个工具", views: "1.8k", selected: true },
    { title: "AI时代的内容创作", views: "3.2k", selected: true },
    { title: "Cursor编程入门", views: "2.1k", selected: false },
    { title: "我的2024年度总结", views: "5.6k", selected: false }
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Share2 className="w-10 h-10 mr-4 text-blue-600" />
            发布设置
          </h1>
          <p className="text-gray-600 text-lg">配置多平台发布参数，一键发布到所有平台</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Platform Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Platform Cards */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="text-xl flex items-center text-gray-900">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  选择发布平台
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {platforms.map((platform) => (
                    <Card 
                      key={platform.id}
                      className={`cursor-pointer transition-all duration-300 border-2 ${
                        selectedPlatforms.includes(platform.id)
                          ? 'border-blue-300 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${!platform.free ? 'opacity-75' : ''}`}
                      onClick={() => platform.free && togglePlatform(platform.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                              platform.color === 'green' ? 'bg-green-100' :
                              platform.color === 'blue' ? 'bg-blue-100' :
                              platform.color === 'red' ? 'bg-red-100' : 'bg-gray-100'
                            }`}>
                              <platform.icon className={`w-6 h-6 ${
                                platform.color === 'green' ? 'text-green-600' :
                                platform.color === 'blue' ? 'text-blue-600' :
                                platform.color === 'red' ? 'text-red-600' : 'text-gray-600'
                              }`} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                              <p className="text-sm text-gray-600">
                                {platform.id === 'wechat' && '原文发布'}
                                {platform.id === 'zhihu' && '原文发布'}
                                {platform.id === 'juejin' && '原文发布'}
                                {platform.id === 'xiaohongshu' && 'AI改写'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {!platform.free && (
                              <Badge className="bg-blue-100 text-blue-800">
                                <Crown className="w-3 h-3 mr-1" />
                                专业版
                              </Badge>
                            )}
                            <Checkbox 
                              checked={selectedPlatforms.includes(platform.id)}
                              disabled={!platform.free}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WeChat Settings */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="text-xl flex items-center text-gray-900">
                  <MessageSquare className="w-5 h-5 mr-2 text-green-600" />
                  公众号设置
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Style Selection */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">排版样式</label>
                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">默认样式</SelectItem>
                      <SelectItem value="tech">技术极客</SelectItem>
                      <SelectItem value="business">商务简约</SelectItem>
                      <SelectItem value="creative">创意文艺</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Author Settings */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">作者</label>
                    <Select defaultValue="mengjian">
                      <SelectTrigger className="bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mengjian">孟健</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="original" defaultChecked />
                    <label htmlFor="original" className="text-sm font-medium text-gray-700">
                      原创声明
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="reward" defaultChecked />
                    <label htmlFor="reward" className="text-sm font-medium text-gray-700">
                      开启赞赏
                    </label>
                  </div>
                </div>

                {/* Featured Articles */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium text-gray-700">精选推荐</label>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="hover:bg-gray-100">
                        <RefreshCw className="w-4 h-4 mr-1" />
                        刷新列表
                      </Button>
                      <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Wand2 className="w-4 h-4 mr-1" />
                        智能推荐
                        <Badge className="ml-1 bg-blue-100 text-blue-800 text-xs">专业版</Badge>
                      </Button>
                    </div>
                  </div>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="text-sm text-gray-600 mb-3">从公众号历史文章中选择（最近30篇）</div>
                      <div className="space-y-3 max-h-48 overflow-y-auto">
                        {articles.map((article, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Checkbox 
                                checked={article.selected}
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <div>
                                <div className="font-medium text-gray-900">{article.title}</div>
                                <div className="text-sm text-gray-600">{article.views} 阅读</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Traffic Template */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">引流文案</label>
                  <div className="flex items-center space-x-3 mb-3">
                    <Select defaultValue="default">
                      <SelectTrigger className="w-48 bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">默认模板</SelectItem>
                        <SelectItem value="tech">技术类模板</SelectItem>
                        <SelectItem value="growth">成长类模板</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">编辑</Button>
                  </div>
                  <Textarea 
                    className="bg-white"
                    placeholder="在这里编辑引流文案..."
                    defaultValue="关注我，获取更多优质内容分享！"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Image Processing */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="text-xl flex items-center text-gray-900">
                  <ImageIcon className="w-5 h-5 mr-2 text-cyan-600" />
                  图片处理
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-gray-700">自动压缩</label>
                      <Switch defaultChecked />
                    </div>
                    <Select defaultValue="200kb">
                      <SelectTrigger className="bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100kb">100KB</SelectItem>
                        <SelectItem value="200kb">200KB</SelectItem>
                        <SelectItem value="500kb">500KB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-gray-700">添加水印</label>
                      <Switch defaultChecked />
                    </div>
                    <Select defaultValue="bottom-right">
                      <SelectTrigger className="bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bottom-right">右下角</SelectItem>
                        <SelectItem value="bottom-left">左下角</SelectItem>
                        <SelectItem value="center">居中</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-3 block">图床选择</label>
                  <Select defaultValue="smms">
                    <SelectTrigger className="bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smms">SM.MS免费图床</SelectItem>
                      <SelectItem value="qiniu">七牛云</SelectItem>
                      <SelectItem value="aliyun">阿里云OSS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preview */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="flex items-center text-gray-900">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  发布预览
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900 mb-2">选中平台：</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedPlatforms.map(platformId => {
                        const platform = platforms.find(p => p.id === platformId)
                        return platform ? (
                          <Badge key={platformId} className="bg-blue-100 text-blue-800">
                            {platform.name}
                          </Badge>
                        ) : null
                      })}
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <div className="font-medium text-gray-900 mb-2">精选文章：</div>
                    <div className="text-gray-600">{selectedArticles.length} 篇已选择</div>
                  </div>
                  
                  <div className="text-sm">
                    <div className="font-medium text-gray-900 mb-2">排版样式：</div>
                    <div className="text-gray-600">
                      {selectedStyle === 'default' && '默认样式'}
                      {selectedStyle === 'tech' && '技术极客'}
                      {selectedStyle === 'business' && '商务简约'}
                      {selectedStyle === 'creative' && '创意文艺'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="shadow-sm border border-gray-200">
              <CardContent className="p-6 space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  <Eye className="w-5 h-5 mr-2" />
                  预览各平台效果
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                  <Share2 className="w-5 h-5 mr-2" />
                  开始发布
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="shadow-sm border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Zap className="w-5 h-5 mr-2" />
                  效率统计
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">3分钟</div>
                  <div className="text-sm text-gray-600">预计发布时间</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">27分钟</div>
                  <div className="text-sm text-gray-600">为您节省时间</div>
                </div>
                <div className="text-center pt-4 border-t border-blue-200">
                  <div className="text-sm text-blue-700 font-medium">
                    相比传统方式提升 90% 效率
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}