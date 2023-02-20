"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModal = void 0;
const react_1 = require("react");
const react_2 = require("@headlessui/react");
const ImageModal = ({ open, setOpen, image }) => {
    const cancelButtonRef = (0, react_1.useRef)(null);
    return (<react_2.Transition.Root show={open} as={react_1.Fragment}>
      <react_2.Dialog as="div" className="fixed inset-0 z-10 cursor-zoom-out overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="block min-h-screen px-4 text-center" ref={cancelButtonRef}>
          <react_2.Transition.Child as={react_1.Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <react_2.Dialog.Overlay className="transition-opacity fixed inset-0 bg-gray-700 bg-opacity-75"/>
          </react_2.Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <react_2.Transition.Child as={react_1.Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 translate-y-0 scale-95" enterTo="opacity-100 translate-y-0 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 scale-100" leaveTo="opacity-0 translate-y-4 translate-y-0 scale-95">
            <div className="transition-all inline-block max-h-screen max-w-7xl transform align-middle shadow-xl" onClick={() => setOpen(false)}>
              <img {...image} className="max-h-screen max-w-full"/>
            </div>
          </react_2.Transition.Child>
        </div>
      </react_2.Dialog>
    </react_2.Transition.Root>);
};
exports.ImageModal = ImageModal;
