import { IConfig, INextManifest, ISitemapField } from '../../interface';
/**
 * Return UTF-8 encoded urls
 * @param path
 * @returns
 * @link https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap#general-guidelines
 */
export declare const entityEscapedUrl: (path: string) => string;
export declare const absoluteUrl: (siteUrl: string, path: string, trailingSlash?: boolean | undefined) => string;
/**
 * Normalize sitemap fields to include absolute urls
 * @param config
 * @param field
 */
export declare const normalizeSitemapField: (config: IConfig, field: ISitemapField) => ISitemapField;
/**
 * Create a unique url set
 * @param config
 * @param manifest
 */
export declare const createUrlSet: (config: IConfig, manifest: INextManifest) => Promise<ISitemapField[]>;
