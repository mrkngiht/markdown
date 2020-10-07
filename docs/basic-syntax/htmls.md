# Markdown 使用 HTML 标签

大多 Markdown 应用程序允许你在 Markdown 格式文本中添加 HTML 标签。如果你喜欢某些 HTML 标签胜于 Markdown 语法的话，这将何有帮助。例如，某些人发现通过 HTML 标签添加图像更加容易。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。

如需使用 HTML，请将 HTML 标签添加到 Markdown 格式文本中即可。

```
This **word** is bold. This <em>word</em> is italic.
```

渲染效果如下:

This **word** is bold. This <em>word</em> is italic.

### HTML用法最佳实践 

出于安全原因，并非所有 Markdown 应用程序都支持在 Markdown 文档中添加 HTML。如有疑问，请查看 Markdown 应用程序的文档。某些应用程序只支持 HTML 标签的子集。

对于 HTML 的块级元素 `<div>`、`<table>`、`<pre>` 和 `<p>`，请在其前后使用空行（blank lines）与其它内容进行分隔。尽量不要使用制表符（tabs）或空格（spaces）对 HTML 标签做缩进，否则将影响格式。

在 HTML 块级标签内不能使用 Markdown 语法。例如 `<p>italic and **bold**</p>` 将不起作用。


