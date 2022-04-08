var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateRobotsTxt } from '../generate';
import { exportFile } from '../../file';
import { merge } from '@corex/deepmerge';
export const getRobotsTxtExportConfig = (config, result) => {
    var _a, _b, _c;
    return merge([
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
/**
 * Export robots txt file
 * @param runtimePaths
 * @param config
 */
export const exportRobotsTxt = (config, result) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a config specific for robots.txt
    const exportConfig = getRobotsTxtExportConfig(config, result);
    // Generate robots text
    const robotsTxt = generateRobotsTxt(exportConfig);
    // Create file
    if (robotsTxt) {
        yield exportFile(result === null || result === void 0 ? void 0 : result.runtimePaths.ROBOTS_TXT_FILE, robotsTxt);
    }
});
