"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const react_1 = require("react");
const SkeletonLinkCard_1 = require("@component/SkeletonLinkCard");
const Link = ({ href, title, children }) => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    if (children && children[0] && href === children[0]) {
        const baseUrl = process.env.GATSBY_LINK_CARD_API_BASE_URL;
        return (<>
        {isLoading && <SkeletonLinkCard_1.SkeletonLinkCard />}
        <iframe src={`${baseUrl}?url=${href}`} className="h-32 w-full" onLoad={() => setIsLoading(false)} hidden={isLoading}/>
      </>);
    }
    return (<a href={href} title={title} target="_blank" rel="noopener noreferrer">
      {children}
    </a>);
};
exports.Link = Link;
