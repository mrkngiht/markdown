---
---

# Markdown 基本语法

Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia等网站，如各大博客平台：WordPress、Drupal、简书等。

在线体验一下 [Markdown在线编辑器](https://markdown.com.cn/editor/)。

十分钟快速掌握 Markdown 语法，让我们从 [Markdown 标题语法](https://markdown.com.cn/basic-syntax/headings.html)开始讲解。



## 内嵌 HTML

Markdown 的语法只为一个目的：用来作为一种 web 内容的 *写作* 用语言。

Markdown 不是要来取代 HTML，甚至也没有要和它相似，它的语法集非常小，只对应一小部分 HTML 标签，它要做的 *不是* 创造一种新的语法以使插入 HTML 标签变得更容易，HTML 已经很容易写了，Markdown 的目标是易于阅读，创作和编辑文章。HTML 是一种 *发布* 的格式，Markdown 是一种 *编写* 的格式，因此，Markdown 的格式语法只涵盖纯文本可以涵盖的范围。

对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。不需要额外标注这是 HTML 或是 Markdown，只要直接加标签就可以了。

只有区块元素──比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以便于内容区分。而且这些（元素）的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 会自动识别这区块元素，避免在区块标签前后加上没有必要的 `<p>` 标签。

例如，在 Markdown 文件里加上一段 HTML 表格：

    This is a regular paragraph.

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    This is another regular paragraph.

请注意，Markdown 语法在 HTML 区块标签中将不会被进行处理。例如，你无法在 HTML 区块内使用 Markdown 形式的`*强调*`。

HTML 的內联标签如 `<span>`、`<cite>`、`<del>` 则不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。依照个人习惯，甚至可以不用 Markdown 格式，而采用 HTML 标签来格式化。例如：如果比较喜欢 HTML 的  `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图片语法。

HTML 內联标签和区块标签不同，在內联标签的范围内， Markdown 的语法是可以解析的。

## 特殊字符自动转义

在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `&` 。 `<` 符号用于起始标签，`&` 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 `&lt;` 和 `&amp;`。

`&` 符号其实很容易让写作网页文件的人感到困扰，如果你要打「AT&T」 ，你必须要写成「`AT&amp;T`」 ，还得转换网址内的 `&` 符号，如果你要链接到：

    http://images.google.com/images?num=30&q=larry+bird

你必须要把网址转成：

    http://images.google.com/images?num=30&amp;q=larry+bird

才能放到链接标签的 `href` 属性里。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。

Markdown 允许你直接使用这些符号，它帮你自动转义字符。如果你使用 `&` 符号的作为 HTML 实体的一部分，那么它不会被转换，而在其它情况下，它则会被转换成 `&amp;`。所以你如果要在文件中插入一个著作权的符号，你可以这样写：

    &copy;

Markdown 将不会对这段文字做修改，但是如果你这样写：

    AT&T

Markdown 就会将它转为：

    AT&amp;T

类似的状况也会发生在 `<` 符号上，因为 Markdown 支持 [行内 HTML](/basic-syntax/#内联-html) ，如果你使用 `<` 符号作为 HTML 标签的分隔符，那 Markdown 也不会对它做任何转换，但是如果你是写：

    4 < 5

Markdown 将会把它转换为：

    4 &lt; 5

需要特别注意的是，在 Markdown 的块级元素和内联元素中， `<` 和 `&` 两个符号都会被自动转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML。（在 HTML 语法中，你要手动把所有的 `<` 和 `&` 都转换为 HTML 实体。）

