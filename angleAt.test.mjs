// Self-check for the sweep curve: extracts angleAt() from client.js and asserts it
// walks the perimeter clockwise, evenly. Run: node angleAt.test.mjs
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('./client.js', import.meta.url), 'utf8');
const body = source.match(/function angleAt\([\s\S]*?\n    \}/);
if (!body) throw new Error('angleAt not found in client.js');
const angleAt = new Function(body[0] + '; return angleAt;')();

const near = (a, b, eps = 1e-6) => Math.abs(a - b) < eps;
const close = (a, b) => near((a - b + 360) % 360, 0, 1e-6) || near((b - a + 360) % 360, 0, 1e-6);

const [w, h] = [200, 40];
const L = 2 * (w + h);

// Start at the top left corner; perimeter distance w/2 sits at the top centre.
const toDeg = (x, y) => ((Math.atan2(x, y) * 180) / Math.PI + 360) % 360;
if (!close(angleAt(w, h, 0), toDeg(-100, 20))) throw new Error('top left corner angle mismatch');
if (!close(angleAt(w, h, w / 2), 0)) throw new Error('top centre should be 0deg');
if (!close(angleAt(w, h, w + h + w / 2), 180)) throw new Error('bottom centre should be 180deg');
if (!close(angleAt(w, h, w), toDeg(100, 20))) throw new Error('top right corner angle mismatch');

// Sweep the perimeter: the angle must only ever advance, one full turn per lap.
let last = angleAt(w, h, 0);
let total = 0;
for (let i = 1; i <= 4000; i += 1) {
  const now = angleAt(w, h, (i / 4000) * L);
  const delta = ((now - last + 540) % 360) - 180;
  if (delta < 0) throw new Error('angle went backwards at step ' + i);
  total += delta;
  last = now;
}
if (Math.abs(total - 360) > 1e-6) throw new Error('one lap should advance 360deg, got ' + total);

console.log('ok angleAt: corners, monotonic sweep, single wrap per lap');
