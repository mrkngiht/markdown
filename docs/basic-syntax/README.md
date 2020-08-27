---
sidebarDepth: 3
---

# Markdown 基本语法

几乎所有 Markdown 应用程序都支持 John Gruber 原始设计文档中列出的 Markdown 基本语法。但是，Markdown 处理程序之间存在着细微的变化和差异，我们都会尽可能标记出来。让您十分钟快速掌握 Markdown 语法，让我们从 [Markdown 标题语法](https://markdown.com.cn/basic-syntax/headings.html)开始讲解。

可先试试 [Markdown在线编辑器](https://markdown.com.cn/editor/)。


## 设计哲学

Markdown 的目标是实现「易读易写」。

不过最需要强调的便是它的可读性。一份使用 Markdown 格式撰写的文件应该可以直接以纯文字发佈，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的影响，包括 [Setext] [1]、[atx] [2]、[Textile] [3]、[reStructuredText] [4]、[Grutatext] [5] 和 [EtText] [6]，然而最大灵感来源其实是纯文字的电子邮件格式。

  [1]: http://docutils.sourceforge.net/mirror/setext.html
  [2]: http://www.aaronsw.com/2002/atx/
  [3]: http://textism.com/tools/textile/
  [4]: http://docutils.sourceforge.net/rst.html
  [5]: http://www.triptico.com/software/grutatxt.html
  [6]: http://ettext.taint.org/doc/

因此 Markdown 的语法全由标点符号所组成，并经过严谨慎选，是为了让它们看起来就像所要表达的意思。像是在文字两旁加上星号，看起来就像\*强调\*。Markdown 的清单看起来，嗯，就是清单。假如你有使用过电子邮件，区块引言看起来就真的像是引用一段文字。

## 行内 HTML

Markdown 的语法有个主要的目的：用来作为一种网路内容的*写作*用语言。

Markdown 不是要来取代 HTML，甚至也没有要和它相似，它的语法种类不多，只和 HTML 的一部分有关係，重点*不是*要创造一种更容易写作 HTML 文件的语法，我认为 HTML 已经很容易写了，Markdown 的重点在于，它能让文件更容易阅读、编写。HTML 是一种*发佈*的格式，Markdown 是一种*编写*的格式，因此，Markdown 的格式语法只涵盖纯文字可以涵盖的范围。

不在 Markdown 涵盖范围之外的标签，都可以直接在文件裡面用 HTML 撰写。不需要额外标注这是 HTML 或是 Markdown；只要直接加标签就可以了。

只有区块元素──比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以利与内容区隔。而且这些（元素）的开始与结尾标签，不可以用 tab 或是空白来缩排。Markdown 的产生器有智慧型判断，可以避免在区块标签前后加上没有必要的 `<p>` 标签。

举例来说，在 Markdown 文件裡加上一段 HTML 表格：

    This is a regular paragraph.

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    This is another regular paragraph.

请注意，Markdown 语法在 HTML 区块标签中将不会被进行处理。例如，你无法在 HTML 区块内使用 Markdown 形式的`*强调*`。

HTML 的区段标签如 `<span>`、`<cite>`、`<del>` 则不受限制，可以在 Markdown 的段落、清单或是标题裡任意使用。依照个人习惯，甚至可以不用Markdown 格式，而採用 HTML 标签来格式化。举例说明：如果比较喜欢 HTML 的  `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的连结或是影像标示语法。

HTML 区段标签和区块标签不同，在区段标签的范围内， Markdown 的语法是有效的。

## 特殊字元自动转换

在 HTML 文件中，有两个字元需要特殊处理： `<` 和 `&` 。 `<` 符号用于起始标签，`&` 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 `&lt;` 和 `&amp;`。

`&` 符号其实很容易让写作网路文件的人感到困扰，如果你要打「AT&T」 ，你必须要写成「`AT&amp;T`」 ，还得转换网址内的 `&` 符号，如果你要连结到：

    http://images.google.com/images?num=30&q=larry+bird

你必须要把网址转成：

    http://images.google.com/images?num=30&amp;q=larry+bird

才能放到连结标签的 `href` 属性裡。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。

Markdown 允许你直接使用这些符号，但是你要小心跳脱字元的使用，如果你是在HTML 实体中使用 `&` 符号的话，它不会被转换，而在其它情形下，它则会被转换成 `&amp;`。所以你如果要在文件中插入一个著作权的符号，你可以这样写：

    &copy;

Markdown 将不会对这段文字做修改，但是如果你这样写：

    AT&T

Markdown 就会将它转为：

    AT&amp;T

类似的状况也会发生在 `<` 符号上，因为 Markdown 支援 [行内 HTML](#html) ，如果你是使用 `<` 符号作为 HTML 标签使用，那 Markdown 也不会对它做任何转换，但是如果你是写：

    4 < 5

Markdown 将会把它转换为：

    4 &lt; 5

不过需要注意的是，code 范围内，不论是行内还是区块， `<` 和 `&` 两个符号都*一定*会被转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML code （和 HTML 相对而言， HTML 语法中，你要把所有的 `<` 和 `&` 都转换为 HTML 实体，才能在 HTML 文件裡面写出 HTML code。）

