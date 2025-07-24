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
  Wand2,
  CheckCircle,
  Clock,
  TrendingUp,
  Copy,
  Settings,
  Crown
} from "lucide-react"

export default function FeaturedArticles() {
  const [selectedSource, setSelectedSource] = useState("wechat")
  const [selectedArticles, setSelectedArticles] = useState([
    "ChatGPT实战技巧分享",
    "提升效率的10个工具",
    "AI时代的内容创作",
    "Cursor编程入门"
  ])

  const articles = [
    {
      title: "ChatGPT实战技巧分享",
      publishTime: "3天前",
      views: "2.3k",
      selected: true,
      trending: true
    },
    {
      title: "提升效率的10个工具",
      publishTime: "1周前",
      views: "1.8k",
      selected: true,
      trending: false
    },
    {
      title: "AI时代的内容创作",
      publishTime: "2周前",
      views: "3.2k",
      selected: true,
      trending: true
    },
    {
      title: "Cursor编程入门",
      publishTime: "3周前",
      views: "2.1k",
      selected: true,
      trending: false
    },
    {
      title: "我的2024年度总结",
      publishTime: "1月前",
      views: "5.6k",
      selected: false,
      trending: true
    },
    {
      title: "React性能优化指南",
      publishTime: "1月前",
      views: "4.2k",
      selected: false,
      trending: false
    },
    {
      title: "TypeScript进阶技巧",
      publishTime: "2月前",
      views: "3.8k",
      selected: false,
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

  const generateRecommendation = () => {
    const template = `往期精选：
${selectedArticles.map(title => `• ${title}`).join('\n')}

更多精彩内容，欢迎关注我的公众号！`
    
    return template
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <BookOpen className="w-10 h-10 mr-4 text-blue-600" />
            精选文章管理
          </h1>
          <p className="text-gray-600 text-lg">智能管理推荐文章，一键生成精选推荐模块</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Source Selection */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center text-gray-900">
                    <Settings className="w-5 h-5 mr-2 text-blue-600" />
                    文章来源
                  </CardTitle>
                  <div className="flex items-center space-x-3">
                    <Select value={selectedSource} onValueChange={setSelectedSource}>
                      <SelectTrigger className="w-32 bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wechat">公众号</SelectItem>
                        <SelectItem value="zhihu">知乎</SelectItem>
                        <SelectItem value="juejin">掘金</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm" className="hover:bg-gray-100">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      同步最新文章
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Articles List */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="text-xl flex items-center justify-between text-gray-900">
                  <span className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    文章列表
                  </span>
                  <Badge className="bg-blue-100 text-blue-800">
                    已选择 {selectedArticles.length} 篇
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 p-6 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
                  <div className="col-span-1">选择</div>
                  <div className="col-span-6">文章标题</div>
                  <div className="col-span-2">发布时间</div>
                  <div className="col-span-2">阅读量</div>
                  <div className="col-span-1">状态</div>
                </div>
                
                {/* Articles */}
                <div className="divide-y divide-gray-200">
                  {articles.map((article, index) => (
                    <div 
                      key={index}
                      className={`grid grid-cols-12 gap-4 p-6 hover:bg-gray-50 transition-colors ${
                        selectedArticles.includes(article.title) ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="col-span-1 flex items-center">
                        <Checkbox 
                          checked={selectedArticles.includes(article.title)}
                          onCheckedChange={() => toggleArticle(article.title)}
                          className="data-[state=checked]:bg-blue-600"
                        />
                      </div>
                      <div className="col-span-6 flex items-center">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                          {article.trending && (
                            <Badge className="bg-red-100 text-red-800 text-xs">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              热门
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.publishTime}
                      </div>
                      <div className="col-span-2 flex items-center">
                        <span className="font-semibold text-blue-600">{article.views}</span>
                      </div>
                      <div className="col-span-1 flex items-center">
                        {selectedArticles.includes(article.title) ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-sm border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedArticles(articles.map(a => a.title))}
                      className="hover:bg-gray-100"
                    >
                      全选
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedArticles([])}
                      className="hover:bg-gray-100"
                    >
                      取消选择
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedArticles(articles.filter(a => a.trending).map(a => a.title))}
                      className="border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <TrendingUp className="w-4 h-4 mr-1" />
                      选择热门
                    </Button>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    <Wand2 className="w-4 h-4 mr-1" />
                    AI智能推荐
                    <Badge className="ml-1 bg-blue-100 text-blue-800 text-xs">专业版</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Summary */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="flex items-center text-gray-900">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  选择统计
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{selectedArticles.length}</div>
                  <div className="text-sm text-gray-600">篇文章已选择</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">热门文章：</span>
                    <span className="font-medium text-red-600">
                      {selectedArticles.filter(title => 
                        articles.find(a => a.title === title)?.trending
                      ).length} 篇
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">总阅读量：</span>
                    <span className="font-medium text-blue-600">
                      {selectedArticles.reduce((total, title) => {
                        const article = articles.find(a => a.title === title)
                        if (article) {
                          const views = parseFloat(article.views.replace('k', '')) * 1000
                          return total + views
                        }
                        return total
                      }, 0) / 1000}k
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Template Preview */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="flex items-center text-gray-900">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  推荐模块预览
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
                  <h4 className="font-medium text-blue-900 mb-3">推荐语模板：</h4>
                  <Textarea 
                    className="bg-white text-sm"
                    rows={8}
                    value={generateRecommendation()}
                    readOnly
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Eye className="w-4 h-4 mr-1" />
                    预览效果
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-gray-100">
                    <Copy className="w-4 h-4 mr-1" />
                    复制
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="shadow-sm border border-gray-200">
              <CardContent className="p-6 space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Wand2 className="w-4 h-4 mr-2" />
                  生成推荐模块
                </Button>
                <Button variant="outline" className="w-full hover:bg-gray-100">
                  <Settings className="w-4 h-4 mr-2" />
                  编辑模板
                </Button>
              </CardContent>
            </Card>

            {/* AI Features */}
            <Card className="shadow-sm border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Crown className="w-5 h-5 mr-2" />
                  AI智能功能
                  <Badge className="ml-2 bg-blue-100 text-blue-800">专业版</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-blue-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    智能推荐相关文章
                  </div>
                  <div className="flex items-center text-blue-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    自动生成推荐语
                  </div>
                  <div className="flex items-center text-blue-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    优化推荐顺序
                  </div>
                  <div className="flex items-center text-blue-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    个性化推荐模板
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  升级专业版 ¥19.9/月
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}