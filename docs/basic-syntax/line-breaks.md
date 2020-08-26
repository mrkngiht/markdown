---
title: Markdown换行
---

# Markdown换行

在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(`<br>`)。

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
      <td>
        <code class="highlighter-rouge">
          This is the first line. &nbsp;<br />
          And this is the second line.
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">&lt;p&gt;This is the first line.&lt;br&gt;<br />
        And this is the second line.&lt;/p&gt;</code>
      </td>
      <td>
        <p>This is the first line.<br />   
        And this is the second line.</p>
      </td>
    </tr>
  </tbody>
</table>

## Line Break Best Practices

You can use two or more spaces (commonly referred to as "trailing whitespace") for line breaks in nearly every Markdown application, but it's controversial. It's hard to see trailing whitespace in an editor, and many people accidentally or intentionally put two spaces after every sentence. For this reason, you may want to use something other than trailing whitespace for line breaks. Fortunately, there is another option supported by nearly every Markdown application: the `<br>` HTML tag.

For compatibility, use trailing white space or the `<br>` HTML tag at the end of the line.

There are two other options I don't recommend using. CommonMark and a few other lightweight markup languages let you type a backslash (`\`) at the end of the line, but not all Markdown applications support this, so it isn't a great option from a compatibility perspective. And at least a couple lightweight markup languages don't require anything at the end of the line — just type return and they'll create a line break.

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
          First line with two spaces after. &nbsp;<br>
          And the next line.<br><br>
          First line with the HTML tag after.&lt;br&gt;<br>
          And the next line.<br><br>
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
        First line with a backslash after.\<br>
        And the next line.<br><br>
        First line with nothing after.<br>
        And the next line.<br><br>
        </code>
      </td>
    </tr>
  </tbody>
</table>
