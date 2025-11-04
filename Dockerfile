# -------- Build stage --------
FROM node:20-alpine AS builder
WORKDIR /app

# Helpful for next/sharp on Alpine
RUN apk add --no-cache libc6-compat

# Copy only manifests first for better caching
COPY package*.json ./

# Use ci if lockfile exists; otherwise install (omit dev deps)
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

# Copy the rest and build
COPY . .
RUN npm run build

# -------- Runtime stage --------
FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Copy the minimal standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Run as non-root user
RUN addgroup -g 1001 nodegrp && adduser -D -u 1001 -G nodegrp nodeusr
USER 1001

ENV NODE_ENV=production \
    PORT=3000

EXPOSE 3000
CMD ["node", "server.js"]
