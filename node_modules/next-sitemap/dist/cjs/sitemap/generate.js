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
exports.generateSitemap = void 0;
const file_1 = require("../file");
const build_1 = require("./build");
const generateSitemap = (chunk) => __awaiter(void 0, void 0, void 0, function* () {
    const sitemapXml = (0, build_1.buildSitemapXml)(chunk.fields);
    return (0, file_1.exportFile)(chunk.path, sitemapXml);
});
exports.generateSitemap = generateSitemap;
