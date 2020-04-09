# Build client
FROM node:12-alpine AS clientBuilder
WORKDIR /usr/src/client
COPY client/package*.json ./
RUN npm ci --only=production
COPY client/ ./
RUN npm run build


# Build server
FROM node:12-alpine
WORKDIR /usr/src/app
COPY server/package*.json ./
RUN npm ci --only=production
COPY server/ ./
RUN npm run build

# copy client static assets
COPY --from=clientBuilder /usr/src/client/build ./dist/build

ENV PORT 3001
EXPOSE 3001/tcp
ENTRYPOINT [ "node", "dist/index.js" ]