import { execFileSync } from "node:child_process";

const npm = process.platform === "win32" ? "npm.cmd" : "npm";

execFileSync(npm, ["-v"], { stdio: "inherit" });
