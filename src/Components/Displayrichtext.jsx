/* eslint-disable react/prop-types */
import DOMPurify from "dompurify";

const DisplayRichText = ({ htmlContent }) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent, {
    ALLOWED_TAGS: [
      "iframe",
      "p",
      "strong",
      "em",
      "u",
      "strike",
      "ul",
      "ol",
      "li",
      "div",
      "span",
      "a",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "br",
      "u",
      "sub",
      "sup",
      "pre",
      "code",
      "mark",
      "blockquote",
      "video",
    ],
    ALLOWED_ATTR: [
      "src",
      "width",
      "height",
      "frameborder",
      "allow",
      "allowfullscreen",
      "href",
      "target",
      "alt",
      "title",
      "style",
      "colspan",
      "rowspan",
      "frameborder",
      "allow",
      "allowfullscreen",
      "href",
      "target",
      "align",
      "class",
      "data-*",
      "bgcolor",
    ],
    ALLOWED_CSS: {
      "*": {
        "background-color": true,
        color: true,
        padding: true,
        "border-radius": true,
        "font-family": true,
        "white-space": true,
      },
    },
  });
  return (
    <div
      className="rich-text"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};
export default DisplayRichText;
