---
title: Markdown 段落语法
description : Markdown 如何表示段落：一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行。
---
#  Markdown 段落
要创建段落，请使用空白行将一行或多行文本进行分隔。

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown语法</th>
      <th>HTML</th>
      <th>预览效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code class="highlighter-rouge">
          I really like using Markdown.<br /><br />
          I think I'll use it to format all of my documents from now on.
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">&lt;p&gt;I really like using Markdown.&lt;/p&gt;<br /><br />
        &lt;p&gt;I think I'll use it to format all of my documents from now on.&lt;/p&gt;</code>
      </td>
      <td>
        <p>I really like using Markdown.</p>
        <p>I think I'll use it to format all of my documents from now on.</p>
      </td>
    </tr>
  </tbody>
</table>

## 段落（Paragraph）用法的最佳实

不要用空格（spaces）或制表符（ tabs）缩进段落。

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>✅&nbsp; Do this</th>
      <th>❌&nbsp; Don't do this</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code class="highlighter-rouge">
          Don't put tabs or spaces in front of your paragraphs.<br><br>
          Keep lines left-aligned like this.<br><br>
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
        &nbsp;&nbsp;&nbsp;&nbsp;This can result in unexpected
        formatting problems.<br><br>
        &nbsp;&nbsp;Don't add tabs or spaces in front of paragraphs.
        </code>
      </td>
    </tr>
  </tbody>
</table>
