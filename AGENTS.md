# DARA — AI Build Context

## What Dara Is

A two-sided AI styling marketplace for African women.
One surface. One session.
She asks "what should I wear?" and the answer pulls from:
- Her own wardrobe
- Kantamanto thrift sellers near her
- Emerging and luxury African fashion brands

The payer is the seller. The buyer is always free.

---

## Mission

Help African women dress intentionally by combining:
- AI styling intelligence
- Wardrobe organisation
- Thrift market discovery
- Emerging and luxury African fashion brands

---

## Stage

Stage 0 — Validation.
Current goal: collect waitlist signups and validate demand.
Do not build features not listed in this document.

---

## The Problem We Are Solving

### For the buyer
- She saves outfits on Pinterest. The inspiration never translates.
  Different body. Different wardrobe. Different context.
  The gap between mood board and real closet is never bridged.
- She scrolls Instagram and Facebook stores for specific pieces.
  The algorithm surfaces whoever has the most followers.
  The boutique with 200 followers and the perfect dress never appears.
  She scrolls 45 minutes and settles or gives up.
- She finds something in an Instagram story. It disappears in 24 hours.
  The seller's contact is lost in her camera roll. She never finds it.

### For the seller
- Their only storefront is an Instagram story that vanishes in 24 hours.
- Facebook and Instagram bury small sellers under high-follower accounts.
  Quality does not surface. Reach does.
- Unsold stock sits, gets exported, or gets burned.
  That is the real price of broken discovery.

---

## The Insight

She does not shop in categories.
She is one person dressing for one life.
Pinterest gives her the dream. Instagram buries the sellers.
Her wardrobe holds the pieces but not the logic.
Dara closes all three gaps in one session.

---

## Two Audiences — Both Must Feel Seen On This Page

### Buyers (free)
Black and African women, 22–40.
Accra. Lagos. Nairobi. London. New York.

What she gets:
- AI styling brain trained on her wardrobe, occasions, body, undertone
- Virtual style avatar — see outfits on a figure that looks like her
- Pinterest-to-closet bridge — saved inspiration matched to
  pieces she owns or can actually buy nearby
- Outfit suggestions pulling from her closet AND real sellers in one feed
- Small sellers she would never find by scrolling alone
- Group closet for aso-ebi coordination with family

### Sellers (pay success fee only)
Two types:

Kantamanto thrift sellers:
- Persistent storefront that never disappears after 24 hours
- Dara photographs and lists their inventory (managed-listing)
- Mobile-money-native payouts — MoMo, Telecel Cash
- Customers arrive already styled and self-qualified
- Visibility that does not depend on follower count

Emerging + luxury African fashion brands:
- Pieces shown inside real women's outfit suggestions
- Curated audience that already loves their aesthetic
- Discovery by taste, not algorithm reach
- No Meta ads. No monthly fees. Pay only when something sells.
- Diaspora customer reach

---

## Six Personas (design and copy decisions should be grounded in these)

1. Lagos/Accra Creative — 22–30, tech/media/design, owambe weekends,
   casual weekdays. Pain: camera roll full of fits she'll never recreate.
2. Diaspora Professional — 26–34, London/NYC/Toronto, mixes Western
   workwear with cultural pieces. Pain: Pinterest doesn't translate to
   her body, hair, or skin tone.
3. Returnee — 28–40, back in Accra/Lagos, wardrobe identity reset.
   Pain: two-climate, two-culture wardrobe with no organising logic.
4. Late Bloomer — 30+, wants intention without copying influencers.
5. Event Host / MotB — 40+, coordinates family aso-ebi.
   Pain: Pinterest links scattered across the family WhatsApp.
6. Student / Early Earner — 19–25, budget thrift, high IG fluency.
   Pain: wants to look intentional without spending.

Primary segments for this landing page:
- Lagos/Accra Creative (buyer anchor)
- Diaspora Professional (buyer secondary)
- Kantamanto thrift seller (seller anchor)
- Emerging African DTC brand (seller secondary)

---
## Color Palette (Tailwind token names)

