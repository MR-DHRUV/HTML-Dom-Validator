/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import "./readme.css"

const Readme = () => {
  return (
      <div className="crossnote markdown-preview  ">
          <h4 id="1-element-declaration">1. Element Declaration </h4>
          <p>
              Specify the element name followed by its attributes in parentheses. If an
              element has no attributes, use empty parentheses.
          </p>
          <pre data-role="codeBlock" data-info="css" className="language-css css">
              <code>
                  <span className="token function">elementName</span>
                  <span className="token punctuation">(</span>attribute1=
                  <span className="token string">"value1"</span> attribute2=
                  <span className="token string">"value2"</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
              </code>
          </pre>
          <h4 id="2-nesting-levels">2. Nesting Levels </h4>
          <p>
              Use tab to denote nesting levels. Each level of indentation represents a
              child element. After all children in the Document Object Model (DOM) have
              been matched with the specified rule, any additional children present in the
              DOM will be disregarded.
          </p>
          <pre data-role="codeBlock" data-info="css" className="language-css css">
              <code>
                  <span className="token function">div</span>
                  <span className="token punctuation">(</span>id=
                  <span className="token string">"body"</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"\t"}
                  <span className="token function">h1</span>
                  <span className="token punctuation">(</span>class=
                  <span className="token string">"main_heading"</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"\n"}This represents that h1 with class main_heading is a children of div
                  with id body.{"\n"}
              </code>
          </pre>
          <h4 id="3-randomization-of-element-order">
              3. Randomization of Element Order{" "}
          </h4>
          <p>
              For scenarios where the order of child elements is not essential, the{" "}
              <code>random="true"</code> attribute is employed within the element
              declaration to allow for the randomization of child element order.
          </p>
          <pre data-role="codeBlock" data-info="css" className="language-css css">
              <code>
                  <span className="token function">elementName</span>
                  <span className="token punctuation">(</span>random=
                  <span className="token string">"true"</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"\t"}
                  <span className="token function">childElement</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"\t"}
                  <span className="token function">childElement</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
                  {"\t"}
                  <span className="token function">childElement</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
              </code>
          </pre>
          <h4 id="4-href-attribute-matching">4. HREF Attribute Matching </h4>
          <p>
              To match <code>href</code> attribute starting with specific prefixes for URL
              validation, use
              <code>
                  hrefStartsWith:"{"{"}STARTING_PREFIX{"}"}"
              </code>
              .
          </p>
          <pre data-role="codeBlock" data-info="css" className="language-css css">
              <code>
                  <span className="token function">elementName</span>
                  <span className="token punctuation">(</span>
                  <span className="token property">hrefStartsWith</span>
                  <span className="token punctuation">:</span>
                  <span className="token string">"http"</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
              </code>
          </pre>
          <h4 id="5-text-matching-with-regular-expressions">
              5. Text Matching with Regular Expressions{" "}
          </h4>
          <p>
              To match text within an element using regular expressions, use{" "}
              <code>
                  text="{"{"}REGEX_HERE{"}"}"
              </code>{" "}
              , To match completely enter the entire string.
          </p>
          <pre data-role="codeBlock" data-info="css" className="language-css css">
              <code>
                  <span className="token function">elementName</span>
                  <span className="token punctuation">(</span>text=
                  <span className="token string">"[abc]"</span>
                  <span className="token punctuation">)</span> // Matches any of the
                  characters within the brackets.{"\n"}
                  <span className="token function">elementName</span>
                  <span className="token punctuation">(</span>text=
                  <span className="token string">"Probem Of the Day"</span>
                  <span className="token punctuation">)</span> // Matches the entire string
                  {"\n"}
              </code>
          </pre>
          <h4 id="6-choice-in-html-tag">6. Choice in HTML Tag </h4>
          <p>
              To provide user a choice between different HTML tags, use{" "}
              <code>choice="tag1 tag2 ..."</code>.
          </p>
          <pre data-role="codeBlock" data-info="css" className="language-css css">
              <code>
                  <span className="token function">elementName</span>
                  <span className="token punctuation">(</span>choice=
                  <span className="token string">"tag1 tag2 ..."</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
              </code>
          </pre>
          <h4 id="7-match-id-or-class-with-text-of-kth-child">
              7. Match ID or Class with text of Kth Child{" "}
          </h4>
          <p>
              To match the ID or class of an element with the text of the K'th child, use{" "}
              <code>matchIdK="K,$"</code> or
              <code>matchClassK="K,$"</code> , where "$" is an operator that will replace
              the blank spaces in the text of K’th child.
          </p>
          <pre data-role="codeBlock" data-info="css" className="language-css css">
              <code>
                  <span className="token function">elementName</span>
                  <span className="token punctuation">(</span>matchIdK=
                  <span className="token string">"K,$"</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
                  <span className="token function">elementName</span>
                  <span className="token punctuation">(</span>matchClassK=
                  <span className="token string">"K,$"</span>
                  <span className="token punctuation">)</span>
                  {"\n"}
              </code>
          </pre>
          <h2 id="example-usage">Example Usage </h2>
          <p>
              Following are the rules to represent various aspects of the below HTML code.
          </p>
          <pre data-role="codeBlock" data-info="html" className="language-html html">
              <code>
                  <span className="token doctype">
                      <span className="token punctuation">&lt;!</span>
                      <span className="token doctype-tag">DOCTYPE</span>{" "}
                      <span className="token name">html</span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>html
                      </span>{" "}
                      <span className="token attr-name">lang</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>en
                          <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>head
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"    "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>meta
                      </span>{" "}
                      <span className="token attr-name">charset</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>UTF-8
                          <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"    "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>meta
                      </span>{" "}
                      <span className="token attr-name">name</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>viewport
                          <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">content</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>width=device-width,
                          initial-scale=1.0<span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"    "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>title
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  Sample HTML Document
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>title
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>head
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>body
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"    "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>container
                          <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">id</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>main
                          <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"        "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>h1
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  Welcome
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>h1
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"        "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>p
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  This is a sample HTML document.
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>p
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"        "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>div
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>content
                          <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"            "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>h2
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  Content Section
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>h2
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"            "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>p
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  This section contains some content.
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>p
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"            "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>a
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>link
                          <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">href</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>https://example.com
                          <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  Visit Example
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>a
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"            "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>ul
                      </span>{" "}
                      <span className="token attr-name">class</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>main_list
                          <span className="token punctuation">"</span>
                      </span>{" "}
                      <span className="token attr-name">id</span>
                      <span className="token attr-value">
                          <span className="token punctuation attr-equals">=</span>
                          <span className="token punctuation">"</span>Item_3
                          <span className="token punctuation">"</span>
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"                "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>li
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  Item 1
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>li
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"                "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>li
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  Item 2
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>li
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"                "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;</span>li
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  Item 3
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>li
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"            "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>ul
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"        "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  {"    "}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>div
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>body
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
                  <span className="token tag">
                      <span className="token tag">
                          <span className="token punctuation">&lt;/</span>html
                      </span>
                      <span className="token punctuation">&gt;</span>
                  </span>
                  {"\n"}
              </code>
          </pre>
          <ol>
              <li>
                  <p>
                      <strong>Nested Elements</strong>
                  </p>
                  <p>
                      This rule matches the <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>{" "}
                      elements nested inside the
                      <code>&lt;div&gt;</code> with the class "container".
                  </p>
                  <pre data-role="codeBlock" data-info="css" className="language-css css">
                      <code>
                          <span className="token function">div</span>
                          <span className="token punctuation">(</span>class=
                          <span className="token string">"container"</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                          {"    "}
                          <span className="token function">h1</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                          {"    "}
                          <span className="token function">p</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                      </code>
                  </pre>
              </li>
              <li>
                  <p>
                      <strong>Randomization</strong>
                  </p>
                  <p>
                      This rule matches <code>&lt;ul&gt;</code> element with the class
                      "main_list" and 3<code>&lt;li&gt;</code> as children such that their
                      order is not significant.
                  </p>
                  <pre data-role="codeBlock" data-info="css" className="language-css css">
                      <code>
                          <span className="token function">ul</span>
                          <span className="token punctuation">(</span>class=
                          <span className="token string">"main_list"</span> random=
                          <span className="token string">"true"</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                          {"    "}
                          <span className="token function">li</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                          {"    "}
                          <span className="token function">li</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                          {"    "}
                          <span className="token function">li</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                      </code>
                  </pre>
              </li>
              <li>
                  <p>
                      <strong>HREF Attribute Matching</strong>
                  </p>
                  <p>
                      This rule matches <code>&lt;a&gt;</code> element with class link whose{" "}
                      <code>href</code> attribute must start with "https://".
                  </p>
                  <pre data-role="codeBlock" data-info="css" className="language-css css">
                      <code>
                          <span className="token function">a</span>
                          <span className="token punctuation">(</span>
                          <span className="token property">hrefStartsWith</span>
                          <span className="token punctuation">:</span>
                          <span className="token string">"https://"</span> class=
                          <span className="token string">"link"</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                      </code>
                  </pre>
              </li>
              <li>
                  <p>
                      <strong>Text Matching</strong>
                  </p>
                  <p>
                      This rule validates that there must be atleast one{" "}
                      <code>&lt;p&gt;</code> element in the DOM such that it has the text
                      "sample HTML document” .
                  </p>
                  <pre data-role="codeBlock" data-info="css" className="language-css css">
                      <code>
                          <span className="token function">p</span>
                          <span className="token punctuation">(</span>text=
                          <span className="token string">"sample HTML document"</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                      </code>
                  </pre>
              </li>
              <li>
                  <p>
                      <strong>Choice in HTML Tag</strong>
                  </p>
                  <p>
                      This rule matches an element with id "main" such that it can be either a{" "}
                      <code>&lt;div&gt;</code> or a <code>&lt;section&gt;</code>.
                  </p>
                  <pre data-role="codeBlock" data-info="css" className="language-css css">
                      <code>
                          <span className="token function">div</span>
                          <span className="token punctuation">(</span>id=
                          <span className="token string">"main"</span> choice=”section”
                          <span className="token punctuation">)</span>
                          {"\n"}
                      </code>
                  </pre>
              </li>
              <li>
                  <p>
                      <strong>Match ID or Class with text of Kth Child</strong>
                  </p>
                  <p>
                      This rule matches an element <code>&lt;ul&gt;</code> with class
                      main_list such that its id is same as the text of the 3rd child and
                      replaces the blank spaces with "_".
                  </p>
                  <pre data-role="codeBlock" data-info="css" className="language-css css">
                      <code>
                          <span className="token function">ul</span>
                          <span className="token punctuation">(</span>matchIdK=
                          <span className="token string">"3,_"</span> class=
                          <span className="token string">"main_list"</span>
                          <span className="token punctuation">)</span>
                          {"\n"}
                      </code>
                  </pre>
              </li>
          </ol>
          <h4 id="made-with-️-by-dhruv-guptahttpsmrdhruvco">
              Made with ❤️ by <a href="https://mrdhruv.co">Dhruv Gupta</a>
          </h4>
      </div>
  )
}

export default Readme
