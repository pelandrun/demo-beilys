# TEST bailys wp
Es un ejemplo de implementación del beilys, en este caso solo responde a la palabra ping con pong, citando el mensaje. Cualquier otro mensaje lo guarda en queue de redis. 
~~~
mkdir bot
cd bot
git clone https://github.com/pelandrun/demo-beilys.git
cp demo-beilys/compose.yml .
cp demo-beilys/.env.example demo-beilys/.env
docker compose up -d
docker compose exec node bash
cd /app
npm install
npm start
~~~

