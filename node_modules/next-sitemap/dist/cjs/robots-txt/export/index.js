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
exports.exportRobotsTxt = exports.getRobotsTxtExportConfig = void 0;
const generate_1 = require("../generate");
const file_1 = require("../../file");
const deepmerge_1 = require("@corex/deepmerge");
const getRobotsTxtExportConfig = (config, result) => {
    var _a, _b, _c;
    return (0, deepmerge_1.merge)([
        {
            robotsTxtOptions: {
                additionalSitemaps: [
                    (_a = result === null || result === void 0 ? void 0 : result.runtimePaths) === null || _a === void 0 ? void 0 : _a.SITEMAP_INDEX_URL,
                    ...(((_b = config === null || config === void 0 ? void 0 : config.robotsTxtOptions) === null || _b === void 0 ? void 0 : _b.includeNonIndexSitemaps // Optionally include static generated sitemap files
                    )
                        ? (_c = result === null || result === void 0 ? void 0 : result.generatedSitemaps) !== null && _c !== void 0 ? _c : []
                        : []),
                ],
            },
        },
        config,
    ]);
};
exports.getRobotsTxtExportConfig = getRobotsTxtExportConfig;
/**
 * Export robots txt file
 * @param runtimePaths
 * @param config
 */
const exportRobotsTxt = (config, result) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a config specific for robots.txt
    const exportConfig = (0, exports.getRobotsTxtExportConfig)(config, result);
    // Generate robots text
    const robotsTxt = (0, generate_1.generateRobotsTxt)(exportConfig);
    // Create file
    if (robotsTxt) {
        yield (0, file_1.exportFile)(result === null || result === void 0 ? void 0 : result.runtimePaths.ROBOTS_TXT_FILE, robotsTxt);
    }
});
exports.exportRobotsTxt = exportRobotsTxt;
