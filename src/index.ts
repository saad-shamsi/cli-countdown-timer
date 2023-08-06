#!/usr/bin/env node
import main from "./countdown.js";

import welcome from "./utils/welcome.js";

await welcome();

await main();
