# Snippets - Sublime Text 3

> List of snippets used to model the files (.md). Create a new file for each snippet and enter the codes for each. Save the file with the extension: `filename.sublime-snippet`

To create a new snippet, click: `Tools > Developer > New Snippet ...`
Enter the code for the snippet you want to create and save the file.
After saving the file, take a test. Enter the `tabTrigger` and press the TAB key.

**tabTrigger example**: `md-title`

## List of created snippets

- md-title
- md-caption
- md-bold
- md-italic
- md-note
- md-shortcode
- md-link
- md-list
- md-pre

## Title

```javascript
<snippet>
  <content><![CDATA[
# ${1:title}
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-title</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## Caption

```javascript
<snippet>
  <content><![CDATA[
## ${1:Caption}
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-caption</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## Bold text

```javascript
<snippet>
  <content><![CDATA[
**${1:Bold text}**
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-bold</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## Text in italics

```javascript
<snippet>
  <content><![CDATA[
*${1:Text in italics}*
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-italic</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## Note

```javascript
<snippet>
  <content><![CDATA[
> ${1:Note}
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-note</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## Short code

```javascript
<snippet>
  <content><![CDATA[
`${1:Short code}`
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-shortcode</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```
## link

```javascript
<snippet>
  <content><![CDATA[
[${1:text}](${2:https://github.com/})
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-link</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## Ordered list

```javascript
<snippet>
  <content><![CDATA[
- [${1:text}](${2:https://github.com/})
  - [${1:text}](${2:https://github.com/})
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-list</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## Tag pre

```javascript
<snippet>
  <content><![CDATA[
<pre>
  ${1:...}
</pre>
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-pre</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## All Snippets

```javascript
<snippet>
  <content><![CDATA[
md-title
md-caption
md-bold
md-italic
md-note
md-shortcode
md-link
md-list
md-pre
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>md-all</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```

## Version

> Release: 1.0.1
