var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'node:fs/promises';
import path from 'node:path';
/**
 * Load file
 * @param path
 * @param throwError
 * @returns
 */
export const loadFile = (path, throwError = true) => __awaiter(void 0, void 0, void 0, function* () {
    // Get path stat
    const stat = yield fs.stat(path);
    // Import and return if the file exist
    if (stat.isFile()) {
        return require(path);
    }
    // Handle error
    if (throwError) {
        throw new Error(`${path} does not exist.`);
    }
});
/**
 * Export file
 * @param filePath
 * @param content
 * @returns
 */
export const exportFile = (filePath, content) => __awaiter(void 0, void 0, void 0, function* () {
    // Target folder
    const folder = path.dirname(filePath);
    // Get file stat
    const stat = yield fs.stat(folder).catch(() => ({
        isDirectory: () => false,
    }));
    // Directory
    if (!stat.isDirectory()) {
        yield fs.mkdir(folder).catch(() => {
            return;
        });
    }
    // Write file
    return fs.writeFile(filePath, content);
});
