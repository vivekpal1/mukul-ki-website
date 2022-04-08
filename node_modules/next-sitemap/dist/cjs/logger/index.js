"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/**
 * Generic console logger
 */
class Logger {
    /**
     * Missing build
     */
    static noExportMarker() {
        Logger.error('Unable to find export-maker.\nMake sure to build the project using `next build` command\n');
    }
    /**
     * Log missing config file
     */
    static noConfigFile() {
        Logger.error('Unable to find next-sitemap.js or custom config file.\nIf you are using custom config file, make sure to invoke `next-sitemap --config <custom-config-file>.js`\n');
    }
    /**
     * Generic error logger
     * @param text
     * @returns
     */
    static error(...text) {
        return console.error(`\x1b[31m`, `❌`, `[next-sitemap]`, ...text);
    }
    /**
     * Generic log
     * @param arg0
     * @param filePath
     */
    static log(emoji, ...text) {
        return console.log(emoji, `[next-sitemap]`, ...text);
    }
    /**
     * Log stats when the generation is completed
     * @param allSitemaps
     * @returns
     */
    static generationCompleted(result) {
        var _a, _b, _c;
        // Initial stats
        Logger.log(`✅`, `Generated index sitemap and ${(_a = result === null || result === void 0 ? void 0 : result.generatedSitemaps) === null || _a === void 0 ? void 0 : _a.length} sitemap(s)`);
        // Temp assign
        let sitemapsList = [
            (_b = result === null || result === void 0 ? void 0 : result.runtimePaths) === null || _b === void 0 ? void 0 : _b.SITEMAP_INDEX_URL,
            ...((_c = result === null || result === void 0 ? void 0 : result.generatedSitemaps) !== null && _c !== void 0 ? _c : []),
        ];
        // Only show 5 entries on console
        if ((sitemapsList === null || sitemapsList === void 0 ? void 0 : sitemapsList.length) > 7) {
            sitemapsList = [
                ...sitemapsList.splice(0, 3),
                '...',
                ...sitemapsList.splice(sitemapsList.length - 2, 2),
            ];
        }
        // log all sitemap list
        return sitemapsList === null || sitemapsList === void 0 ? void 0 : sitemapsList.forEach((x, index) => x === '...'
            ? console.log(`     ${x}`)
            : console.log(`   ○ ${x}`, index === 0 ? '(index)' : ''));
    }
}
exports.Logger = Logger;
