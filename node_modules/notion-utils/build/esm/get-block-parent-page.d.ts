import * as types from 'notion-types';
/**
 * Returns the parent page block containing a given page.
 *
 * Note that many times this will not be the direct parent block since
 * some non-page content blocks can contain sub-blocks.
 */
export declare const getBlockParentPage: (block: types.Block, recordMap: types.ExtendedRecordMap) => types.PageBlock | null;
