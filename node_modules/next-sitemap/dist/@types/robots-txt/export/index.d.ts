import { INextSitemapResult } from '../../interface';
import { IConfig } from '../..';
export declare const getRobotsTxtExportConfig: (config: IConfig, result: INextSitemapResult) => IConfig & {
    robotsTxtOptions: {
        additionalSitemaps: string[];
    };
};
/**
 * Export robots txt file
 * @param runtimePaths
 * @param config
 */
export declare const exportRobotsTxt: (config: IConfig, result: INextSitemapResult) => Promise<any>;
