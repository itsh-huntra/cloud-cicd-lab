const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');
 
test('GET /health ต้องตอบ status ok', async (t) => {
  const server = app.listen(0);
  t.after(() => server.close());
  const { port } = server.address();
 
  const res = await fetch(`http://127.0.0.1:${port}/health`);
  assert.strictEqual(res.status, 200);
 
  const body = await res.json();
  assert.strictEqual(body.status, 'ok');
});
 
test('GET / ต้องมีข้อความและเวอร์ชัน', async (t) => {
  const server = app.listen(0);
  t.after(() => server.close());
  const { port } = server.address();
 
  const res = await fetch(`http://127.0.0.1:${port}/`);
  const body = await res.json();
  assert.ok(body.message);
  assert.ok(body.version);
});
