# TEST bailys wp
npm install\
npm start
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
