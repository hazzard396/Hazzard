# ==============================
# 1️⃣ Builder Stage
# ==============================
FROM node:20-slim AS builder

WORKDIR /app

# Prevent Next telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies (deterministic)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build


# ==============================
# 2️⃣ Production Runner Stage
# ==============================
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user (security best practice)
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs

# Copy standalone output only
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Change ownership
RUN chown -R nextjs:nextjs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
