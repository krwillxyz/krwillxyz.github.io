import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const layout = fs.readFileSync(path.join(root, "_layouts", "default.html"), "utf8");
const config = fs.readFileSync(path.join(root, "_config.yml"), "utf8");

assert.equal(fs.existsSync(path.join(root, "CNAME")), false, "GitHub must not claim the production hostname");
assert.match(layout, /window\.location\.hostname === "krwillxyz\.github\.io"/);
assert.match(layout, /This GitHub Pages address is no longer maintained/);
assert.match(layout, /href="https:\/\/krwill\.xyz\/"/);
assert.match(config, /url: "https:\/\/krwill\.xyz"/, "canonical metadata must continue to name the production site");

console.log("ok  GitHub Pages is an explicitly retired projection");
