import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { 
  BookOpen, 
  RefreshCw, 
  Eye, 
  TrendingUp,
  Calendar,
  Users,
  Wand2,
  Copy,
  CheckCircle,
  X,
  Sparkles,
  Target,
  Zap,
  Star,
  BarChart3
} from "lucide-react"

export default function FeaturedArticles() {
  const [selectedSource, setSelectedSource] = useState("wechat")
  const [selectedArticles, setSelectedArticles] = useState([
    "ChatGPT实战技巧分享",
    "提升效率的10个工具",
    "AI时代的内容创作",
    "Cursor编程入门"
  ])
  
  const [recommendTemplate, setRecommendTemplate] = useState(`往期精选：

1. ChatGPT实战技巧分享
2. 提升效率的10个工具  
3. AI时代的内容创作
4. Cursor编程入门

点击阅读更多精彩内容 👆`)

  const articles = [
    {
      title: "ChatGPT实战技巧分享",
      date: "3天前",
      views: "2.3k",
      platform: "公众号",
      category: "AI工具",
      trending: true
    },
    {
      title: "提升效率的10个工具",
      date: "1周前", 
      views: "1.8k",
      platform: "公众号",
      category: "效率工具",
      trending: false
    },
    {
      title: "AI时代的内容创作",
      date: "2周前",
      views: "3.2k", 
      platform: "公众号",
      category: "内容创作",
      trending: true
    },
    {
      title: "Cursor编程入门",
      date: "3周前",
      views: "2.1k",
      platform: "公众号",
      category: "编程工具",
      trending: false
    },
    {
      title: "我的2024年度总结",
      date: "1月前",
      views: "5.6k",
      platform: "公众号",
      category: "个人成长",
      trending: true
    },
    {
      title: "React性能优化实战",
      date: "1月前",
      views: "1.9k",
      platform: "掘金",
      category: "前端技术",
      trending: false
    },
    {
      title: "设计系统搭建指南",
      date: "2月前", 
      views: "2.4k",
      platform: "知乎",
      category: "设计",
      trending: false
    },
    {
      title: "远程工作的思考",
      date: "2月前",
      views: "3.1k", 
      platform: "公众号",
      category: "职场思考",
      trending: false
    }
  ]

  const toggleArticle = (title: string) => {
    setSelectedArticles(prev => 
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  const generateTemplate = () => {
    const template = `往期精选：\n\n${selectedArticles.map((title, index) => `${index + 1}. ${title}`).join('\n')}\n\n点击阅读更多精彩内容 👆`
    setRecommendTemplate(template)
  }

  const smartRecommend = () => {
    // 模拟AI智能推荐
    const aiRecommended = [
      "ChatGPT实战技巧分享",
      "AI时代的内容创作", 
      "提升效率的10个工具"
    ]
    setSelectedArticles(aiRecommended)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 flex items-center justify-center">
            <BookOpen className="w-10 h-10 mr-4 text-blue-600" />
            精选文章库
          </h1>
          <p className="text-gray-600 text-lg">智能管理您的精选推荐文章，提升内容传播效果</p>
        </div>

        <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">已选择 {selectedArticles.length} 篇精选文章</h2>
              <p className="text-gray-600">为您的新文章推荐相关内容</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="hover:bg-blue-50">
              <Eye className="w-4 h-4 mr-2" />
              预览效果
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/25">
              <CheckCircle className="w-4 h-4 mr-2" />
              应用推荐
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Article Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Source Selection */}
            <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                    文章来源
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="hover:bg-blue-50">
                      <RefreshCw className="w-4 h-4 mr-1" />
                      同步最新文章
                    </Button>
                    <Button variant="outline" size="sm" className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                      <Wand2 className="w-4 h-4 mr-1" />
                      智能推荐
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Select value={selectedSource} onValueChange={setSelectedSource}>
                  <SelectTrigger className="w-64 bg-white/80">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wechat">公众号</SelectItem>
                    <SelectItem value="zhihu">知乎</SelectItem>
                    <SelectItem value="juejin">掘金</SelectItem>
                    <SelectItem value="all">全部平台</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Article List */}
            <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-indigo-600" />
                    选择文章
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center font-medium">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                      已选择：{selectedArticles.length}篇
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedArticles([])}
                      className="hover:bg-red-50 hover:text-red-600"
                    >
                      <X className="w-4 h-4 mr-1" />
                      取消全选
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {articles.map((article) => (
                    <div 
                      key={article.title}
                      className={`group cursor-pointer transition-all duration-300 ${
                        selectedArticles.includes(article.title) 
                          ? 'transform scale-[1.02]' 
                          : 'hover:scale-[1.01]'
                      }`}
                      onClick={() => toggleArticle(article.title)}
                    >
                      <Card className={`border-2 transition-all duration-300 ${
                        selectedArticles.includes(article.title) 
                          ? 'border-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg shadow-blue-500/20' 
                          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                      }`}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Checkbox 
                              checked={selectedArticles.includes(article.title)}
                              className="mt-1 data-[state=checked]:bg-blue-500"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="font-bold text-lg text-gray-800 leading-tight group-hover:text-blue-700 transition-colors">
                                  {article.title}
                                </h3>
                                <div className="flex items-center space-x-2 ml-4">
                                  {article.trending && (
                                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                                      <TrendingUp className="w-3 h-3 mr-1" />
                                      热门
                                    </Badge>
                                  )}
                                  <Badge variant="outline" className="bg-white/80">
                                    {article.category}
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center text-gray-600">
                                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                                  <span>{article.date}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                                  <span className="font-medium">{article.views} 阅读</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Users className="w-4 h-4 mr-2 text-purple-500" />
                                  <span>{article.platform}</span>
                                </div>
                                <div className="flex items-center">
                                  {selectedArticles.includes(article.title) && (
                                    <div className="flex items-center text-green-600 font-medium">
                                      <CheckCircle className="w-4 h-4 mr-1" />
                                      已选择
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Template Preview */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-purple-700">
                  <Zap className="w-5 h-5 mr-2" />
                  快速操作
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-lg shadow-purple-500/25" 
                  onClick={smartRecommend}
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  AI智能推荐
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 shadow-lg shadow-blue-500/25" 
                  onClick={generateTemplate}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  生成推荐模块
                </Button>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25">
                  <Copy className="w-4 h-4 mr-2" />
                  复制HTML代码
                </Button>
              </CardContent>
            </Card>

            {/* Template Editor */}
            <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-600" />
                  推荐语模板
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Textarea
                  value={recommendTemplate}
                  onChange={(e) => setRecommendTemplate(e.target.value)}
                  className="min-h-[200px] font-mono text-sm bg-white/80"
                  placeholder="编辑推荐语模板..."
                />
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="hover:bg-blue-50">
                    <Eye className="w-4 h-4 mr-1" />
                    预览
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-purple-50">
                    <RefreshCw className="w-4 h-4 mr-1" />
                    重置
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-orange-600" />
                  效果预览
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-inner">
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-line text-sm text-gray-700 leading-relaxed">
                      {recommendTemplate}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="shadow-xl bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {selectedArticles.length}
                  </div>
                  <div className="text-cyan-700 font-medium">
                    篇精选文章
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-white/80 rounded-lg">
                    <div className="font-bold text-cyan-700 text-lg">
                      {articles
                        .filter(a => selectedArticles.includes(a.title))
                        .reduce((sum, a) => sum + parseFloat(a.views.replace('k', '')) * 1000, 0)
                        .toLocaleString()}
                    </div>
                    <div className="text-cyan-600 text-xs">总阅读量</div>
                  </div>
                  <div className="text-center p-3 bg-white/80 rounded-lg">
                    <div className="font-bold text-cyan-700 text-lg">
                      {selectedArticles.length > 0 
                        ? Math.round(articles
                            .filter(a => selectedArticles.includes(a.title))
                            .reduce((sum, a) => sum + parseFloat(a.views.replace('k', '')) * 1000, 0) / selectedArticles.length)
                            .toLocaleString()
                        : 0}
                    </div>
                    <div className="text-cyan-600 text-xs">平均阅读</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex items-center text-sm text-cyan-700">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>优质内容推荐</span>
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