require('dotenv').config()
const redis = require('redis');
const publisher = redis.createClient({
    socket: {
        host: process.env.REDIS_SERVER
    }
});

await client.connect();
async () => {
    await publisher.connect();
}
// (async () => {
//   try {
//     await publisher.on('connect', () => console.log('::> Redis Client Connected'));
//   } catch (error) {
//     console.log("Error de conexion REDIS");
//     process.exit();
//   }
// })()

publisher.on('connect', () => console.log('::> Redis Client Connected'));

const subscriber = publisher.duplicate();
//Si redis falla aborto la conexion

publisher.on('error', (err) => {
    console.log('<:: Redis Client Error', err)
    process.exit();
});
publisher.on('connect', () => console.log('::> Redis Client Connected'));
console.log("LISTO")