| Token     | Hex     | Role                                      |
|-----------|---------|-------------------------------------------|
| ink       | #212130 | Primary dark background                   |
| ink-mid   | #3D3D55 | Secondary dark background                 |
| warm      | #FAF7F2 | Light section background + text on dark   |
| red       | #EF233C | CTAs only — never decorative              |
| crimson   | #D90429 | CTA hover state                           |
| muted     | #8D8FA8 | Secondary text on both dark and light     |

## Section backgrounds
Hero          → bg-ink
BuyerProblem  → bg-warm (LIGHT section)
HowItWorks    → bg-ink
SellerSection → bg-ink-mid
WaitlistSignup→ bg-red (full red)
SocialProof   → bg-warm (LIGHT section)
FAQ           → bg-ink
Footer        → bg-ink-mid

## Light section rules
On bg-warm sections (BuyerProblem, SocialProof):
- Headline text: text-ink (#212130)
- Body text: text-muted (#8D8FA8)
- Red label tags: text-red (stays red)
- Red line accent: bg-red (stays red)
- Borders: border-ink border-opacity-[0.08]
- Marquee text: text-ink opacity-20

On bg-ink / bg-ink-mid sections (everything else):
- Headline text: text-warm (#FAF7F2)
- Body text: text-muted (#8D8FA8)
- Same red labels and red lines
---

## Typography

- Headings: Playfair Display (serif) — CSS variable: --font-serif
- Body: Inter (sans-serif) — CSS variable: --font-sans
- Style: editorial, large, magazine-scale headings
- Ghost White on Space Cadet always
- Never use red for body text

---

## Design Direction

Overall feeling:
Fashion magazine meets modern interactive web.
Dark. Confident. Editorial. Not warm-earth-tones African cliché.
Think: a Lagos creative studio and a London fashion flat had a website.

References (take the named quality, avoid the named flaw):
- oevra.com — smooth motion, creative transitions (avoid: empty visuals)
- kajabi.com — dynamic moving imagery (avoid: generic SaaS)
- oddmuse.co.uk — fashion editorial layouts, clothing-first presentation
- shopindigo.com — motion, rich visual feeling, fashion atmosphere
- beehiiv.com — consistent visual language

Layout:
- Magazine-inspired. Not card-heavy.
- Full-bleed photography sections
- Asymmetric editorial grids where earned
- Mobile-first. Design every section at 390px first.

Photography:
- Real women. Real Accra/Lagos/diaspora settings.
- Thrift and luxury shown together — never separate worlds
- Natural light preferred
- Skin tones, hair, cultural occasions are not edge cases

---

## Motion Rules (Framer Motion only)

- Entrance animations: fade-up on scroll, 0.4–0.6s
- Hero: one strong animated moment on load (text stagger or image reveal)
- No infinite looping animations
- No excessive parallax
- No movement without purpose
- Interactive motion only on hover and scroll triggers

---

## Page Structure

1. Hero
   Headline: "Dress with intention."
   Sub: "Discover outfits from your wardrobe and the fashion around you."
   CTA: "Join the waitlist →" (red button)
   Visual: animated editorial collage

2. Buyer Problem
   Headline: "You have a full wardrobe. You still have nothing to wear."
   Three beats:
   - The Pinterest gap: inspiration that never translates to her closet
   - The algorithm problem: scrolling Instagram/Facebook, only seeing
     high-follower accounts, never the small sellers with real taste
   - The disappearing inventory: story gone in 24 hours,
     contact lost in camera roll

3. How Dara Works (buyer)
   Headline: "Your inspiration. Your wardrobe. The market around you."
   Four steps:
   - Upload your wardrobe
   - Bridge the inspiration gap (Pinterest boards matched to real pieces)
   - Meet your style avatar (virtual figure, her body/skin tone/hair)
   - Discover sellers the algorithm hides

4. Seller Section
   Headline: "Your best pieces deserve more than 24 hours
             and more than the algorithm allows."
   Split: thrift sellers / brands (stacked on mobile)
   Separate CTA: "List your pieces →"

5. Waitlist
   Headline: "Be first."
   Sub: "Launching in Accra. We'll reach out personally."
   Single email input + red CTA button
   No extra fields.

6. Social Proof
   Placeholder quotes from personas until real interviews complete.
   Label clearly as "Early testers say:" not fake testimonials.

7. FAQ
   - Is this free for buyers? Yes. Always.
   - How do sellers get paid? Mobile money. Within 48 hours.
   - Do I need to list my own items? No. We do it for you.
   - Where is Dara launching first? Accra, Ghana.
   - When does it launch? Soon. Join the waitlist to hear first.

8. Footer
   Logo + tagline: "Dress with intention. From your wardrobe,
   your market, and your people."
   Links: Instagram, Twitter/X
   Email: hello@weara.co
   © 2026 Dara

---

## Inspiration Images

Location: ./inspiration/
Each subfolder has a notes.md with direction. Read notes before building.

### hero/
- Shop_Web_7.png — floating product collage hero. Items at different
  depths around a central CTA. Use for hero animation energy.
- beehiiv.png — consistent section rhythm and visual language reference.
  Use for how sections flow and separate from each other.

### virtual-avatar/
- Synthesia_web_65.png — rendered digital person, realistic not illustrated.
  Reference for the style avatar UI in How It Works Step 3.

### how-it-works/
- See notes.md — four steps, staggered scroll entrance

### motion/
- See notes.md — subtle float, scroll reveal, no infinite loops

### problem/
- See notes.md — three beats, editorial text-heavy, dark background

### typography/
- See notes.md — Playfair Display + Inter, magazine scale
---

## File Structure

app/
  page.tsx
  layout.tsx
  globals.css

components/
  Hero.tsx
  BuyerProblem.tsx
  HowItWorks.tsx
  SellerSection.tsx
  WaitlistSignup.tsx
  SocialProof.tsx
  FAQ.tsx
  Footer.tsx

lib/
  constants.ts        ← all copy strings, palette tokens, image paths

context/              ← your strategy docs, do not modify
prompts/              ← your build prompts, do not modify
public/images/inspo/  ← mood board images

---

## Copy Rules

Voice: warm, direct, editorial. Like a stylish friend who has
also read a product spec. Never fluffy. Never corporate.

Write to a real woman — not a persona document.
She is in Accra, Lagos, or London.
She thrifts on Saturday and saves for a luxury piece on payday.
She doesn't need to be talked down to or hyped up.
She needs the right outfit, right now.

Always reference at least one of these buyer frustrations per section:
1. Pinterest gap — inspiration that doesn't translate to her wardrobe
2. Algorithm burial — scrolling and only seeing high-follower accounts
3. Disappearing inventory — finding the piece, losing the story

Always reference at least one seller frustration per seller section:
1. The 24-hour storefront — Instagram stories as the only shop
2. Algorithmic invisibility — buried under accounts with more followers

---

## Hard Rules

- Mobile first — design at 390px first, scale up
- Every CTA drives waitlist (buyer) or seller signup
- No gradient blobs
- No glassmorphism as decoration
- No SaaS dashboard UI
- No generic startup language
- No advertising language — ever
- No features not listed in this document
- No warm-earth-tones African cliché
- Never describe bold print or color as "vibrant"
- Kantamanto, aso-ebi, owambe are not edge cases —
  write them into copy naturally
- Red (#EF233C) on CTAs only — never decorative
- All copy strings live in lib/constants.ts
- Production-ready code only
- Every component in its own file


## Tailwind Setup

This project uses Next.js 15 with Tailwind CSS v4.
There is NO tailwind.config.ts file.
Colors and fonts are defined as CSS variables in app/globals.css
using the @theme directive.

Use Tailwind utility classes like this:
- bg-space, text-ghost, text-cadet, bg-red, bg-crimson
- font-serif, font-sans

Never reference tailwind.config.ts — it does not exist.
Never use inline styles for colors.
All tokens are in app/globals.css under @theme.
