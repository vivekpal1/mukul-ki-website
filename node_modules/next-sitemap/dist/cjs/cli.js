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
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const config_1 = require("./config");
const manifest_1 = require("./manifest");
const url_1 = require("./url");
const generate_1 = require("./sitemap/generate");
const array_1 = require("./array");
const path_1 = require("./path");
const robots_txt_1 = require("./robots-txt");
const export_1 = require("./sitemap-index/export");
const logger_1 = require("./logger");
// Async main
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // Get config file path
    const configFilePath = yield (0, path_1.getConfigFilePath)();
    // Load next-sitemap.js
    let config = yield (0, config_1.loadConfig)(configFilePath);
    // Get runtime paths
    const runtimePaths = (0, path_1.getRuntimePaths)(config);
    // Update current config with runtime config
    config = yield (0, config_1.updateWithRuntimeConfig)(config, runtimePaths);
    // Load next.js manifest files
    const manifest = yield (0, manifest_1.loadManifest)(runtimePaths);
    // Create url-set based on config and manifest
    const urlSet = yield (0, url_1.createUrlSet)(config, manifest);
    // Split sitemap into multiple files
    const chunks = (0, array_1.toChunks)(urlSet, config.sitemapSize);
    const sitemapChunks = (0, path_1.resolveSitemapChunks)(runtimePaths.SITEMAP_INDEX_FILE, chunks, config);
    // All sitemaps array to keep track of generated sitemap files.
    // Later to be added on robots.txt
    // Add default index file as first entry of sitemap
    const generatedSitemaps = [];
    // Generate sitemaps from chunks
    yield Promise.all(sitemapChunks.map((chunk) => __awaiter(void 0, void 0, void 0, function* () {
        // Get sitemap absolute url
        const sitemapUrl = (0, url_1.generateUrl)(config.siteUrl, `/${chunk.filename}`);
        // Add generate sitemap to sitemap list
        generatedSitemaps.push(sitemapUrl);
        // Generate sitemap
        return (0, generate_1.generateSitemap)(chunk);
    })));
    // Create result object
    const result = {
        runtimePaths,
        generatedSitemaps,
    };
    // Export sitemap index file
    yield (0, export_1.exportSitemapIndex)(result);
    // Generate robots.txt
    if (config === null || config === void 0 ? void 0 : config.generateRobotsTxt) {
        yield (0, robots_txt_1.exportRobotsTxt)(config, result);
    }
    return result;
});
// Execute
main().then(logger_1.Logger.generationCompleted);
