var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loadFile } from '../file';
export const loadManifest = (runtimePaths) => __awaiter(void 0, void 0, void 0, function* () {
    // Load build manifest
    const buildManifest = yield loadFile(runtimePaths.BUILD_MANIFEST);
    // Throw error if no build manifest exist
    if (!buildManifest) {
        throw new Error('Unable to find build manifest, make sure to build your next project before running next-sitemap command');
    }
    // Load pre-render manifest
    const preRenderManifest = yield loadFile(runtimePaths.PRERENDER_MANIFEST, false);
    // Load routes manifest
    const routesManifest = yield loadFile(runtimePaths.ROUTES_MANIFEST, false);
    return {
        build: buildManifest,
        preRender: preRenderManifest,
        routes: routesManifest,
    };
});
