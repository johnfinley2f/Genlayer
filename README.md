# GenLayer Orbit · Consensus Monitor

A loading-state component for GenLayer dApps where the animation *is* the protocol behavior: each orbiting node represents a validator, and the center only resolves once enough of them agree — mirroring how GenLayer's Intelligent Contracts actually reach consensus.

## Why this resubmission is different

The original **GenLayer Orbital Spinner** submission was rejected because it was a standalone visual asset with no connection to real GenLayer-specific behavior. This version keeps the same visual language but wires it to an actual protocol lifecycle:

**Broadcast → Validator review → Consensus check → Finalized**

Each orbiting node individually "votes," the round only passes at quorum (60%+), and the result renders a real per-validator vote breakdown — not just a spinner that stops after a fixed timer.

## Live Demo

Open `index.html` in any browser — no build step, no dependencies.

## Features

- EVM address format validation (`0x` + 40 hex chars), checked client-side
- Network selector: Bradbury Testnet, Asimov Mainnet, Local Studio
- Simulated multi-validator consensus round with live vote tally
- Recent-rounds history log
- Standalone copy-paste spinner snippet for reuse in other dApps
- Fully responsive, dark theme, respects `prefers-reduced-motion`

## Safety

This is a **demo/simulation only**. It never calls `eth_sendTransaction`, never requests a wallet signature, never reads a real chain, and never asks for a seed phrase or private key. All "validator votes" are generated locally in the browser for illustration.

## Run Locally

```
open index.html
```

## Files

| File | Purpose |
|---|---|
| `index.html` | Full component + interactive demo |
| `README.md` | This file |
