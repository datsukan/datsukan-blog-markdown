"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const HeaderAnchorLink_1 = require("@component/HeaderAnchorLink");
const Header = ({ id, depth, children }) => {
    const Component = `h${depth}`;
    return (<Component id={id} className="group relative -ml-6 pl-6">
      <HeaderAnchorLink_1.HeaderAnchorLink id={id} className="invisible absolute top-1/2 -translate-y-1/2 -translate-x-7 group-hover:visible"/>
      {children}
    </Component>);
};
exports.Header = Header;
