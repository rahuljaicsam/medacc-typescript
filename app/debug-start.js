console.log('Script started');
import { createServer } from 'vite';
console.log('Vite imported');

async function start() {
  console.log('Starting server...');
  try {
    const server = await createServer({
      configFile: './vite.config.ts',
      root: process.cwd(),
      server: {
        port: 5173
      }
    });
    console.log('Server created');
    await server.listen();
    console.log('Server listening');
    server.printUrls();
    // Keep the process alive
    console.log('Waiting...');
    await new Promise(() => {});
  } catch (e) {
    console.error('Error starting server:', e);
  }
}

start();
