import DOMPurify from 'dompurify';

const DisplayRichText = ({ htmlContent }) => {
    const sanitizedHtml = DOMPurify.sanitize(htmlContent);
    return (
        <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
    );
};
export default DisplayRichText;