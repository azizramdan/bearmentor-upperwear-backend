FROM oven/bun:alpine AS builder

ENV PORT=3000

WORKDIR /home/bun/app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile --production

FROM oven/bun:alpine AS runner

WORKDIR /home/bun/app

COPY . .
COPY --from=builder /home/bun/app/node_modules ./node_modules

ENTRYPOINT ["bun", "run", "start"]
