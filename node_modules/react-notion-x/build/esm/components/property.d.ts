import React from 'react';
import * as types from 'notion-types';
/**
 * Renders a single value of structured Notion data according to its schema.
 *
 * This corresponds to rendering the content of a single cell in a table.
 * Property rendering is re-used across all the different types of collection views.
 */
export declare const Property: React.FC<{
    schema?: types.CollectionPropertySchema;
    data?: types.Decoration[];
    block?: types.Block;
    collection?: types.Collection;
    inline?: boolean;
}>;
