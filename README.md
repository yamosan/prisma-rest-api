# prisma-rest-api

## セットアップ
```shell
echo 'DATABASE_URL="postgresql://postgres:password@localhost:5433/prisma-rest-api"' > .env

docker-compose up -d

npm i

npm run prisma:dev
npm run dev
```

## テスト
```shell
npm run test
```
