# Markdown 表格
要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```
呈现的输出如下所示：


<table class="table table-bordered">
  <thead>
    <tr>
      <th>Syntax</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header</td>
      <td>Title</td>
    </tr>
    <tr>
      <td>Paragraph</td>
      <td>Text</td>
    </tr>
  </tbody>
</table>


单元格宽度可以变化，如下所示。呈现的输出将看起来相同。
```
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |
```
<div class="alert alert-success">
  <i class="fas fa-lightbulb"></i> <strong>Tip:</strong> 使用连字符和管道创建表可能很麻烦。为了加快该过程，请尝试使用<a href="https://www.tablesgenerator.com/markdown_tables">Markdown Tables Generator</a>。使用图形界面构建表，然后将生成的Markdown格式的文本复制到文件中。
</div>

## 对齐
您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（`:`），将列中的文本对齐到左侧，右侧或中心。
```
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```
呈现的输出如下所示：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="text-align: left">Syntax</th>
      <th style="text-align: center">Description</th>
      <th style="text-align: right">Test Text</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left">Header</td>
      <td style="text-align: center">Title</td>
      <td style="text-align: right">Here’s this</td>
    </tr>
    <tr>
      <td style="text-align: left">Paragraph</td>
      <td style="text-align: center">Text</td>
      <td style="text-align: right">And more</td>
    </tr>
  </tbody>
</table>


## 格式化表格中的文字
您可以在表格中设置文本格式。例如，您可以添加链接，代码（仅反引号（`` ` ``）中的单词或短语，而不是代码块）和强调。

您不能添加标题，块引用，列表，水平规则，图像或HTML标签。

## 在表中转义管道字符
您可以使用表格的HTML字符代码（`&#124;`）在表中显示竖线（`|`）字符。

