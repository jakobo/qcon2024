import type { MetaFunction } from "@remix-run/node";
import { useCallback, useMemo, useRef } from "react";
import { createEngine } from "../../lib/lua";
import wasmSource from '../../external/lua.wasm?uint8array&base64';

const script = /* lua */ `
function add(a, b)
  return a + b
end

return add(2, 3)
`.trim();

export const meta: MetaFunction = () => {
  return [
    { title: "Lua in wasm in js in browser in remix" },
    { name: "description", content: "Welcome to the Weird!" },
  ];
};

export default function Index() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const output = useRef<HTMLDivElement>(null);

  const run = useMemo(() => {
    return createEngine(wasmSource);
  }, []);

  const runLua = useCallback(async () => {
    const code = ref.current?.value;
    const out = output.current;

    if (!code || !out || !run) {
      console.log("Pending init", { code, out, run });
      return;
    }

    // wait for engine to resolve
    const inst = await run;

    const result = await inst(code);
    if (result) {
      out.textContent = result;
    }
  }, [run]);

  return (<div className="p-8 max-w-screen-lg">
    <div className="prose max-w-none">
      <h1>Lua (wasm) In the Browser</h1>
      <textarea ref={ref} defaultValue={script} className="font-mono w-full border-2 px-2" rows={8} cols={40}/>
    </div>
      <button onClick={runLua} className="border-2 rounded-md px-3 py-1 text-white bg-emerald-700">run</button>
    <div className="font-mono pt-8">
      <div ref={output} className="px-2">
      output
      </div>
    </div>
    </div>
  );
}
