"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderAnchorLink = void 0;
const gatsby_1 = require("gatsby");
const solid_1 = require("@heroicons/react/solid");
const HeaderAnchorLink = ({ className = "", id }) => {
    return (<div className={className}>
      <gatsby_1.Link to={`#${id}`}>
        <solid_1.LinkIcon className="block h-5 w-5 cursor-pointer text-secondary"/>
      </gatsby_1.Link>
    </div>);
};
exports.HeaderAnchorLink = HeaderAnchorLink;
