var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import minimist from 'minimist';
import fs from 'node:fs/promises';
import path from 'node:path';
import { generateUrl } from '../url';
import { Logger } from '../logger';
/**
 * Return absolute path from path segments
 * @param pathSegment
 * @returns
 */
export const getPath = (...pathSegment) => {
    return path.resolve(process.cwd(), ...pathSegment);
};
/**
 * Resolve sitemap chunk path
 * @param indexSitemapPath
 * @param chunks
 * @param config
 * @returns
 */
export const resolveSitemapChunks = (indexSitemapPath, chunks, config) => {
    // Base directory of export folder
    const folder = path.dirname(indexSitemapPath);
    return chunks.map((chunk, index) => {
        const filename = `${config.sitemapBaseFileName}-${index}.xml`;
        return {
            path: `${folder}/${filename}`,
            fields: chunk,
            filename,
        };
    });
};
/**
 * Return all runtime paths
 * @param config
 * @returns
 */
export const getRuntimePaths = (config) => {
    return {
        BUILD_MANIFEST: getPath(config.sourceDir, 'build-manifest.json'),
        PRERENDER_MANIFEST: getPath(config.sourceDir, 'prerender-manifest.json'),
        ROUTES_MANIFEST: getPath(config.sourceDir, 'routes-manifest.json'),
        EXPORT_MARKER: getPath(config.sourceDir, 'export-marker.json'),
        ROBOTS_TXT_FILE: getPath(config.outDir, 'robots.txt'),
        SITEMAP_INDEX_FILE: getPath(config.outDir, `${config.sitemapBaseFileName}.xml`),
        SITEMAP_INDEX_URL: generateUrl(config === null || config === void 0 ? void 0 : config.siteUrl, `${config.sitemapBaseFileName}.xml`),
    };
};
/**
 * Get config file path
 * @returns
 */
export const getConfigFilePath = () => __awaiter(void 0, void 0, void 0, function* () {
    // Extract args from command
    const args = minimist(process.argv.slice(2));
    // Config file path
    const configPath = getPath(args.config || 'next-sitemap.js');
    // Check file stat
    return fs
        .stat(configPath)
        .then(() => configPath)
        .catch((err) => {
        Logger.noConfigFile();
        throw err;
    });
});
