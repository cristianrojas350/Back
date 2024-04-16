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
exports.productService = void 0;
const models_1 = require("../models");
exports.productService = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield models_1.ProductModel.find();
    }),
    create: (entity) => __awaiter(void 0, void 0, void 0, function* () {
        return yield models_1.ProductModel.create(entity);
    }),
    update: (id, body) => __awaiter(void 0, void 0, void 0, function* () {
        return yield models_1.ProductModel.findByIdAndUpdate(id, body, { new: true });
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield models_1.ProductModel.findByIdAndDelete(id);
    })
};
