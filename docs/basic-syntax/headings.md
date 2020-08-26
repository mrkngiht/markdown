---
description : 要创建标题，请在单词或短语前面添加井号(`#`) 。`#`的数量代表了标题的级别。例如，添加三个`#`表示创建一个三级标题(`<h3>`) (例如：`### My Header`)。
---
# Markdown 标题语法
要创建标题，请在单词或短语前面添加井号 (`#`) 。`#` 的数量代表了标题的级别。例如，添加三个 `#` 表示创建一个三级标题 (`<h3>`) (例如：`### My Header`)。

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Rendered Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge"># Heading level 1</code></td>
      <td><code class="highlighter-rouge">&lt;h1&gt;Heading level 1&lt;/h1&gt;</code></td>
      <td><h1 class="no-anchor" data-toc-skip>Heading level 1</h1></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">## Heading level 2</code></td>
      <td><code class="highlighter-rouge">&lt;h2&gt;Heading level 2&lt;/h2&gt;</code></td>
      <td><h2 class="no-anchor" data-toc-skip>Heading level 2</h2></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">### Heading level 3</code></td>
      <td><code class="highlighter-rouge">&lt;h3&gt;Heading level 3&lt;/h3&gt;</code></td>
      <td><h3 class="no-anchor" data-toc-skip>Heading level 3</h3></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">#### Heading level 4</code></td>
      <td><code class="highlighter-rouge">&lt;h4&gt;Heading level  4&lt;/h4&gt;</code></td>
      <td><h4 class="no-anchor">Heading level 4</h4></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">##### Heading level 5</code></td>
      <td><code class="highlighter-rouge">&lt;h5&gt;Heading level 5&lt;/h5&gt;</code></td>
      <td><h5 class="no-anchor">Heading level 5</h5></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">###### Heading level 6</code></td>
      <td><code class="highlighter-rouge">&lt;h6&gt;Heading level 6&lt;/h6&gt;</code></td>
      <td><h6 class="no-anchor">Heading level 6</h6></td>
    </tr>
  </tbody>
</table>

## 可选语法
还可以在文本下方添加任意数量的 == 号来标识一级标题，或者 -- 号来标识二级标题。


<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Rendered Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">Heading level 1<br/>===============</code></td>
      <td><code class="highlighter-rouge">&lt;h1&gt;Heading level 1&lt;/h1&gt;</code></td>
      <td><h1 class="no-anchor" data-toc-skip>Heading level 1</h1></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">Heading level 2<br/>---------------</code></td>
      <td><code class="highlighter-rouge">&lt;h2&gt;Heading level 2&lt;/h2&gt;</code></td>
      <td><h2 class="no-anchor" data-toc-skip>Heading level 2</h2></td>
    </tr>
  </tbody>
</table>

## 最佳实践

不同的 Markdown 应用程序处理 `#` 和标题之间的空格方式并不一致。为了兼容考虑，请用一个空格在 `#` 和标题之间进行分隔。


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
          # Here's a Heading
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          #Here's a Heading
        </code>
      </td>
    </tr>
  </tbody>
</table>
