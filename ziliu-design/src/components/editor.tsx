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
  Save,
  Zap
} from "lucide-react"

export default function Editor() {
  const [activeTab, setActiveTab] = useState("wechat")
  const [selectedStyle, setSelectedStyle] = useState("default")
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              工作台
            </Button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-bold text-gray-900">
              如何使用AI提升写作效率
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hover:bg-gray-100">
              <Eye className="w-4 h-4 mr-2" />
              预览
            </Button>
            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <Bot className="w-4 h-4 mr-2" />
              AI优化
              <Badge className="ml-2 bg-blue-100 text-blue-800 text-xs">专业版</Badge>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
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
            {/* Editor with integrated toolbar and status */}
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200 pb-4">
                <CardTitle className="text-lg flex items-center text-gray-900">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  编辑区
                  <div className="ml-auto flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      已保存
                    </Badge>
                  </div>
                </CardTitle>
                
                {/* Integrated Toolbar */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-1 bg-white rounded-lg p-1 border border-gray-200">
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Italic className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Underline className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-white rounded-lg p-1 border border-gray-200">
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Heading1 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Heading2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Heading3 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-white rounded-lg p-1 border border-gray-200">
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Quote className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Code className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-white rounded-lg p-1 border border-gray-200">
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Image className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Link className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <Table className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="ml-auto flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="border-green-200 text-green-700 hover:bg-green-50">
                      <Save className="w-4 h-4 mr-1" />
                      保存
                    </Button>
                    <Button variant="outline" size="sm">
                      MD ⇄ 富文本
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[500px] font-mono text-sm resize-none border-0 focus-visible:ring-0 rounded-none"
                  placeholder="开始写作..."
                />
                
                {/* Integrated Status Bar */}
                <div className="flex items-center justify-between text-sm bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    <span className="flex items-center text-blue-600 font-medium">
                      <FileText className="w-4 h-4 mr-2" />
                      字数：1,235
                    </span>
                    <span className="flex items-center text-cyan-600 font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      预计阅读：5分钟
                    </span>
                    <span className="flex items-center text-green-600 font-medium">
                      <Zap className="w-4 h-4 mr-2" />
                      自动保存于1分钟前
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center text-green-600 font-medium">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      图片：3张 已上传图床
                    </span>
                    <Button variant="outline" size="sm" className="hover:bg-gray-100">
                      <Upload className="w-4 h-4 mr-1" />
                      重新上传
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center text-gray-900">
                    <Eye className="w-5 h-5 mr-2 text-blue-600" />
                    预览区
                  </CardTitle>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3 bg-white">
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
                {/* Style Selection - moved here between header and content */}
                <div className="flex items-center justify-between mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm font-medium text-gray-700 flex items-center">
                    <Wand2 className="w-4 h-4 mr-2 text-blue-600" />
                    排版样式：
                  </span>
                  <div className="flex items-center space-x-3">
                    <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                      <SelectTrigger className="w-40 bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">默认样式</SelectItem>
                        <SelectItem value="tech">技术极客</SelectItem>
                        <SelectItem value="business">商务简约</SelectItem>
                        <SelectItem value="creative">创意文艺</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Wand2 className="w-4 h-4 mr-1" />
                      应用
                    </Button>
                  </div>
                </div>
                
                {/* Preview Content */}
                <div className="bg-white rounded-lg p-6 min-h-[500px] border border-gray-200">
                  <div className="prose prose-sm max-w-none">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
                      如何使用AI提升写作效率
                    </h1>
                    
                    <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-600">
                      <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                        1. 背景介绍
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        在内容创作领域，效率一直是创作者们关注的核心问题。随着AI技术的发展，我们有了更多提升写作效率的工具和方法。
                      </p>
                    </div>
                    
                    <div className="bg-cyan-50 rounded-lg p-4 mb-6 border-l-4 border-cyan-600">
                      <h2 className="text-lg font-semibold text-cyan-900 mb-3 flex items-center">
                        2. 核心技巧
                      </h2>
                      
                      <h3 className="text-base font-medium mt-4 mb-3 text-cyan-800">
                        2.1 提示词优化
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        合理的提示词设计是使用AI的关键。以下是一个优化示例：
                      </p>
                      
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono mb-4">
                        <div className="text-gray-400 mb-2"># 优化前的提示词</div>
                        <div className="text-yellow-300">basic_prompt = "帮我写一篇文章"</div>
                        <br />
                        <div className="text-gray-400 mb-2"># 优化后的提示词</div>
                        <div className="text-cyan-300">optimized_prompt = """</div>
                        <div className="ml-4 text-white">请帮我写一篇关于AI写作的技术文章...</div>
                        <div className="text-cyan-300">"""</div>
                      </div>
                      
                      <h3 className="text-base font-medium mt-6 mb-3 text-cyan-800">
                        2.2 工具组合使用
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        将多个AI工具结合使用，可以获得更好的效果：
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 space-y-2 border border-gray-200">
                        <div className="flex items-center p-2 bg-blue-50 rounded">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="font-medium">内容生成：</span>
                          <span className="ml-2 text-gray-700">使用ChatGPT生成初稿</span>
                        </div>
                        <div className="flex items-center p-2 bg-green-50 rounded">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          <span className="font-medium">语法检查：</span>
                          <span className="ml-2 text-gray-700">使用Grammarly优化语法</span>
                        </div>
                        <div className="flex items-center p-2 bg-cyan-50 rounded">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                          <span className="font-medium">排版美化：</span>
                          <span className="ml-2 text-gray-700">使用字流进行多平台适配</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="shadow-sm border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Bot className="w-5 h-5 mr-2" />
                  AI智能建议
                  <Badge className="ml-2 bg-blue-100 text-blue-800">专业版</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">标题优化建议</h4>
                  <p className="text-sm text-gray-600">AI写作革命：从30分钟到3分钟的效率突破</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">内容结构建议</h4>
                  <p className="text-sm text-gray-600">建议增加实际案例和数据支撑，提升文章说服力</p>
                </div>
                <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-100">
                  <Bot className="w-4 h-4 mr-2" />
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