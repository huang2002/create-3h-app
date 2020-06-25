const { App, Router, createStaticHandler } = require('herver');
const { join } = require('path');

const PORT = 8080;

const app = new App();
const router = new Router();

router.get(/^\/node_modules/, createStaticHandler(__dirname));

app.use(router.handler)
    .use(createStaticHandler(join(__dirname, 'src')))
    .use(createStaticHandler(join(__dirname, 'test')))
    .use(createStaticHandler(join(__dirname, 'public')));

app.listen(PORT);

console.log(`Dev server started at localhost:${PORT}`);
console.log('(Hit Ctrl-C to stop)');
