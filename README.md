# OSRS Money Board

**Live Grand Exchange intelligence for Old School RuneScape** — flip margins, market momentum, money-making methods, boss loot values, item-set & decanting arbitrage, and your own trade performance. Every number is priced live from the [OSRS Wiki real-time prices API](https://prices.runescape.wiki).

**▶ [Open the app](https://rgthomsen18-dev.github.io/OSRS-Money-Board-/)** — no account, no ads, no install. Add to Home Screen on mobile for the full app experience.

## What it does

- **Markets** — every tradeable item with live prices, 24h volume, change, momentum (5m/1h/24h), price-trend charts, and configurable price alerts
- **Flips** — margin scanner ranked by *profit per 4h buy-limit cycle* (not raw margin), with ROI, fill-rate warnings, and thin-market flags
- **Sets** — item-set arbitrage (26 sets: Barrows, metal, dragon, GWD/raids) and potion-decanting margins, both directions, live
- **Board** — 320+ money-making and training methods across every skill, ranked by live gp/hr, gated to *your* levels, filterable to what *your bank* can afford
- **Bosses** — 32 bosses with expected gp/kill from live prices, honest untradeable handling, and conversion-valued components
- **Tracker & Holdings** — import your Flipping Utilities history; open GE offers mark to market with live unrealised P/L
- **Plan & Session** — XP-aware goal routing and capital-aware session planning, synced from WiseOldMan

## Principles

- **Recipes are data; prices are live.** Nothing hardcodes gp/hr. Rates are labeled conservative floors.
- **Your data stays yours.** Profile, trades, bank, and alerts live in your browser's localStorage — nothing is uploaded anywhere. A device-sync tool moves state between your own devices.
- **Honest degradation.** Every data source can fail independently; the app says so instead of showing wrong numbers. Built-in diagnostics validate all item data against the live GE mapping.

## Data sources

[OSRS Wiki real-time prices](https://prices.runescape.wiki) (mapping, latest, 24h, volumes, 5m, 1h, timeseries) · [WiseOldMan](https://wiseoldman.net) for player stats · [osrsreboxed-db](https://github.com/lou55/osrsreboxed-db) for item icons.

---

*A fan-made tool. Not affiliated with Jagex Ltd. Old School RuneScape is a trademark of Jagex.*
