var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { CollectionViewTable } from './collection-view-table';
import { CollectionViewGallery } from './collection-view-gallery';
import { CollectionViewList } from './collection-view-list';
import { CollectionViewBoard } from './collection-view-board';
export var CollectionView = function (props) {
    var collectionView = props.collectionView;
    switch (collectionView.type) {
        case 'table':
            return React.createElement(CollectionViewTable, __assign({}, props));
        case 'gallery':
            return React.createElement(CollectionViewGallery, __assign({}, props));
        case 'list':
            return React.createElement(CollectionViewList, __assign({}, props));
        case 'board':
            return React.createElement(CollectionViewBoard, __assign({}, props));
        default:
            console.warn('unsupported collection view', collectionView);
            return null;
    }
};
//# sourceMappingURL=collection-view.js.map