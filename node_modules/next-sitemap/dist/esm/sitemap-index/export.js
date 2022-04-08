var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { exportFile } from '../file';
import { buildSitemapIndexXML } from './build';
/**
 * Export sitemap index file
 * @param runtimePaths
 * @param config
 * @returns
 */
export const exportSitemapIndex = (result) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Generate sitemap index content
    const content = buildSitemapIndexXML((_a = result === null || result === void 0 ? void 0 : result.generatedSitemaps) !== null && _a !== void 0 ? _a : []);
    // Export file
    return exportFile(result === null || result === void 0 ? void 0 : result.runtimePaths.SITEMAP_INDEX_FILE, content);
});
