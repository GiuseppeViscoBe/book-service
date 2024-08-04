"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __importDefault(require("./config/app.config"));
const PORT = Number(process.env.PORT) || 8000;
app_config_1.default.listen(PORT, () => {
    console.log('Server listening on port : ' + PORT);
});
