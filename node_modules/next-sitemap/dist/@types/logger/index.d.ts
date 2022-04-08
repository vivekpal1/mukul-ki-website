import { INextSitemapResult } from '..';
/**
 * Generic console logger
 */
export declare class Logger {
    /**
     * Missing build
     */
    static noExportMarker(): void;
    /**
     * Log missing config file
     */
    static noConfigFile(): void;
    /**
     * Generic error logger
     * @param text
     * @returns
     */
    static error(...text: string[]): void;
    /**
     * Generic log
     * @param arg0
     * @param filePath
     */
    static log(emoji: string, ...text: string[]): any;
    /**
     * Log stats when the generation is completed
     * @param allSitemaps
     * @returns
     */
    static generationCompleted(result: INextSitemapResult): void;
}
