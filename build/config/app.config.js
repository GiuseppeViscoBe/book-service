"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_router_1 = __importDefault(require("./../routes/book.router"));
const db_config_1 = __importDefault(require("./db.config"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const app = (0, express_1.default)();
(0, db_config_1.default)();
app.use(express_1.default.json());
app.use('/api', book_router_1.default);
app.use(errorHandler_1.default);
exports.default = app;
