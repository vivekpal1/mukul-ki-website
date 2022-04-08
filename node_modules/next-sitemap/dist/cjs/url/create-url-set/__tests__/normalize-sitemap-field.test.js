"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const config_1 = require("../../../fixtures/config");
describe('normalizeSitemapField', () => {
    test('No sitemap field trailingSlash provided => Use config.trailingSlash', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, __1.normalizeSitemapField)(Object.assign(Object.assign({}, config_1.sampleConfig), { trailingSlash: false }), {
            changefreq: 'daily',
            lastmod: expect.any(String),
            priority: 0.7,
            loc: '/page-2',
            alternateRefs: [],
        })).toStrictEqual({
            alternateRefs: expect.any(Array),
            changefreq: 'daily',
            lastmod: expect.any(String),
            loc: 'https://example.com/page-2',
            priority: 0.7,
            trailingSlash: false,
        });
    }));
    test('Sitemap field trailingSlash provided => Use field.trailingSlash', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, __1.normalizeSitemapField)(Object.assign(Object.assign({}, config_1.sampleConfig), { trailingSlash: false }), {
            changefreq: 'daily',
            lastmod: expect.any(String),
            priority: 0.7,
            loc: '/page-2',
            alternateRefs: [],
            trailingSlash: true,
        })).toStrictEqual({
            alternateRefs: expect.any(Array),
            changefreq: 'daily',
            lastmod: expect.any(String),
            loc: 'https://example.com/page-2/',
            priority: 0.7,
            trailingSlash: true,
        });
    }));
});
