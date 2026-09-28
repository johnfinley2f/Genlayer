# GenLayer Portal - Loading State

A clean loading state UI for the GenLayer Portal with the official GenLayer logo animation, built in pure HTML/CSS.

## Live Demo

Open `genlayer-spinner.html` directly in any browser — no server needed.

## What it does

1. Full screen black loading overlay appears on page load
2. Official GenLayer logo pulses with a smooth animation
3. "Loading Portal" text with animated dots
4. Smooth fade out after 2.8 seconds
5. Portal content fades in — navbar, stats, recent transactions

## Preview

Loading state → Black screen, GenLayer logo pulsing, animated dots

Portal state → Navbar with Connect Wallet, live stats (Transactions / Validators / Contracts), recent transaction list

## Tech

- Pure HTML + CSS — zero dependencies
- CSS animations only — no JavaScript libraries
- Single self-contained file
- Responsive, works on mobile and desktop
- Respects prefers-reduced-motion

## Customize

Change loading duration (default 2.8s):
```js
setTimeout(() => { ... }, 2800); // change 2800 to any ms value
```