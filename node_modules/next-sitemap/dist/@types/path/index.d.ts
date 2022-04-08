import type { ISitemapChunk, IConfig, IRuntimePaths, ISitemapField } from '../interface';
/**
 * Return absolute path from path segments
 * @param pathSegment
 * @returns
 */
export declare const getPath: (...pathSegment: string[]) => string;
/**
 * Resolve sitemap chunk path
 * @param indexSitemapPath
 * @param chunks
 * @param config
 * @returns
 */
export declare const resolveSitemapChunks: (indexSitemapPath: string, chunks: ISitemapField[][], config: IConfig) => ISitemapChunk[];
/**
 * Return all runtime paths
 * @param config
 * @returns
 */
export declare const getRuntimePaths: (config: IConfig) => IRuntimePaths;
/**
 * Get config file path
 * @returns
 */
export declare const getConfigFilePath: () => Promise<string>;
