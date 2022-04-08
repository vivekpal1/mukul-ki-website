export const buildSitemapIndexXML = (allSitemaps) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allSitemaps === null || allSitemaps === void 0 ? void 0 : allSitemaps.map((x) => `<sitemap><loc>${x}</loc></sitemap>`).join('\n')}
</sitemapindex>`;
};
