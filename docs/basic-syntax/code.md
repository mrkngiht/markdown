# Markdown 代码语法
要将单词或短语表示为代码，请将其包裹在反引号 (`` ` ``) 中。

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>预览效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">At the command prompt, type `nano`.</code></td>
      <td><code class="highlighter-rouge">At the command prompt, type &lt;code&gt;nano&lt;/code&gt;. </code></td>
      <td>At the command prompt, type <code class="highlighter-rouge">nano</code>.</td>
    </tr>
  </tbody>
</table>

### 转义反引号
如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(<code>``</code>)中。

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>预览效果</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>``Use `code` in your Markdown file.``</code></td>
      <td><code class="highlighter-rouge">&lt;code&gt;Use `code` in your Markdown file.&lt;/code&gt;</code></td>
      <td><code>Use `code` in your Markdown file.</code></td>
    </tr>
  </tbody>
</table>

### 代码块

要创建代码块，请将代码块的每一行缩进至少四个空格或一个制表符。

```text
    <html>
      <head>
      </head>
    </html>
```

渲染效果如下：

```text
<html>
  <head>
  </head>
</html>
```

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> 要创建不用缩进的代码块，请使用 <a href="/extended-syntax/fenced-code-blocks.html">围栏式代码块（fenced code blocks）</a>.
</div>
