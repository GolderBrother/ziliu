import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  FileText, 
  Upload, 
  Clipboard, 
  Link, 
  X,
  CheckCircle,
  AlertCircle,
  FileUp
} from "lucide-react"

interface ImportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ImportDialog({ open, onOpenChange }: ImportDialogProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("")
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [pasteContent, setPasteContent] = useState("")
  const [urlInput, setUrlInput] = useState("")

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFiles = Array.from(e.dataTransfer.files)
      setFiles(droppedFiles)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFiles(selectedFiles)
    }
  }

  const ImportMethodCard = ({ 
    method, 
    icon: Icon, 
    title, 
    description, 
    formats 
  }: {
    method: string
    icon: any
    title: string
    description: string
    formats: string
  }) => (
    <Card 
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
        selectedMethod === method 
          ? 'border-2 border-blue-500 bg-blue-50' 
          : 'border hover:border-gray-300'
      }`}
      onClick={() => setSelectedMethod(method)}
    >
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
          selectedMethod === method 
            ? 'bg-blue-100' 
            : 'bg-gray-100'
        }`}>
          <Icon className={`w-8 h-8 ${
            selectedMethod === method 
              ? 'text-blue-600' 
              : 'text-gray-600'
          }`} />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-xs text-gray-500">{formats}</p>
      </CardContent>
    </Card>
  )

  const renderImportContent = () => {
    switch (selectedMethod) {
      case "word":
        return (
          <div className="space-y-4">
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <FileUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">拖拽Word文档到此处</p>
              <p className="text-gray-600 mb-4">或者点击选择文件</p>
              <Input
                type="file"
                accept=".docx,.doc"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="word-upload"
              />
              <Label htmlFor="word-upload">
                <Button variant="outline" className="cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  选择Word文件
                </Button>
              </Label>
            </div>
            
            {files.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium">已选择的文件：</h4>
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm">{file.name}</span>
                      <span className="text-xs text-gray-500 ml-2">
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setFiles(files.filter((_, i) => i !== index))}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )

      case "markdown":
        return (
          <div className="space-y-4">
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">拖拽Markdown文件到此处</p>
              <p className="text-gray-600 mb-4">支持 .md 和 .markdown 格式</p>
              <Input
                type="file"
                accept=".md,.markdown"
                multiple
                onChange={handleFileSelect}
                className="hidden"
                id="md-upload"
              />
              <Label htmlFor="md-upload">
                <Button variant="outline" className="cursor-pointer">
                  <Upload className="w-4 h-4 mr-2" />
                  选择Markdown文件
                </Button>
              </Label>
            </div>
          </div>
        )

      case "paste":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="paste-content" className="text-sm font-medium">
                粘贴内容
              </Label>
              <Textarea
                id="paste-content"
                placeholder="请粘贴您的文章内容，支持HTML和富文本格式..."
                value={pasteContent}
                onChange={(e) => setPasteContent(e.target.value)}
                className="min-h-[200px] mt-2"
              />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-blue-900 mb-1">粘贴提示：</p>
                  <ul className="text-blue-800 space-y-1">
                    <li>• 支持从飞书、腾讯文档等平台直接复制粘贴</li>
                    <li>• 会自动保留基本格式（标题、列表、粗体等）</li>
                    <li>• 图片需要单独上传或使用图片链接</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case "url":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="url-input" className="text-sm font-medium">
                在线文档链接
              </Label>
              <Input
                id="url-input"
                placeholder="请输入飞书、腾讯文档等分享链接..."
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="mt-2"
              />
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-900 mb-1">注意事项：</p>
                  <ul className="text-yellow-800 space-y-1">
                    <li>• 请确保链接具有公开访问权限</li>
                    <li>• 飞书文档建议先导出为Word或PDF格式</li>
                    <li>• 部分在线文档可能需要登录才能访问</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            导入文档
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Import Methods */}
          <div>
            <h3 className="text-lg font-medium mb-4">选择导入方式：</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ImportMethodCard
                method="word"
                icon={FileText}
                title="Word文档"
                description="导入Word文档"
                formats="支持 .docx"
              />
              <ImportMethodCard
                method="markdown"
                icon={FileText}
                title="Markdown文件"
                description="导入MD文件"
                formats="支持 .md"
              />
              <ImportMethodCard
                method="paste"
                icon={Clipboard}
                title="复制粘贴"
                description="粘贴富文本内容"
                formats="HTML/富文本"
              />
              <ImportMethodCard
                method="url"
                icon={Link}
                title="在线文档"
                description="通过链接导入"
                formats="飞书导出链接"
              />
            </div>
          </div>

          {/* Import Content */}
          {selectedMethod && (
            <div>
              <h3 className="text-lg font-medium mb-4">
                {selectedMethod === "word" && "上传Word文档"}
                {selectedMethod === "markdown" && "上传Markdown文件"}
                {selectedMethod === "paste" && "粘贴内容"}
                {selectedMethod === "url" && "输入链接"}
              </h3>
              {renderImportContent()}
            </div>
          )}

          {/* Tips */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">导入提示：</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 飞书文档请先导出为Word或PDF格式</li>
              <li>• 图片会自动提取并上传到图床</li>
              <li>• 支持批量导入多个文件</li>
              <li>• 导入后可以在编辑器中进一步调整格式</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              取消
            </Button>
            <Button 
              disabled={!selectedMethod || (selectedMethod === "word" && files.length === 0) || (selectedMethod === "paste" && !pasteContent) || (selectedMethod === "url" && !urlInput)}
              className="bg-gradient-to-r from-blue-600 to-purple-600"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              开始导入
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}