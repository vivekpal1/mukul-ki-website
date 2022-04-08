import { IConfig, ISitemapField, IRuntimePaths } from '../interface';
export declare const loadConfig: (path: string) => Promise<IConfig>;
export declare const transformSitemap: (config: IConfig, url: string) => Promise<ISitemapField>;
export declare const defaultConfig: Partial<IConfig>;
export declare const mergeConfig: (...configs: Array<Partial<IConfig>>) => IConfig;
export declare const withDefaultConfig: (config: Partial<IConfig>) => IConfig;
export declare const getRuntimeConfig: (runtimePaths: IRuntimePaths) => Promise<Partial<IConfig>>;
export declare const updateWithRuntimeConfig: (config: IConfig, runtimePaths: IRuntimePaths) => Promise<IConfig>;
