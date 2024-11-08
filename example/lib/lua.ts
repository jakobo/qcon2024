import {createPlugin} from '@extism/extism';
import { base64ToUint8Array } from "uint8array-extras";

export const createEngine = async (source: string | Uint8Array) => {
  const plugin = await createPlugin({
    wasm: [{ data: typeof source === "string" ? base64ToUint8Array(source) : source }],
  }, { useWasi: true })

  const run = async (code: string) => {
    const output = await plugin.call("lua", code);
    return output?.text();
  };

  return run;
}
