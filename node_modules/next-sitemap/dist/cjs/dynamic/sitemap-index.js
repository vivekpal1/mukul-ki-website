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
exports.getServerSideSitemapIndex = void 0;
const build_1 = require("../sitemap-index/build");
const response_1 = require("./response");
/**
 * Generate index sitemaps on server side
 * @param ctx
 * @param sitemaps
 * @returns
 */
const getServerSideSitemapIndex = (ctx, sitemaps) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate index sitemap xml content
    const indexContents = (0, build_1.buildSitemapIndexXML)(sitemaps);
    // Return response
    return (0, response_1.withXMLResponse)(ctx, indexContents);
});
exports.getServerSideSitemapIndex = getServerSideSitemapIndex;
