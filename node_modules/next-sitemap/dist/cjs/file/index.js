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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportFile = exports.loadFile = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
/**
 * Load file
 * @param path
 * @param throwError
 * @returns
 */
const loadFile = (path, throwError = true) => __awaiter(void 0, void 0, void 0, function* () {
    // Get path stat
    const stat = yield promises_1.default.stat(path);
    // Import and return if the file exist
    if (stat.isFile()) {
        return require(path);
    }
    // Handle error
    if (throwError) {
        throw new Error(`${path} does not exist.`);
    }
});
exports.loadFile = loadFile;
/**
 * Export file
 * @param filePath
 * @param content
 * @returns
 */
const exportFile = (filePath, content) => __awaiter(void 0, void 0, void 0, function* () {
    // Target folder
    const folder = node_path_1.default.dirname(filePath);
    // Get file stat
    const stat = yield promises_1.default.stat(folder).catch(() => ({
        isDirectory: () => false,
    }));
    // Directory
    if (!stat.isDirectory()) {
        yield promises_1.default.mkdir(folder).catch(() => {
            return;
        });
    }
    // Write file
    return promises_1.default.writeFile(filePath, content);
});
exports.exportFile = exportFile;
