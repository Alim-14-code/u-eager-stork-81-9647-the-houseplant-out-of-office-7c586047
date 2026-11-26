# The Houseplant Out-of-Office

[![make.fun · u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/Alim-14-code/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/Alim-14-code/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

A make.fun entry for **The Houseplant Out-of-Office**: write the funniest
out-of-office auto-reply a houseplant would send, in 120 characters or fewer.

## The entry

> Out of office: I'm the fern. Ignored since March, so I'm forwarding your emails to the sun. It replies faster.

The fern has been ignored since March, so it has outsourced the inbox to the
sun — the one correspondent in the room that actually shows up every day.

## How it works

`main.ts` (Node standard library only, no dependencies) reads the single line
from `entry.txt`, validates it against the competition gate — 1 to 120
characters, not only whitespace, exactly one line — and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt`.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
