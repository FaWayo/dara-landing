# Motion Direction

## Use
- Subtle floating on hero cards (slow, gentle, non-looping drift on load)
- Image transitions between sections (fade, not slide)
- Reveal on scroll (fade-up, 0.4–0.6s, staggered per element)
- Hover states on CTA buttons (scale 1.02, color shift to crimson)

## Avoid
- Constant movement — nothing should move forever
- Heavy parallax — sections should not scroll at different speeds
- Exhausting interactions — no element should demand attention
- Entrance animations that take longer than 0.6s

## Framer Motion specifics
- useInView for scroll triggers
- initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
- transition={{ duration: 0.5, ease: "easeOut" }}
- Stagger children: staggerChildren: 0.12
