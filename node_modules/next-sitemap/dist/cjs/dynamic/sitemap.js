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
exports.getServerSideSitemap = void 0;
const build_1 = require("../sitemap/build");
const response_1 = require("./response");
const getServerSideSitemap = (ctx, fields) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate sitemap xml
    const contents = (0, build_1.buildSitemapXml)(fields);
    return (0, response_1.withXMLResponse)(ctx, contents);
});
exports.getServerSideSitemap = getServerSideSitemap;
