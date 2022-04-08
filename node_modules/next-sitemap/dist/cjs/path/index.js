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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigFilePath = exports.getRuntimePaths = exports.resolveSitemapChunks = exports.getPath = void 0;
const minimist_1 = __importDefault(require("minimist"));
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const url_1 = require("../url");
const logger_1 = require("../logger");
/**
 * Return absolute path from path segments
 * @param pathSegment
 * @returns
 */
const getPath = (...pathSegment) => {
    return node_path_1.default.resolve(process.cwd(), ...pathSegment);
};
exports.getPath = getPath;
/**
 * Resolve sitemap chunk path
 * @param indexSitemapPath
 * @param chunks
 * @param config
 * @returns
 */
const resolveSitemapChunks = (indexSitemapPath, chunks, config) => {
    // Base directory of export folder
    const folder = node_path_1.default.dirname(indexSitemapPath);
    return chunks.map((chunk, index) => {
        const filename = `${config.sitemapBaseFileName}-${index}.xml`;
        return {
            path: `${folder}/${filename}`,
            fields: chunk,
            filename,
        };
    });
};
exports.resolveSitemapChunks = resolveSitemapChunks;
/**
 * Return all runtime paths
 * @param config
 * @returns
 */
const getRuntimePaths = (config) => {
    return {
        BUILD_MANIFEST: (0, exports.getPath)(config.sourceDir, 'build-manifest.json'),
        PRERENDER_MANIFEST: (0, exports.getPath)(config.sourceDir, 'prerender-manifest.json'),
        ROUTES_MANIFEST: (0, exports.getPath)(config.sourceDir, 'routes-manifest.json'),
        EXPORT_MARKER: (0, exports.getPath)(config.sourceDir, 'export-marker.json'),
        ROBOTS_TXT_FILE: (0, exports.getPath)(config.outDir, 'robots.txt'),
        SITEMAP_INDEX_FILE: (0, exports.getPath)(config.outDir, `${config.sitemapBaseFileName}.xml`),
        SITEMAP_INDEX_URL: (0, url_1.generateUrl)(config === null || config === void 0 ? void 0 : config.siteUrl, `${config.sitemapBaseFileName}.xml`),
    };
};
exports.getRuntimePaths = getRuntimePaths;
/**
 * Get config file path
 * @returns
 */
const getConfigFilePath = () => __awaiter(void 0, void 0, void 0, function* () {
    // Extract args from command
    const args = (0, minimist_1.default)(process.argv.slice(2));
    // Config file path
    const configPath = (0, exports.getPath)(args.config || 'next-sitemap.js');
    // Check file stat
    return promises_1.default
        .stat(configPath)
        .then(() => configPath)
        .catch((err) => {
        logger_1.Logger.noConfigFile();
        throw err;
    });
});
exports.getConfigFilePath = getConfigFilePath;
