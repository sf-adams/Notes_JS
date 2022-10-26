- DOM - Document Object Model - How the browser interprets HTML, and is represented as a tree of nodes. The DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
- DOM API is available to capture events, manipulate the DOM, and create new elements.

Modern browsers are smart - if the browser encounters malformed HTML, it will try to fix it when making the DOM. This is called "quirks mode". It's a way of making sure that the page is still displayed correctly, even if the HTML is not valid. However, it's not a good idea to rely on quirks mode, because it can cause problems in the future. It's better to write valid HTML. e.g. browser will automatically close tags that are not closed, and will add missing tags, or add something like the `<html>` tags if it's missing.

- Section vs div vs article - [Great link](https://www.w3schools.com/html/html5_semantic_elements.asp)

- Headings are used for SEO purposes | Search Engine Optimization | Useful for indexing pages and structure of the page

- The browser will remove any whitespace between HTML elements. This is called "white space collapsing". This is done to make the HTML easier to read. However, if you want to add a space between two elements, you can use the `<br>` tag.

Links allow users to navigate
From one page to another
Or even from one section of the page to another section on the same page
Links in HTML are called Hyperlinks
Hypertext reference shortens to href attribute specifies the URL of the page the link goes to

src vs href - src is for images, href is for links
src is also used for scripts, but it's not recommended to use it for scripts because it can cause problems with caching. Instead, use the `<script>` tag.

Images as links - You can wrap an image in an `<a>` tag to make it a link. This is useful if you want to make an image clickable.
