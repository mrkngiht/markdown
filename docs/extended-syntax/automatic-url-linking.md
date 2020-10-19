# 自动网址链接
许多Markdown处理器会自动将URL转换为链接。这意味着如果您输入http://www.example.com，即使您未[使用方括号](/basic-syntax/links.html)，您的Markdown处理器也会自动将其转换为链接。

```
http://www.example.com
```
呈现的输出如下所示：

[http://www.example.com](http://www.example.com)

## 禁用自动URL链接
如果您不希望自动链接URL，则可以通过将URL表示为带反引号的代码来删除该链接。
```
`http://www.example.com`
```
呈现的输出如下所示：

`http://www.example.com`
