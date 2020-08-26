---
title: Markdown 语法速查表
sidebar: auto
---
## 总览

此 Markdown 速查表提供了所有 Markdown 语法元素的快速参考。但是此速查表无法覆盖所有用法，因此，如果你需要某些语法元素的更多信息，请参阅我们的 [基本语法](/basic-syntax) 和 [扩展语法](/extended-syntax).

## 基本语法

这些是 John Gruber 的原始设计文档中列出的元素。所有 Markdown 应用程序都支持这些元素。

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>元素</th>
      <th>Markdown 语法</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/basic-syntax/headings.html">标题（Heading）</a></td>
      <td>
        <code># H1<br>
        ## H2<br>
        ### H3</code>
      </td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/bold.html">粗体（Bold）</a></td>
      <td><code>**bold text**</code></td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/italic.html">斜体（Italic）</a></td>
      <td><code>*italicized text*</code></td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/blockquotes.html">引用块（Blockquote）</a></td>
      <td><code>> blockquote</code></td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/ordered-lists.html">有序列表（Ordered List）</a></td>
      <td>
        <code>1. First item</code><br>
        <code>2. Second item</code><br>
        <code>3. Third item</code><br>
      </td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/unordered-lists.html">无序列表（Unordered List）</a></td>
      <td>
        <code>
          - First item<br>
          - Second item<br>
          - Third item<br>
        </code>
      </td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/code.html">代码（Code）</a></td>
      <td><code>`code`</code></td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/horizontal-rules.html">分隔线（Horizontal Rule）</a></td>
      <td><code>---</code></td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/links.html">链接（Link）</a></td>
      <td><code>[title](https://www.example.com)</code></td>
    </tr>
    <tr>
      <td><a href="/basic-syntax/images.html">图片（Image）</a></td>
      <td><code>![alt text](image.jpg)</code></td>
    </tr>
  </tbody>
</table>

## 扩展语法

这些元素通过添加额外的功能扩展了基本语法。但是，并非所有 Markdown 应用程序都支持这些元素。


<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>元素</th>
      <th>Markdown 语法</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/extended-syntax/tables.html">表格（Table）</a></td>
      <td><code>
          | Syntax&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Description |<br>
          | ----------- | ----------- |<br>
          | Header&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
          | Paragraph&nbsp;&nbsp;&nbsp;| Text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      </code></td>
    </tr>
    <tr>
      <td><a href="/extended-syntax/fenced-code-blocks.html">代码块（Fenced Code Block）</a></td>
      <td><code>```<br>
      {<br>
      &nbsp;&nbsp;"firstName": "John",<br>
      &nbsp;&nbsp;"lastName": "Smith",<br>
      &nbsp;&nbsp;"age": 25<br>
      }<br>
      ```
      </code></td>
    </tr>
    <tr>
      <td><a href="/extended-syntax/footnotes.html">脚注（Footnote）</a></td>
      <td>
        Here's a sentence with a footnote. <code>[^1]</code><br>
        <code>[^1]</code>: This is the footnote.
      </td>
    </tr>
    <tr>
      <td><a href="/extended-syntax/heading-ids.html">标题编号（Heading ID）</a></td>
      <td><code>### My Great Heading {#custom-id}</code></td>
    </tr>
    <tr>
      <td><a href="/extended-syntax/definition-lists.html">定义列表（Definition List）</a></td>
      <td><code>
        term<br>
        : definition
      </code></td>
    </tr>
    <tr>
      <td><a href="/extended-syntax/strikethrough.html">删除线（Strikethrough）</a></td>
      <td><code>~~The world is flat.~~</code></td>
    </tr>
    <tr>
      <td><a href="/extended-syntax/task-lists.html">任务列表（Task List）</a></td>
      <td><code>
        - [x] Write the press release<br>
        - [ ] Update the website<br>
        - [ ] Contact the media
      </code></td>
    </tr>
  </tbody>
</table>


