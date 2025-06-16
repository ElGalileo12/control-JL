FROM node:20-alpine

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 8080
RUN node scripts/mongo-init.js || echo "Seeder falló o ya existen datos."

CMD ["sh", "-c", "node src/index.js & sleep 5 && npm run seed:mongo && wait"]

