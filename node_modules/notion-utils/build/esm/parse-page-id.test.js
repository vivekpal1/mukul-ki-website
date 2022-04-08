import test from 'ava';
import { parsePageId } from './parse-page-id';
var pageIdFixturesSuccess = [
    '267c0d1f1df8457f9b5c8f7efca16d83',
    'Twitter-Automation-Tool-267c0d1f1df8457f9b5c8f7efca16d83',
    'www.notion.so/saasifysh/Twitter-Automation-Tool-267c0d1f1df8457f9b5c8f7efca16d83',
    'www.notion.so/saasifysh/Twitter-Automation-Tool-267c0d1f1df8457f9b5c8f7efca16d83?foo=bar&bar=foo',
    'https://www.notion.so/saasifysh/Standalone-Notion-Hosting-717a3608b1874cc5bafb5b9680b53395',
    'Standalone-Notion-Hosting-717a3608b1874cc5bafb5b9680b53395',
    'Standalone-Notion-Hosting-717a3608b1874cc5bafb5b9680b53395?foo',
    '-717a3608b1874cc5bafb5b9680b53395',
    '717a3608b1874cc5bafb5b9680b53395',
    '717a3608b1874cc5bafb5b9680b53395?',
    'e5a735e3-3baa-458b-9889-93b55a54ee54',
    'fde5ac74-eea3-4527-8f00-4482710e1af3',
    'about-e5a735e3-3baa-458b-9889-93b55a54ee54',
    '.com/about-e5a735e3-3baa-458b-9889-93b55a54ee54',
    'About-d9ae0c6e7cad49a78e21d240cf2e3d04'
];
var pageIdFixturesFailure = [
    '717A3608b1874CC5bafb5b9680b53395',
    '717A36',
    '',
    'notion.so/saasifysh/Twitter-Automation-Tool-267c0d1f1df8457f9b5c8f7efca16d83abc',
    'a267c0d1f1df8457f9b5c8f7efca16d83',
    '267c0d1f1df8457f9b5c8f7efca16d83a',
    '267c0d1f1%f8457f9b5c8f7efca16d83',
    'Twitter-Automation-Tool',
    'fde5ac74-eea3-4527-8f00-4482710e1af',
    null
];
test('utils.parsePageId non-uuid success', function (t) {
    for (var _i = 0, pageIdFixturesSuccess_1 = pageIdFixturesSuccess; _i < pageIdFixturesSuccess_1.length; _i++) {
        var id = pageIdFixturesSuccess_1[_i];
        var pageId = parsePageId(id, { uuid: false });
        t.truthy(pageId);
        t.falsy(pageId.includes('-'));
        t.snapshot(pageId);
    }
});
test('utils.parsePageId uuid success', function (t) {
    for (var _i = 0, pageIdFixturesSuccess_2 = pageIdFixturesSuccess; _i < pageIdFixturesSuccess_2.length; _i++) {
        var id = pageIdFixturesSuccess_2[_i];
        var pageId = parsePageId(id, { uuid: true });
        t.truthy(pageId);
        t.truthy(pageId.includes('-'));
        t.snapshot(pageId);
    }
});
test('utils.parsePageId failure', function (t) {
    for (var _i = 0, pageIdFixturesFailure_1 = pageIdFixturesFailure; _i < pageIdFixturesFailure_1.length; _i++) {
        var id = pageIdFixturesFailure_1[_i];
        var pageId = parsePageId(id);
        t.falsy(pageId);
    }
});
//# sourceMappingURL=parse-page-id.test.js.map