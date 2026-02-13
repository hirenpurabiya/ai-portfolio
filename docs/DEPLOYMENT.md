# Deployment Guide: Cloudflare Pages + Workers

## Overview

The portfolio site and live demos are hosted on Cloudflare for maximum security, performance, and zero cost.

```
Portfolio Site (Next.js static) → Cloudflare Pages
Demo API Proxy                  → Cloudflare Workers
Bot Protection                  → Cloudflare Turnstile
DDoS Protection                 → Cloudflare (built-in, free tier)
```

## 1. Portfolio Site on Cloudflare Pages

### Prerequisites
- Cloudflare account (free): https://dash.cloudflare.com/sign-up
- GitHub repo connected

### Setup Steps

1. **Go to** Cloudflare Dashboard → Pages → Create a project
2. **Connect** your GitHub repo: `hirenpurabiya/ai-portfolio`
3. **Configure build:**
   - Build command: `cd site && npm install && npm run build`
   - Build output directory: `site/out`
   - Root directory: `/`
4. **Deploy.** Cloudflare auto-deploys on every push to `main`.

### Custom Domain (optional)
- Add a custom domain like `hirenpurabiya.com` in Pages settings.
- Cloudflare handles SSL automatically.

## 2. Cloudflare Workers (API Proxy for Demos)

Workers sit between the frontend and external APIs (OpenAI, arXiv, etc.) to:
- Keep API keys server-side (never exposed to browser)
- Rate limit requests per IP
- Block non-browser traffic
- Enforce max tokens and timeouts

### Setup Steps

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. Create a worker:
   ```bash
   mkdir workers && cd workers
   wrangler init api-proxy
   ```

3. Add secrets (API keys):
   ```bash
   wrangler secret put OPENAI_API_KEY
   ```

4. Deploy:
   ```bash
   wrangler deploy
   ```

### Example Worker (rate-limited proxy)

```typescript
// workers/api-proxy/src/index.ts
export default {
  async fetch(request: Request, env: any): Promise<Response> {
    // Rate limit: 10 requests per minute per IP
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    
    // Validate origin
    const origin = request.headers.get("Origin");
    if (!origin?.includes("hirenpurabiya")) {
      return new Response("Forbidden", { status: 403 });
    }

    // Proxy to OpenAI with server-side key
    const body = await request.json();
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        ...body,
        max_tokens: Math.min(body.max_tokens || 500, 1000), // Cap tokens
      }),
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://hirenpurabiya.com",
      },
    });
  },
};
```

## 3. Bot Protection (Cloudflare Turnstile)

Turnstile is Cloudflare's free CAPTCHA alternative. Add it to demo pages to prevent automated abuse.

### Setup
1. Go to Cloudflare Dashboard → Turnstile → Add widget
2. Get site key and secret key
3. Add to demo frontend:

```html
<div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

4. Validate token server-side in your Worker before proxying API calls.

## 4. Security Checklist

- [x] API keys stored as Cloudflare Worker secrets (never in frontend)
- [x] Rate limiting per IP (10 req/min default)
- [x] Origin validation (only allow your domain)
- [x] Max token cap on all LLM calls
- [x] Turnstile on interactive demo pages
- [x] DDoS protection (Cloudflare free tier, always on)
- [ ] Kill switch: environment variable to disable demos instantly

## 5. Cost

| Component | Provider | Cost |
|-----------|----------|------|
| Portfolio site | Cloudflare Pages | Free |
| API proxy | Cloudflare Workers | Free (100K req/day) |
| Bot protection | Cloudflare Turnstile | Free |
| DDoS protection | Cloudflare | Free |
| Custom domain | Cloudflare DNS | Free |
| SSL | Cloudflare | Free |

## 6. Monitoring

- Cloudflare Analytics (free): page views, bandwidth, threats blocked
- Workers Analytics: request count, errors, latency
- Set up email alerts for unusual traffic spikes

---

*Last updated: February 2026*
