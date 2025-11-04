# Next.js + Docker + Cloudflare — Portfolio Deployment Guide

A clean and secure setup for deploying a **Next.js** portfolio using **Docker**, connected to a **Cloudflare-managed domain**.  
This guide is based on a Windows environment and focuses on containerized deployment with your Cloudflare DNS handling the public domain.

---

## 🚀 Overview

This project demonstrates how to:
- Build and containerize a Next.js 14 application using Docker.
- Deploy and access it through your Cloudflare-registered domain.
- Use Docker Compose for simple local or remote deployment management.
  
---

## 🧱 Project Structure

├── pages/ # Next.js pages
├── public/ # Static assets
├── cloudflared/ # (optional, not used if you connect directly through Cloudflare DNS)
├── Dockerfile # Multi-stage Docker build
├── compose.yaml # Docker Compose configuration
├── next.config.js # Next.js settings
├── package.json # Dependencies and scripts
├── package-lock.json
├── .gitignore
├── .dockerignore
└── README.md

---

## ⚙️ Prerequisites

Before starting, make sure you have the following installed:

- [Node.js 18+](https://nodejs.org/)
- [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
- A [Cloudflare account](https://www.cloudflare.com/) (for domain and DNS)
- [PowerShell](https://learn.microsoft.com/en-us/powershell/) (recommended for commands below)
  
---

## 🧰 Environment Variables

This project does not require a `.env` file by default.  
All necessary configuration values are defined within the Docker and Cloudflare setup.  
If you prefer to use one later for convenience, see the `.env.example` section in this guide.

ini
# .env.example
NEXT_PUBLIC_SITE_URL=https://example.com
CLOUDFLARE_TUNNEL_ID=00000000-0000-0000-0000-000000000000

---

## Build and Run with Docker

Run these commands either in PowerShell or the Docker terminal, but make sure when you're executing your code, you are in the right folder location.

1. Build the image
docker build -t nextjs-docker-cloudflare-guide .

2. Run the container
docker run -p 3000:3000 nextjs-docker-cloudflare-guide

Then open your browser and go to:
http://localhost:3000

If you’re hosting remotely (e.g., a VPS or cloud server), replace localhost with your server’s public IP.

---

## Using Docker Compose

If you prefer Compose for easier management:
docker compose up --build

To stop the containers:
docker compose down

---

## Connecting Your Cloudflare Domain

1. Go to your Cloudflare Dashboard
2. Select your domain.
3. Open DNS → Records.
4. Add an A record or CNAME record pointing to your server’s public IP or hostname where Docker is running.
5. Wait for DNS propagation (usually a few minutes).
6. Once done, your site will be available at: https://yourdomain.com

---

## 🧹 Security Practices

- .next, node_modules, and build artifacts are ignored in .gitignore and .dockerignore.
- Docker images don’t include sensitive files.
- If you later use .env or cloudflared, keep them excluded from Git (.gitignore already handles this).

---

## 📄 License

This project is licensed under the MIT License — see the LICENSE
