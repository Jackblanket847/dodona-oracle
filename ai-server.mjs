// ai-server.mjs
import { createServer } from 'node:http';
import { parse } from 'node:url';

// Replace with OpenAI or local model call later
function getAIResponse(prompt) {
  return `You asked: "${prompt}". I'm still learning!`;
}

const server = createServer((req, res) => {
  const { pathname, query } = parse(req.url, true);

  if (pathname === '/ai' && query.prompt) {
    const answer = getAIResponse(query.prompt);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ prompt: query.prompt, answer }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('🧠 AI Server listening on http://127.0.0.1:3000');
});