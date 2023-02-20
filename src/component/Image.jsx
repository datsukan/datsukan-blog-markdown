"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const react_1 = require("react");
const ImageModal_1 = require("@component/ImageModal");
const Image = (props) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    return (<>
      <ImageModal_1.ImageModal open={open} setOpen={setOpen} image={props}/>
      <img {...props} onClick={() => setOpen(true)} className="cursor-zoom-in"/>
    </>);
};
exports.Image = Image;
