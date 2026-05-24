# Weara Landing Page — Build Prompt v2

---

Read before building:
./context/design-direction.md
./context/project-overview.md
./context/website-structure.md
./context/website-goal.md
./inspiration/**

---

## What you are building

An editorial fashion landing page for Weara.
Two audiences: buyers (African women, 22–40) and sellers
(Kantamanto thrift sellers + emerging African fashion brands).

Each audience must feel seen within their section.
The page converts both to a single action: join the waitlist.

---

## Stack

- Next.js 14 App Router
- Tailwind CSS (use design tokens below)
- Framer Motion
- next/image for all photography
- next/font for typography

---

## Design tokens (add to tailwind.config.ts)

colors:
  space:     #2B2D42   ← primary background
  cadet:     #8D99AE   ← secondary text
  ghost:     #EDF2F4   ← primary text on dark
  red:       #EF233C   ← CTA only
  crimson:   #D90429   ← CTA hover

fonts:
  serif: Playfair Display (headings)
  sans:  Inter (body)

---

## Files to create

app/
  page.tsx
  layout.tsx

components/
  Hero.tsx
  BuyerProblem.tsx
  HowItWorks.tsx
  SellerSection.tsx
  WaitlistSignup.tsx
  FAQ.tsx
  Footer.tsx

lib/
  constants.ts      ← all copy strings and palette tokens

---

## Section-by-section requirements

### Hero
- Full-bleed dark background (#2B2D42)
- Large editorial serif headline: "Dress with intention."
- Subtext in Ghost White: "Discover outfits from your wardrobe
  and the fashion around you."
- CTA button in Imperial Red (#EF233C): "Join the waitlist →"
- Animated editorial collage using inspo images
- Staggered text entrance with Framer Motion

### Buyer Problem
- Headline: "You have a full wardrobe. You still have nothing to wear."
- Three pain points as editorial text blocks, not bullet points
- Reference the camera roll habit, disappearing Instagram stories,
  the thrift + luxury split

### How Weara Works (buyer)
- Three steps: Upload → Style Avatar → Discover
- Style avatar step: emphasise the virtual figure styled to
  her body, skin tone, and hair — see outfits on YOU
- Staggered entrance animation, one step revealed at a time
- Use inspo imagery from ./public/images/inspo/sections/

### Seller Section
- Split layout: thrift sellers left, brands right
  (stacked on mobile)
- Headline: "Your best pieces deserve more than 24 hours."
- Thrift seller promise: managed listing, persistent storefront,
  MoMo payouts, customers arrive ready to buy
- Brand promise: styled placement, curated audience,
  pay only when something sells
- Separate CTA: "List your pieces →" in red

### Waitlist
- Full-bleed section
- Headline: "Be first."
- Single email input + red submit button
- Subtext: "Launching in Accra. We'll reach out personally."
- No extra fields. Lowest friction.

### FAQ
- Accordion component
- 5 questions (see website-structure.md)
- Ghost White text on Space Cadet background

### Footer
- Logo + tagline
- Social links
- hello@weara.co

---

## Motion rules

- Framer Motion only
- Entrance: fade-up, staggered, 0.4–0.6s
- Hero: one strong animated moment on load
- No infinite loops
- No excessive parallax
- No movement without purpose

---

## Copy rules

- Warm, direct, editorial voice
- No startup jargon
- Accra, Lagos, Kantamanto, aso-ebi are not edge cases —
  write them into the copy naturally
- Never describe bold print or color as "vibrant"
- Write to a real woman, not a persona document

---

## Do not

- Use gradient blobs
- Use glassmorphism decoratively
- Build a dashboard UI
- Use generic SaaS layout
- Add advertising language
- Build features not in this spec
- Use red anywhere except CTAs and key highlights

---

## Return

Production-ready code.
Every component in its own file.
All copy strings in lib/constants.ts.

### The three buyer frustrations — always reference at least one:
1. Pinterest gap — inspiration that never translates to her actual wardrobe
2. Algorithm burial — scrolling Instagram/Facebook and only seeing
   high-follower accounts, never the small sellers with real taste
3. Disappearing inventory — finding the perfect piece in a story
   and losing it 24 hours later

### The two seller frustrations — always reference at least one:
1. The 24-hour storefront — Instagram stories as the only shop
2. Algorithmic invisibility — buried under accounts with more followers,
   not more quality

### The Weara answer to both:
- For buyers: inspiration matched to reality, small sellers surfaced,
  virtual avatar so she sees it on herself first
- For sellers: persistent storefront, discovery by taste not follower count,
  MoMo payouts, customers who already want what they sell

These are not talking points. They are the lived experience
of the woman and the seller we are building for.
Write from inside that experience, not above it.
