"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withXMLResponse = void 0;
/**
 * Send XML response
 * @param ctx
 * @param content
 * @returns
 */
const withXMLResponse = (ctx, content) => {
    if (ctx === null || ctx === void 0 ? void 0 : ctx.res) {
        const { res } = ctx;
        // Set header
        res.setHeader('Content-Type', 'text/xml');
        // Write the sitemap context to resonse
        res.write(content);
        // End response
        res.end();
    }
    // Empty props
    return {
        props: {},
    };
};
exports.withXMLResponse = withXMLResponse;
