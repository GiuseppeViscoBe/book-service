"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const destructureErrorMessage = (error) => {
    const destructuredErrorMessage = Object.values(error.errors)
        .map((error) => error.message)
        .join(", ");
    return destructuredErrorMessage;
};
exports.default = destructureErrorMessage;
