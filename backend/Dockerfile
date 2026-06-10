# Stage 1 - Dependencies

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Stage 2 - Production

FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app .

RUN npm prune --omit=dev

EXPOSE 5001

CMD ["npm", "start"]