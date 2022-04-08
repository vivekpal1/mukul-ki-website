import { ExtendedRecordMap } from 'notion-types';
/**
 * Gets the canonical, display-friendly version of a page's ID for use in URLs.
 */
export declare const getCanonicalPageId: (pageId: string, recordMap: ExtendedRecordMap, { uuid }?: {
    uuid?: boolean;
}) => string | null;
export declare const normalizeTitle: (title: string | null) => string;
