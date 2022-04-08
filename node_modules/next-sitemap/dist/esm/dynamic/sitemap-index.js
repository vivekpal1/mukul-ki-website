var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { buildSitemapIndexXML } from '../sitemap-index/build';
import { withXMLResponse } from './response';
/**
 * Generate index sitemaps on server side
 * @param ctx
 * @param sitemaps
 * @returns
 */
export const getServerSideSitemapIndex = (ctx, sitemaps) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate index sitemap xml content
    const indexContents = buildSitemapIndexXML(sitemaps);
    // Return response
    return withXMLResponse(ctx, indexContents);
});
