import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { 
  Share2, 
  MessageCircle, 
  BookOpen, 
  Code, 
  Heart,
  Eye,
  Settings,
  Image,
  Crown,
  RefreshCw,
  Wand2,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from "lucide-react"

export default function PublishSettings() {
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    wechat: true,
    zhihu: true,
    juejin: true,
    xiaohongshu: false
  })
  
  const [selectedArticles, setSelectedArticles] = useState([
    "ChatGPT实战技巧分享",
    "提升效率的10个工具",
    "AI时代的内容创作"
  ])

  const [wechatSettings, setWechatSettings] = useState({
    style: "default",
    author: "jameszhang",
    original: true,
    reward: true
  })

  const [imageSettings, setImageSettings] = useState({
    autoCompress: true,
    targetSize: "200KB",
    watermark: true,
    watermarkPosition: "bottom-right",
    imageHost: "smms"
  })

  const recentArticles = [
    { title: "ChatGPT实战技巧分享", date: "3天前", views: "2.3k" },
    { title: "提升效率的10个工具", date: "1周前", views: "1.8k" },
    { title: "AI时代的内容创作", date: "2周前", views: "3.2k" },
    { title: "Cursor编程入门", date: "3周前", views: "2.1k" },
    { title: "我的2024年度总结", date: "1月前", views: "5.6k" }
  ]

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform as keyof typeof prev]
    }))
  }

  const toggleArticle = (article: string) => {
    setSelectedArticles(prev => 
      prev.includes(article)
        ? prev.filter(a => a !== article)
        : [...prev, article]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            发布设置
          </h1>
          <p className="text-gray-600 text-lg">配置您的多平台发布参数，一键发布到所有平台</p>
        </div>

        <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">准备发布文章</h2>
              <p className="text-gray-600">如何使用AI提升写作效率</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="hover:bg-blue-50">
              <Eye className="w-4 h-4 mr-2" />
              预览各平台
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/25">
              <Share2 className="w-4 h-4 mr-2" />
              开始发布
            </Button>
          </div>
        </div>

        {/* Platform Selection */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <Target className="w-6 h-6 mr-3 text-blue-600" />
              选择发布平台
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedPlatforms.wechat 
                    ? 'transform scale-105' 
                    : 'hover:scale-105'
                }`}
                onClick={() => togglePlatform('wechat')}
              >
                <Card className={`border-2 transition-all duration-300 ${
                  selectedPlatforms.wechat 
                    ? 'border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl shadow-green-500/20' 
                    : 'border-gray-200 hover:border-green-300 hover:shadow-lg'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        selectedPlatforms.wechat 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/25' 
                          : 'bg-green-100'
                      }`}>
                        <MessageCircle className={`w-6 h-6 ${selectedPlatforms.wechat ? 'text-white' : 'text-green-600'}`} />
                      </div>
                      <Checkbox checked={selectedPlatforms.wechat} className="data-[state=checked]:bg-green-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">公众号</h3>
                    <p className="text-sm text-gray-600 mb-2">原文发布</p>
                    {selectedPlatforms.wechat && (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        已选择
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div 
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedPlatforms.zhihu 
                    ? 'transform scale-105' 
                    : 'hover:scale-105'
                }`}
                onClick={() => togglePlatform('zhihu')}
              >
                <Card className={`border-2 transition-all duration-300 ${
                  selectedPlatforms.zhihu 
                    ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl shadow-blue-500/20' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        selectedPlatforms.zhihu 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/25' 
                          : 'bg-blue-100'
                      }`}>
                        <BookOpen className={`w-6 h-6 ${selectedPlatforms.zhihu ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <Checkbox checked={selectedPlatforms.zhihu} className="data-[state=checked]:bg-blue-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">知乎</h3>
                    <p className="text-sm text-gray-600 mb-2">原文发布</p>
                    {selectedPlatforms.zhihu && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        已选择
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div 
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedPlatforms.juejin 
                    ? 'transform scale-105' 
                    : 'hover:scale-105'
                }`}
                onClick={() => togglePlatform('juejin')}
              >
                <Card className={`border-2 transition-all duration-300 ${
                  selectedPlatforms.juejin 
                    ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl shadow-blue-500/20' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        selectedPlatforms.juejin 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25' 
                          : 'bg-blue-100'
                      }`}>
                        <Code className={`w-6 h-6 ${selectedPlatforms.juejin ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <Checkbox checked={selectedPlatforms.juejin} className="data-[state=checked]:bg-blue-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">掘金</h3>
                    <p className="text-sm text-gray-600 mb-2">原文发布</p>
                    {selectedPlatforms.juejin && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        已选择
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div 
                className={`group cursor-pointer transition-all duration-300 relative ${
                  selectedPlatforms.xiaohongshu 
                    ? 'transform scale-105' 
                    : 'hover:scale-105'
                }`}
                onClick={() => togglePlatform('xiaohongshu')}
              >
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 z-10">
                  <Crown className="w-3 h-3 mr-1" />
                  专业版
                </Badge>
                <Card className={`border-2 transition-all duration-300 ${
                  selectedPlatforms.xiaohongshu 
                    ? 'border-pink-400 bg-gradient-to-br from-pink-50 to-rose-50 shadow-xl shadow-pink-500/20' 
                    : 'border-gray-200 hover:border-pink-300 hover:shadow-lg'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        selectedPlatforms.xiaohongshu 
                          ? 'bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg shadow-pink-500/25' 
                          : 'bg-pink-100'
                      }`}>
                        <Heart className={`w-6 h-6 ${selectedPlatforms.xiaohongshu ? 'text-white' : 'text-pink-600'}`} />
                      </div>
                      <Checkbox checked={selectedPlatforms.xiaohongshu} className="data-[state=checked]:bg-pink-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">小红书</h3>
                    <p className="text-sm text-gray-600 mb-2">AI改写</p>
                    {selectedPlatforms.xiaohongshu && (
                      <Badge className="bg-gradient-to-r from-pink-500 to-rose-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        已选择
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* WeChat Settings */}
          <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <MessageCircle className="w-6 h-6 mr-3 text-green-600" />
                公众号设置
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">排版样式</Label>
                  <Select value={wechatSettings.style} onValueChange={(value) => setWechatSettings(prev => ({ ...prev, style: value }))}>
                    <SelectTrigger className="mt-2 bg-white/80">
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
                
                <div>
                  <Label className="text-sm font-medium text-gray-700">作者</Label>
                  <Input 
                    value={wechatSettings.author} 
                    onChange={(e) => setWechatSettings(prev => ({ ...prev, author: e.target.value }))}
                    className="mt-2 bg-white/80"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div>
                  <Label className="text-sm font-medium text-gray-800">原创声明</Label>
                  <p className="text-xs text-gray-600">标记为原创内容</p>
                </div>
                <Switch 
                  checked={wechatSettings.original}
                  onCheckedChange={(checked) => setWechatSettings(prev => ({ ...prev, original: checked }))}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div>
                  <Label className="text-sm font-medium text-gray-800">开启赞赏</Label>
                  <p className="text-xs text-gray-600">允许读者赞赏</p>
                </div>
                <Switch 
                  checked={wechatSettings.reward}
                  onCheckedChange={(checked) => setWechatSettings(prev => ({ ...prev, reward: checked }))}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <Label className="text-sm font-medium text-gray-800">精选推荐</Label>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="hover:bg-blue-50">
                      <RefreshCw className="w-4 h-4 mr-1" />
                      刷新列表
                    </Button>
                    <Button variant="outline" size="sm" className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                      <Wand2 className="w-4 h-4 mr-1" />
                      智能推荐
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 max-h-64 overflow-y-auto border">
                  <p className="text-sm text-gray-600 mb-4 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    从公众号历史文章中选择（最近30篇）
                  </p>
                  <div className="space-y-3">
                    {recentArticles.map((article) => (
                      <div key={article.title} className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg hover:bg-white transition-colors">
                        <Checkbox 
                          checked={selectedArticles.includes(article.title)}
                          onCheckedChange={() => toggleArticle(article.title)}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{article.title}</p>
                          <p className="text-xs text-gray-500">{article.date} · {article.views} 阅读</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Settings */}
          <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <Image className="w-6 h-6 mr-3 text-orange-600" />
                图片处理
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div>
                  <Label className="text-sm font-medium text-gray-800">自动压缩</Label>
                  <p className="text-xs text-gray-600">减少图片大小，提升加载速度</p>
                </div>
                <Switch 
                  checked={imageSettings.autoCompress}
                  onCheckedChange={(checked) => setImageSettings(prev => ({ ...prev, autoCompress: checked }))}
                />
              </div>

              {imageSettings.autoCompress && (
                <div>
                  <Label className="text-sm font-medium text-gray-700">目标大小</Label>
                  <Select value={imageSettings.targetSize} onValueChange={(value) => setImageSettings(prev => ({ ...prev, targetSize: value }))}>
                    <SelectTrigger className="mt-2 bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100KB">100KB</SelectItem>
                      <SelectItem value="200KB">200KB</SelectItem>
                      <SelectItem value="500KB">500KB</SelectItem>
                      <SelectItem value="1MB">1MB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div>
                  <Label className="text-sm font-medium text-gray-800">添加水印</Label>
                  <p className="text-xs text-gray-600">保护图片版权</p>
                </div>
                <Switch 
                  checked={imageSettings.watermark}
                  onCheckedChange={(checked) => setImageSettings(prev => ({ ...prev, watermark: checked }))}
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">图床选择</Label>
                <Select value={imageSettings.imageHost} onValueChange={(value) => setImageSettings(prev => ({ ...prev, imageHost: value }))}>
                  <SelectTrigger className="mt-2 bg-white/80">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smms">SM.MS免费图床</SelectItem>
                    <SelectItem value="qiniu">七牛云</SelectItem>
                    <SelectItem value="aliyun">阿里云OSS</SelectItem>
                    <SelectItem value="tencent">腾讯云COS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center text-sm text-blue-800 mb-2">
                  <Settings className="w-4 h-4 mr-2" />
                  <span className="font-medium">本月图片上传：23/500张</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500" style={{ width: '4.6%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <Eye className="w-6 h-6 mr-3 text-indigo-600" />
              发布预览
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {selectedPlatforms.wechat && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-green-500/25">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg">公众号</span>
                    <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-green-600" />
                      排版样式：{wechatSettings.style === 'default' ? '默认样式' : '技术极客'}
                    </p>
                    <p className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-green-600" />
                      精选推荐：{selectedArticles.length}篇文章
                    </p>
                    <p className="flex items-center">
                      <Image className="w-4 h-4 mr-2 text-green-600" />
                      图片处理：已优化
                    </p>
                  </div>
                </div>
              )}

              {selectedPlatforms.zhihu && (
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-500/25">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg">知乎</span>
                    <CheckCircle className="w-5 h-5 text-blue-600 ml-auto" />
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p className="flex items-center">
                      <Code className="w-4 h-4 mr-2 text-blue-600" />
                      格式：Markdown转换
                    </p>
                    <p className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
                      代码高亮：已优化
                    </p>
                    <p className="flex items-center">
                      <Image className="w-4 h-4 mr-2 text-blue-600" />
                      图片链接：已转换
                    </p>
                  </div>
                </div>
              )}

              {selectedPlatforms.juejin && (
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/25">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg">掘金</span>
                    <CheckCircle className="w-5 h-5 text-indigo-600 ml-auto" />
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-indigo-600" />
                      格式：技术文档格式
                    </p>
                    <p className="flex items-center">
                      <Code className="w-4 h-4 mr-2 text-indigo-600" />
                      代码块：语法高亮
                    </p>
                    <p className="flex items-center">
                      <Target className="w-4 h-4 mr-2 text-indigo-600" />
                      标签：自动添加
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-6 text-lg rounded-2xl shadow-2xl shadow-purple-500/25 group">
            <Share2 className="w-6 h-6 mr-3" />
            开始发布到所选平台
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  )
}