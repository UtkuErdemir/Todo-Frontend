const path = require('path');
const Pact = require('@pact-foundation/pact').Pact;

global.provider = new Pact({
    cors: true,
    port: 3030,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    loglevel: 'debug',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'update',
    consumer: 'todo-app-consumer',
    provider: 'todo-app-provider',
    host: '127.0.0.1'
});