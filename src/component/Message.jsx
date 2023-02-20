"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertMessage = exports.WarnMessage = exports.InfoMessage = exports.NormalMessage = void 0;
const solid_1 = require("@heroicons/react/solid");
const baseClass = {
    block: "message-block flex items-center gap-4 rounded-md p-4",
    icon: "h-5 w-5",
};
const NormalMessage = ({ children, className = "" }) => {
    return (<div className={`bg-gray-100 ${baseClass.block} ${className}`}>
      <solid_1.DotsCircleHorizontalIcon className={`text-gray-500 ${baseClass.icon}`}/>
      <div className="w-full">{children}</div>
    </div>);
};
exports.NormalMessage = NormalMessage;
const InfoMessage = ({ children, className = "" }) => {
    return (<div className={`bg-blue-100 ${baseClass.block} ${className}`}>
      <solid_1.InformationCircleIcon className={`text-blue-500 ${baseClass.icon}`}/>
      <div className="w-full">{children}</div>
    </div>);
};
exports.InfoMessage = InfoMessage;
const WarnMessage = ({ children, className = "" }) => {
    return (<div className={`bg-yellow-100 ${baseClass.block} ${className}`}>
      <solid_1.ExclamationCircleIcon className={`text-yellow-500 ${baseClass.icon}`}/>
      <div className="w-full">{children}</div>
    </div>);
};
exports.WarnMessage = WarnMessage;
const AlertMessage = ({ children, className = "" }) => {
    return (<div className={`bg-red-100 ${baseClass.block} ${className}`}>
      <solid_1.XCircleIcon className={`text-red-500  ${baseClass.icon}`}/>
      <div className="w-full">{children}</div>
    </div>);
};
exports.AlertMessage = AlertMessage;
