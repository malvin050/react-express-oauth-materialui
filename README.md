# build docker image
docker build -t mdenunez/react-express-oauth-materialui:latest .

# docker run locally with environment files
docker run -p 3001:3001 --env-file ./server/.env --env NODE_ENV=production mdenunez/react-express-oauth-materialui:latest