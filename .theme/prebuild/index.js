import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { run } from "./.prebuild/index.js";
import * as tasks from "./tasks/index.js";

const configPath = join(dirname(fileURLToPath(import.meta.url)), "config.yml");

run(configPath, { customTasks: tasks });