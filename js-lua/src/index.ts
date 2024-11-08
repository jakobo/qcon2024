import {load} from 'fengari-web';

export function lua() {
  const code = Host.inputString();
  const chunkId = `chunk${Math.random().toString(36).substring(7)}${Date.now()}`;
  const result = load(code, chunkId)();
  Host.outputString(result);
}
