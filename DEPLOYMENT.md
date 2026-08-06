# Vanara Production Site Deployment

This repository is the source of truth for the public Vanara Retreat website.

## Production Source

- GitHub `main` is the production source of truth.
- Cloudflare Pages project: `vanara-production-site`.
- Production domains: `vanararetreat.com` and `www.vanararetreat.com`.
- Cloudflare Pages deploys automatically from the Git Provider when `main` is pushed.

Do not use Cloudflare dashboard edits or direct asset edits as the source of truth. Any production change should be represented in Git history.

## Normal Flow

1. Edit the static site files locally.
2. Verify locally with the lightest suitable check for the change.
3. Commit the exact intended files.
4. Push `main` to `origin`.
5. Let Cloudflare Pages deploy automatically from Git.
6. Smoke the live site.

This site currently has no build step. Do not add a package or build pipeline unless the site genuinely needs one.

## Deployment Checks

On Windows, check Cloudflare Pages deployments with:

```powershell
npx.cmd wrangler pages deployment list --project-name vanara-production-site
```

Use this for visibility after pushing `main`. The Git-triggered Cloudflare Pages deployment remains the normal production path.

## Smoke Checklist

After deployment, check:

- Homepage loads at `https://vanararetreat.com/`.
- Footer renders normally on pages that use `/components/footer.html`.
- `/extranet` returns a temporary redirect to Vanara Central.
- `/extranet/` returns the same temporary redirect.
- Mobile and desktop footer layout remain balanced.

For the extranet redirect, verify that the response is `302` and includes:

```text
X-Robots-Tag: noindex, nofollow
```

## Emergency Direct Deploys

Wrangler direct deploys are emergency-only. They can bypass Git history, so use them only when Git Provider deploys are unavailable and record the reason afterward.
