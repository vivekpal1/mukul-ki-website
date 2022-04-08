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
exports.exportSitemapIndex = void 0;
const file_1 = require("../file");
const build_1 = require("./build");
/**
 * Export sitemap index file
 * @param runtimePaths
 * @param config
 * @returns
 */
const exportSitemapIndex = (result) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Generate sitemap index content
    const content = (0, build_1.buildSitemapIndexXML)((_a = result === null || result === void 0 ? void 0 : result.generatedSitemaps) !== null && _a !== void 0 ? _a : []);
    // Export file
    return (0, file_1.exportFile)(result === null || result === void 0 ? void 0 : result.runtimePaths.SITEMAP_INDEX_FILE, content);
});
exports.exportSitemapIndex = exportSitemapIndex;
