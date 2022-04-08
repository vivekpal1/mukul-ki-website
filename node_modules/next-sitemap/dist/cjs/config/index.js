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
exports.updateWithRuntimeConfig = exports.getRuntimeConfig = exports.withDefaultConfig = exports.mergeConfig = exports.defaultConfig = exports.transformSitemap = exports.loadConfig = void 0;
const deepmerge_1 = require("@corex/deepmerge");
const file_1 = require("../file");
const logger_1 = require("../logger");
const loadConfig = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const baseConfig = yield (0, file_1.loadFile)(path);
    return (0, exports.withDefaultConfig)(baseConfig);
});
exports.loadConfig = loadConfig;
const transformSitemap = (config, url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    return {
        loc: url,
        changefreq: config === null || config === void 0 ? void 0 : config.changefreq,
        priority: config === null || config === void 0 ? void 0 : config.priority,
        lastmod: (config === null || config === void 0 ? void 0 : config.autoLastmod) ? new Date().toISOString() : undefined,
        alternateRefs: (_a = config.alternateRefs) !== null && _a !== void 0 ? _a : [],
        trailingSlash: config === null || config === void 0 ? void 0 : config.trailingSlash,
    };
});
exports.transformSitemap = transformSitemap;
exports.defaultConfig = {
    sourceDir: '.next',
    outDir: 'public',
    priority: 0.7,
    sitemapBaseFileName: 'sitemap',
    changefreq: 'daily',
    sitemapSize: 5000,
    autoLastmod: true,
    exclude: [],
    transform: exports.transformSitemap,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [],
    },
};
const mergeConfig = (...configs) => {
    return (0, deepmerge_1.merge)(configs, {
        arrayMergeType: 'overwrite',
    });
};
exports.mergeConfig = mergeConfig;
const withDefaultConfig = (config) => {
    return (0, exports.mergeConfig)(exports.defaultConfig, config);
};
exports.withDefaultConfig = withDefaultConfig;
const getRuntimeConfig = (runtimePaths) => __awaiter(void 0, void 0, void 0, function* () {
    const exportMarkerConfig = yield (0, file_1.loadFile)(runtimePaths.EXPORT_MARKER, false).catch((err) => {
        logger_1.Logger.noExportMarker();
        throw err;
    });
    return {
        trailingSlash: exportMarkerConfig === null || exportMarkerConfig === void 0 ? void 0 : exportMarkerConfig.exportTrailingSlash,
    };
});
exports.getRuntimeConfig = getRuntimeConfig;
const updateWithRuntimeConfig = (config, runtimePaths) => __awaiter(void 0, void 0, void 0, function* () {
    // Runtime configs
    const runtimeConfig = yield (0, exports.getRuntimeConfig)(runtimePaths);
    // Prioritize `trailingSlash` value from `next-sitemap.js`
    const trailingSlashConfig = 'trailingSlash' in config
        ? {
            trailingSlash: config === null || config === void 0 ? void 0 : config.trailingSlash,
        }
        : {};
    return (0, exports.mergeConfig)(config, runtimeConfig, trailingSlashConfig);
});
exports.updateWithRuntimeConfig = updateWithRuntimeConfig;
