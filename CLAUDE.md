# CLAUDE.md â Black Tie Spa & Barbershop Redesign

This file is read automatically by Claude Code at the start of every session.
Follow all instructions here before doing anything else.

---

## Project Overview

A static front-end redesign concept for The Black Tie Spa & Barbershop
(Norwell, MA â blacktiespa.com). Built to demo a modern site refresh as
a potential paid project for the business owner.

**Live site:** https://msavoy81.github.io/Black-tie-redesign/
**Repo:** https://github.com/msavoy81/Black-tie-redesign

---

## File Structure

```
black-tie-redesign/
âââ index.html       # All page markup and content
âââ style.css        # All styling
âââ script.js        # Nav scroll, mobile menu, reveal animations
âââ README.md        # Project documentation
âââ CLAUDE.md        # This file â Claude Code instructions
```

No frameworks. No build tools. No dependencies. Plain HTML, CSS, and JS only.
Do not introduce npm, node_modules, or any build step without explicit approval.

---

## Design System

**Colors:**
- Background: `#0b0b0c` (near black)
- Charcoal: `#1a1714`
- Gold (primary accent): `#c9a35a`
- Gold light: `#e2c283`
- Cream (text): `#f3ede0`
- Gray (secondary text): `#a89e8e`
- Border: `rgba(201,163,90,0.18)`

**Typography:**
- Headings: Georgia, serif
- Body: system-ui / -apple-system sans-serif

**Tone:** Dark, upscale, vintage barbershop meets modern spa. Every design
decision should feel like it belongs in this palette. Do not introduce
bright colors, white backgrounds, or modern flat design elements.

---

## Page Sections (in order)

1. Fixed navigation with logo (links to `#top`)
2. Hero â full viewport, background image, Book Now CTA
3. Barber stripe divider
4. Credibility bar â awards and years in business
5. Services â clickable cards linking to blacktiespa.com/menu-of-services
6. Our Story â legacy copy with photo
7. Gallery â 8-photo grid linking to Instagram
8. Client Reviews â testimonials (currently placeholders)
9. Visit â hours, address, map embed, booking card
10. Contact form (Formspree â form ID still needed)
11. Footer â social links, mailing list signup

---

## Standing Rules

1. **Always run a status check first.** Before making any changes, report:
   - Output of `git status`
   - Last commit message (`git log --oneline -1`)
   - List of current files in the directory
   - High-level summary of current index.html sections

2. **Never commit without explicit approval.** Always end with
   "Ready to commit â want me to proceed?" and wait for confirmation.

3. **Show diffs before applying destructive changes.** Any removal of
   a section, deletion of a file, or major restructure must be shown
   first and approved before execution.

4. **Do not touch files outside this folder.** This is a single-project
   workspace. If anything references files outside
   `/Users/mikesavoy/Documents/Black-tie-redesign/`, stop and flag it.

5. **One task at a time.** Break multi-part prompts into sequential
   steps, confirming each before moving to the next.

6. **No new files without approval.** Do not create files that aren't
   `index.html`, `style.css`, `script.js`, `README.md`, or `CLAUDE.md`
   without being explicitly asked.

---

## Known Placeholders (still need real data)

- **Formspree form ID** â contact form has `YOUR_FORM_ID` placeholder,
  needs a real endpoint from formspree.io
- **Instagram embed** â gallery section has a styled placeholder,
  needs a real embed snippet from behold.so or elfsight.com
- **Client reviews** â three testimonials are sample placeholders,
  need real client quotes before going live

---

## External Links in Use

- Booking: `https://www.blacktiespa.com/https/loginmeevocom/blacktiespa/oblocationid106612`
- Full menu: `https://www.blacktiespa.com/menu-of-services`
- Gift cards: `https://www.blacktiespa.com/gift`
- Mailing list: `https://app.e2ma.net/app2/audience/signup/1950540/1936276/`
- Instagram: `http://www.instagram.com/blacktiespabarbershop`
- Facebook: `http://www.facebook.com/The-Black-Tie-Spa-and-Barbershop-124136260968120`
- Google Maps: `https://www.google.com/maps/search/?api=1&query=62+Accord+Park+Dr+Norwell+MA+02061`

---

## Business Info

- **Name:** The Black Tie Spa and Barbershop
- **Address:** 62 Accord Park Drive, Norwell, MA 02061
- **Phone:** (781) 871-4772
- **Hours:** TueâThu 10amâ9pm, Fri 10amâ7pm, Sat 9amâ3:30pm, SunâMon Closed
- **Awards:** Men's Health Top 30 Barbershops in America, Expertise Top 28 Boston Barbershops
- **Est.:** 2005
