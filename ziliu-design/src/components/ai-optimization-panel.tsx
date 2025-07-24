import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { 
  Bot, 
  X, 
  Wand2, 
  FileText, 
  Tag, 
  Palette, 
  Sparkles,
  Crown,
  CheckCircle,
  Copy,
  RefreshCw
} from "lucide-react"

interface AIOptimizationPanelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AIOptimizationPanel({ open, onOpenChange }: AIOptimizationPanelProps) {
  const [selectedTitle, setSelectedTitle] = useState("option2")
  const [selectedTags, setSelectedTags] = useState<string[]>(["AI", "效率工具", "写作", "ChatGPT"])
  const [generatedSummary, setGeneratedSummary] = useState("本文介绍了使用AI工具提升写作效率的三个核心技巧，包括提示词优化、工具组合使用和实战案例分析。通过合理运用这些方法，创作者可以显著提高内容创作的质量和效率，实现从传统写作到AI辅助写作的转变。")

  const titleOptions = [
    { id: "option1", title: "掌握这3个AI技巧，写作效率提升10倍" },
    { id: "option2", title: "AI写作革命：从30分钟到3分钟的效率突破" },
    { id: "option3", title: "为什么99%的人都不会正确使用AI写作？" }
  ]

  const suggestedTags = ["自媒体", "内容创作", "生产力", "技术教程", "工具推荐"]
  const styleOptions = [
    { id: "tech", name: "技术极客风格", description: "适合技术教程类文章" },
    { id: "business", name: "商务简约风格", description: "适合商业分析类文章" },
    { id: "creative", name: "创意文艺风格", description: "适合创意内容类文章" }
  ]

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Bot className="w-5 h-5 mr-2 text-purple-600" />
            AI优化助手
            <Badge className="ml-2 bg-gradient-to-r from-yellow-500 to-orange-500">
              <Crown className="w-3 h-3 mr-1" />
              专业版功能
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Title Optimization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                <FileText className="w-4 h-4 mr-2" />
                标题优化
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm text-gray-600">当前标题：</Label>
                <p className="text-sm bg-gray-50 p-2 rounded mt-1">如何使用AI提升写作效率</p>
              </div>
              
              <div>
                <Label className="text-sm font-medium">AI优化建议：</Label>
                <RadioGroup value={selectedTitle} onValueChange={setSelectedTitle} className="mt-2">
                  {titleOptions.map((option) => (
                    <div key={option.id} className="flex items-start space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                      <Label htmlFor={option.id} className="text-sm leading-relaxed cursor-pointer">
                        {option.title}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                重新生成标题
              </Button>
            </CardContent>
          </Card>

          {/* Tag Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                <Tag className="w-4 h-4 mr-2" />
                标签推荐
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">已选择标签：</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="default" 
                      className="cursor-pointer hover:bg-red-100 hover:text-red-800"
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-medium mb-2 block">推荐标签：</Label>
                <div className="flex flex-wrap gap-2">
                  {suggestedTags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                      onClick={() => toggleTag(tag)}
                    >
                      + {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Generation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                <FileText className="w-4 h-4 mr-2" />
                摘要生成
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={generatedSummary}
                onChange={(e) => setGeneratedSummary(e.target.value)}
                className="min-h-[100px]"
                placeholder="AI生成的文章摘要将显示在这里..."
              />
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  重新生成
                </Button>
                <Button variant="outline" size="sm">
                  <Copy className="w-4 h-4 mr-2" />
                  复制摘要
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Smart Layout */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-base">
                <Palette className="w-4 h-4 mr-2" />
                智能排版
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium">AI检测结果</span>
                </div>
                <p className="text-sm text-blue-800">
                  检测到：技术教程类文章
                </p>
              </div>
              
              <div>
                <Label className="text-sm font-medium mb-2 block">推荐排版样式：</Label>
                <div className="space-y-2">
                  {styleOptions.map((style) => (
                    <div key={style.id} className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{style.name}</h4>
                          <p className="text-xs text-gray-600">{style.description}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          预览
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Stats */}
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-800">本月AI使用情况：</span>
                <span className="font-medium text-purple-900">标题优化 23/500次</span>
              </div>
              <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '4.6%' }}></div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              取消
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
              <CheckCircle className="w-4 h-4 mr-2" />
              应用所有优化
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}