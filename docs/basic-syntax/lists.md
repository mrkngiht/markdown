# Markdown 列表语法

可以将多个条目组织成有序或无序列表。

## 有序列表
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

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
        1. First item<br/>
        2. Second item<br/>
        3. Third item<br/>
        4. Fourth item
      </code>
    </td>
    <td>
      <code class="highlighter-rouge">
        &lt;ol&gt;<br>
          &lt;li&gt;First item&lt;/li&gt;<br/>
          &lt;li&gt;Second item&lt;/li&gt;<br/>
          &lt;li&gt;Third item&lt;/li&gt;<br/>
          &lt;li&gt;Fourth item&lt;/li&gt;<br/>
        &lt;/ol&gt;
      </code>
    </td>
    <td>
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
      </ol>
    </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          1. First item<br/>
          1. Second item<br/>
          1. Third item<br/>
          1. Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ol&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br/>
            &lt;li&gt;Second item&lt;/li&gt;<br/>
            &lt;li&gt;Third item&lt;/li&gt;<br/>
            &lt;li&gt;Fourth item&lt;/li&gt;<br/>
          &lt;/ol&gt;
        </code>
      </td>
      <td>
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          1. First item<br/>
          8. Second item<br/>
          3. Third item<br/>
          5. Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ol&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br/>
            &lt;li&gt;Second item&lt;/li&gt;<br/>
            &lt;li&gt;Third item&lt;/li&gt;<br/>
            &lt;li&gt;Fourth item&lt;/li&gt;<br/>
          &lt;/ol&gt;
        </code>
      </td>
      <td>
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          1. First item<br/>
          2. Second item<br/>
          3. Third item<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;1. Indented item<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;2. Indented item<br/>
          4. Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ol&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br/>
            &lt;li&gt;Second item&lt;/li&gt;<br/>
            &lt;li&gt;Third item<br/>
              &lt;ol&gt;<br>
                &lt;li&gt;Indented item&lt;/li&gt;<br/>
                &lt;li&gt;Indented item&lt;/li&gt;<br/>
              &lt;/ol&gt;<br/>
            &lt;/li&gt;<br/>
            &lt;li&gt;Fourth item&lt;/li&gt;<br/>
          &lt;/ol&gt;
        </code>
      </td>
      <td>
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item
            <ol>
              <li>Indented item</li>
              <li>Indented item</li>
            </ol>
          </li>
          <li>Fourth item</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

#### 有序列表最佳实践

CommonMark and a few other lightweight markup languages let you use a parenthesis (`)`) as a delimiter (e.g., `1) First item`), but not all Markdown applications support this, so it isn’t a great option from a compatibility perspective. For compatibility, use periods only.

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
          1. First item<br>
          2. Second item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          1) First item<br>
          2) Second item
        </code>
      </td>
    </tr>
  </tbody>
</table>

## 无序列表

要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

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
          - First item<br/>
          - Second item<br/>
          - Third item<br/>
          - Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ul&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br/>
            &lt;li&gt;Second item&lt;/li&gt;<br/>
            &lt;li&gt;Third item&lt;/li&gt;<br/>
            &lt;li&gt;Fourth item&lt;/li&gt;<br/>
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          * First item<br/>
          * Second item<br>
          * Third item<br/>
          * Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ul&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br/>
            &lt;li&gt;Second item&lt;/li&gt;<br/>
            &lt;li&gt;Third item&lt;/li&gt;<br/>
            &lt;li&gt;Fourth item&lt;/li&gt;<br/>
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          + First item<br/>
          + Second item<br/>
          + Third item<br/>
          + Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ul&gt;<br>
            &lt;li&gt;First item&lt;/li&gt;<br/>
            &lt;li&gt;Second item&lt;/li&gt;<br/>
            &lt;li&gt;Third item&lt;/li&gt;<br/>
            &lt;li&gt;Fourth item&lt;/li&gt;<br/>
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code class="highlighter-rouge">
          - First item<br/>
          - Second item<br/>
          - Third item<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;- Indented item<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;- Indented item<br/>
          - Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          &lt;ul&gt;<br/>
            &lt;li&gt;First item&lt;/li&gt;<br/>
            &lt;li&gt;Second item&lt;/li&gt;<br/>
            &lt;li&gt;Third item<br/>
              &lt;ul&gt;<br/>
                &lt;li&gt;Indented item&lt;/li&gt;<br/>
                &lt;li&gt;Indented item&lt;/li&gt;<br/>
              &lt;/ul&gt;<br/>
            &lt;/li&gt;<br/>
            &lt;li&gt;Fourth item&lt;/li&gt;<br/>
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item
            <ul>
              <li>Indented item</li>
              <li>Indented item</li>
            </ul>
          </li>
          <li>Fourth item</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### 无序列表最佳实践

Markdown applications don’t agree on how to handle different delimiters in the same list. For compatibility, don't mix and match delimiters in the same list — pick one and stick with it.

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
          - First item<br>
          - Second item<br>
          - Third item<br>
          - Fourth item
        </code>
      </td>
      <td>
        <code class="highlighter-rouge">
          + First item<br>
          * Second item<br>
          - Third item<br>
          + Fourth item
        </code>
      </td>
    </tr>
  </tbody>
</table>

### 在列表中嵌套其他元素

要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格或一个制表符，如下例所示：

#### 段落 

```
*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.
```
渲染效果如下：

*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.

#### 引用块

```
*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.
```

渲染效果如下：
*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.

#### 代码块

[代码块](#code-blocks)通常采用四个空格或一个制表符缩进。当它们被放在列表中时，请将它们缩进八个空格或两个制表符。 

```text
1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.
```

渲染效果如下：

1.  Open the file.
2.  Find the following code block on line 21:

    ```text
    <html>
      <head>
        <title>Test</title>
      </head>
    ```

3.  Update the title to match the name of your website.

#### 图片

```
1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    ![Tux, the Linux mascot](/assets/images/tux.png)

3.  Close the file.
```

渲染效果如下：

1.  Open the file containing the Linux mascot.
2.  Marvel at its beauty.

    ![Tux, the Linux mascot](../images/tux.png)

3.  Close the file.

#### 列表 

You can nest an unordered list in an ordered list, or vice versa.

```
1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item
```

渲染效果如下：

1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item

