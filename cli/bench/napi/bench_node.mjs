import { bench, run } from "mitata";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const lib = require("../../../test_napi.node");

bench("warmup", () => {});
bench("napi_get_undefined", () => lib.test_get_undefined(0));

run();
