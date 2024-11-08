import { createEngine } from "../lib/lua";
import { readFile } from "node:fs/promises";

const wasm = await readFile(new URL("../external/lua.wasm", import.meta.url));
const run = await createEngine(wasm);

const script = /* lua */ `
function add(a, b)
  return a + b
end

return add(2, 3)
`;

const main = async () => {
  const result = await run(script);
  console.log(result);
}

await main();
