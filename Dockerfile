FROM node:19.3.0-alpine

# Create app directory
WORKDIR /frontend

COPY . .

RUN npm i

EXPOSE 3000

ENV PUBLIC_URL=http://localhost:3000

# RUN npm run build

# CMD ["npm", "run", "start"]