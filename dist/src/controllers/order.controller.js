"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const services_1 = require("../services");
exports.orderController = {
    getAllTask: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield services_1.orderService.getAll();
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield services_1.orderService.create(req.body);
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const data = yield services_1.orderService.update(id, req.body);
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const data = yield services_1.orderService.delete(id);
            return res.json(data);
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }),
};
