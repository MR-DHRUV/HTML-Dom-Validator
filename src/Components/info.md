## **HTML Validation Language**
The HTML Validation Language (HVL) allows you to define rules for validating the DOM structure of HTML documents. It provides a simple syntax to specify elements, attributes, and validation conditions. Below are the rules and syntax for using HVL.

#### 1. Element Declaration

Specify the element name followed by its attributes in parentheses. If an element has no attributes, use empty parentheses.

```css
elementName(attribute1="value1" attribute2="value2")
```

#### 2. Nesting Levels

Use tabs or spaces to denote nesting levels. Each level of indentation represents a child element.

```css
div(id="body")
	h1(class="main_heading")

This represents that h1 with class main_heading is a children of div with id body.
```

#### 3. Randomization of Element Order

For scenarios where the order of child elements is not essential, the `random="true"` attribute is employed within the element declaration to allow for the randomization of child element order.

```css
elementName(random="true")
	childElement()
	childElement()
	childElement()
```

#### 4. HREF Attribute Matching

To match `href` attribute starting with specific prefixes for URL validation, use `hrefStartsWith:"{STARTING_PREFIX}"`.

```css
elementName(hrefStartsWith:"http")
```

#### 5. Text Matching with Regular Expressions

To match text within an element using regular expressions, use `text="{REGEX_HERE}"` , To match completely enter the entire string.

```css
elementName(text="[abc]") // Matches any of the characters within the brackets.
elementName(text="Probem Of the Day") // Matches the entire string
```

#### 6. Choice in HTML Tag

To provide a choice between different HTML tags, use `choice="tag1 tag2 ..."`.

```css
elementName(choice="tag1 tag2 ...")
```

#### 7. Match ID or Class with text of Kth Child

To match the ID or class of an element with the text of the K'th child, use `matchIdK="K,$"` or `matchClassK="K,$"` , where "$" is an operator that will be placed in the place of the blank spaces in the text of K’th child.

```css
elementName(matchIdK="K,$")
elementName(matchClassK="K,$")
```

## Example Usage

Following are the rules to represent various aspects of the below HTML code.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Document</title>
</head>
<body>
    <div class="container" id="main">
        <h1>Welcome</h1>
        <p>This is a sample HTML document.</p>
        <div class="content">
            <h2>Content Section</h2>
            <p>This section contains some content.</p>
            <a class="link" href="https://example.com">Visit Example</a>
            <ul class="main_list" id="Item_3">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    </div>
</body>
</html>
```

1. **Nested Elements**

    This rule matches the `<h1>` and `<p>` elements nested inside the `<div>` with the class "container".

    ```css
    div(class="container")
        h1()
        p()
    ```

2. **Randomization**

    This rule matches `<ul>` element with the class "main_list" and 3 `<li>` as children such that their order is not significant. 

    ```css
    ul(class="main_list" random="true")
        li()
        li()
        li()
    ```

3. **HREF Attribute Matching**
    
    This rule matches `<a>` element with class link whose `href` attribute must start with "https://".
    
    ```css
    a(hrefStartsWith:"https://" class="link")
    ```
    

4. **Text Matching**
    
    This rule validates that there must be atleast one `<p>` element in the DOM such that it has the text "sample HTML document” .
    
    ```css
    p(text="sample HTML document")
    ```
    
5. **Choice in HTML Tag**
    
    This rule matches an element with id "main" such that it can be either a `<div>` or a `<section>`.
    ```css
    div(id="main" choice=”section”)
    ```
6. **Match ID or Class with text of Kth Child**
    
    This rule matches an element `<ul>` such that its id is same as the text of the 3rd child and replaces the blank spaces with "_".
    ```css
    ul(id="Item_3" matchIdK="3,_")
    ```