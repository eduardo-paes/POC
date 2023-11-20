FROM node

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

ENV VITE_REACT_APP_API_URL="http://localhost:4000/sample"

EXPOSE 3000

CMD ["npm", "run", "dev"]