const fs = require('fs');
const https = require('https');

const data = fs.readFileSync('./src/lib/data.ts', 'utf8');
const urls = [...new Set([...data.matchAll(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+[^"']*/g)].map(m => m[0]))];

const checkUrl = (url) => {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: 3000 }, (res) => {
      resolve({ url, status: res.statusCode, ok: res.statusCode < 400 });
      res.resume(); // consume response data to free up memory
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 'timeout', ok: false });
    });
    req.on('error', (err) => {
      resolve({ url, status: err.message, ok: false });
    });
  });
};

async function main() {
  for (const url of urls) {
    const res = await checkUrl(url);
    if (!res.ok) {
      console.log(`BROKEN: ${url} (Status: ${res.status})`);
    }
  }
  console.log('Done checking images.');
}
main();
