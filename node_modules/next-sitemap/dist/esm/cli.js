var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { loadConfig, updateWithRuntimeConfig } from './config';
import { loadManifest } from './manifest';
import { createUrlSet, generateUrl } from './url';
import { generateSitemap } from './sitemap/generate';
import { toChunks } from './array';
import { resolveSitemapChunks, getRuntimePaths, getConfigFilePath, } from './path';
import { exportRobotsTxt } from './robots-txt';
import { exportSitemapIndex } from './sitemap-index/export';
import { Logger } from './logger';
// Async main
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // Get config file path
    const configFilePath = yield getConfigFilePath();
    // Load next-sitemap.js
    let config = yield loadConfig(configFilePath);
    // Get runtime paths
    const runtimePaths = getRuntimePaths(config);
    // Update current config with runtime config
    config = yield updateWithRuntimeConfig(config, runtimePaths);
    // Load next.js manifest files
    const manifest = yield loadManifest(runtimePaths);
    // Create url-set based on config and manifest
    const urlSet = yield createUrlSet(config, manifest);
    // Split sitemap into multiple files
    const chunks = toChunks(urlSet, config.sitemapSize);
    const sitemapChunks = resolveSitemapChunks(runtimePaths.SITEMAP_INDEX_FILE, chunks, config);
    // All sitemaps array to keep track of generated sitemap files.
    // Later to be added on robots.txt
    // Add default index file as first entry of sitemap
    const generatedSitemaps = [];
    // Generate sitemaps from chunks
    yield Promise.all(sitemapChunks.map((chunk) => __awaiter(void 0, void 0, void 0, function* () {
        // Get sitemap absolute url
        const sitemapUrl = generateUrl(config.siteUrl, `/${chunk.filename}`);
        // Add generate sitemap to sitemap list
        generatedSitemaps.push(sitemapUrl);
        // Generate sitemap
        return generateSitemap(chunk);
    })));
    // Create result object
    const result = {
        runtimePaths,
        generatedSitemaps,
    };
    // Export sitemap index file
    yield exportSitemapIndex(result);
    // Generate robots.txt
    if (config === null || config === void 0 ? void 0 : config.generateRobotsTxt) {
        yield exportRobotsTxt(config, result);
    }
    return result;
});
// Execute
main().then(Logger.generationCompleted);
