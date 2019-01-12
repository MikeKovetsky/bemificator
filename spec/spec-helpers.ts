import * as fs from "fs";
import * as path from "path";

export function loadFile(relPath: string): string {
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: "utf8" });
}