import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { 
  ArrowLeft, 
  Eye, 
  Bot, 
  Share2, 
  Bold, 
  Italic, 
  Underline,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Code,
  List,
  Image,
  Link,
  Table,
  FileText,
  Clock,
  Upload,
  CheckCircle,
  Wand2,
  Sparkles,
  Save,
  Zap
} from "lucide-react"

export default function Editor() {
  const [activeTab, setActiveTab] = useState("wechat")
  const [content, setContent] = useState(`# 如何使用AI提升写作效率

## 1. 背景介绍

在内容创作领域，效率一直是创作者们关注的核心问题。随着AI技术的发展，我们有了更多提升写作效率的工具和方法。

## 2. 核心技巧

### 2.1 提示词优化

合理的提示词设计是使用AI的关键。以下是一个优化示例：

\`\`\`python
def optimize_prompt():
    # 优化前的提示词
    basic_prompt = "帮我写一篇文章"
    
    # 优化后的提示词
    optimized_prompt = """
    请帮我写一篇关于AI写作的技术文章，要求：
    1. 字数控制在1500字左右
    2. 包含实际案例和代码示例
    3. 语言通俗易懂，适合技术新手
    4. 结构清晰，有明确的章节划分
    """
    return optimized_prompt
\`\`\`

### 2.2 工具组合使用

将多个AI工具结合使用，可以获得更好的效果：

1. **内容生成**：使用ChatGPT生成初稿
2. **语法检查**：使用Grammarly优化语法
3. **排版美化**：使用字流进行多平台适配

## 3. 实战案例

通过实际案例来展示AI写作的威力...`)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-blue-50 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              工作台
            </Button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              如何使用AI提升写作效率
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hover:bg-blue-50">
              <Eye className="w-4 h-4 mr-2" />
              预览
            </Button>
            <Button variant="outline" size="sm" className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:from-purple-100 hover:to-pink-100">
              <Bot className="w-4 h-4 mr-2 text-purple-600" />
              AI优化
              <Badge className="ml-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-xs">专业版</Badge>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/25">
              <Share2 className="w-4 h-4 mr-2" />
              发布
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            {/* Toolbar */}
            <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
              <CardContent className="p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Italic className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Underline className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Heading1 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Heading2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Heading3 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Quote className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Code className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Image className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Link className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-white">
                      <Table className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="ml-auto flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                      <Save className="w-4 h-4 mr-1" />
                      保存
                    </Button>
                    <Button variant="outline" size="sm">
                      MD ⇄ 富文本
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Editor */}
            <Card className="flex-1 shadow-xl bg-white/90 backdrop-blur-sm border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
                <CardTitle className="text-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  编辑区
                  <div className="ml-auto flex items-center space-x-2">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      已保存
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[600px] font-mono text-sm resize-none border-0 focus-visible:ring-0 rounded-none"
                  placeholder="开始写作..."
                />
              </CardContent>
            </Card>

            {/* Status Bar */}
            <div className="flex items-center justify-between text-sm bg-white/90 backdrop-blur-sm rounded-xl px-6 py-4 border-0 shadow-lg">
              <div className="flex items-center space-x-6">
                <span className="flex items-center text-blue-600 font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  字数：1,235
                </span>
                <span className="flex items-center text-purple-600 font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  预计阅读：5分钟
                </span>
                <span className="flex items-center text-green-600 font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  自动保存于1分钟前
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex items-center text-emerald-600 font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  图片：3张 已上传图床
                </span>
                <Button variant="outline" size="sm" className="hover:bg-blue-50">
                  <Upload className="w-4 h-4 mr-1" />
                  重新上传
                </Button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-purple-600" />
                    预览区
                  </CardTitle>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3 bg-white/80">
                      <TabsTrigger value="wechat" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
                        公众号
                      </TabsTrigger>
                      <TabsTrigger value="zhihu" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
                        知乎
                      </TabsTrigger>
                      <TabsTrigger value="juejin" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
                        掘金
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 min-h-[500px] border border-gray-100">
                    <div className="prose prose-sm max-w-none">
                      <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        如何使用AI提升写作效率
                      </h1>
                      
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-6 border-l-4 border-blue-500">
                        <h2 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                          <Sparkles className="w-5 h-5 mr-2" />
                          1. 背景介绍
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                          在内容创作领域，效率一直是创作者们关注的核心问题。随着AI技术的发展，我们有了更多提升写作效率的工具和方法。
                        </p>
                      </div>
                      
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-6 border-l-4 border-purple-500">
                        <h2 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          2. 核心技巧
                        </h2>
                        
                        <h3 className="text-base font-medium mt-4 mb-3 text-purple-700">
                          2.1 提示词优化
                        </h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-4">
                          合理的提示词设计是使用AI的关键。以下是一个优化示例：
                        </p>
                        
                        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-green-400 p-4 rounded-xl text-sm font-mono mb-4 shadow-lg">
                          <div className="text-gray-400 mb-2"># 优化前的提示词</div>
                          <div className="text-yellow-300">basic_prompt = "帮我写一篇文章"</div>
                          <br />
                          <div className="text-gray-400 mb-2"># 优化后的提示词</div>
                          <div className="text-cyan-300">optimized_prompt = """</div>
                          <div className="ml-4 text-white">请帮我写一篇关于AI写作的技术文章...</div>
                          <div className="text-cyan-300">"""</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">排版样式：</span>
                      <Select defaultValue="default">
                        <SelectTrigger className="w-40 bg-white/80">
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
                    
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-lg shadow-purple-500/25">
                      <Wand2 className="w-4 h-4 mr-2" />
                      应用此样式
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Bot className="w-5 h-5 mr-2" />
                  AI智能建议
                  <Badge className="ml-2 bg-gradient-to-r from-yellow-500 to-orange-500">专业版</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">标题优化建议</h4>
                  <p className="text-sm text-gray-600">AI写作革命：从30分钟到3分钟的效率突破</p>
                </div>
                <div className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">内容结构建议</h4>
                  <p className="text-sm text-gray-600">建议增加实际案例和数据支撑，提升文章说服力</p>
                </div>
                <Button variant="outline" className="w-full border-purple-300 hover:bg-purple-50">
                  <Sparkles className="w-4 h-4 mr-2" />
                  查看更多建议
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}