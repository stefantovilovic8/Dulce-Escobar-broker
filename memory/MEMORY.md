# Project Memory: Dulce Escobar Broker

## Stack
- Next.js 15.3.6 with Turbopack (`next dev --turbopack`)
- React 19
- Tailwind CSS v4
- TypeScript
- shadcn/ui components (full suite of Radix UI primitives)
- Package manager: **bun**

## Key Files
- `next.config.ts` — uses `orchids-visual-edits` loader for Turbopack
- `.env.local` — contains `RESEND_API_KEY` (email sending via Resend)
- `.orchids/orchids.json` — startup: `bun install; bun dev`

## Notes
- `resend` package is installed for email functionality
- Port: 3000
