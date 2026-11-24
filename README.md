# The Funniest Out-of-Office

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/hermansto/one-line-funniest-ooo/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/hermansto/one-line-funniest-ooo/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

One line, max 140 characters — the funniest out-of-office auto-reply.

> I'm away from my desk, recharging my human battery. Your email has been filed under 'later'. I'll reply when the Wi-Fi and I agree.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/funniest-ooo-out node main.ts
```

`main.ts` writes exactly that line to `entry.txt` in the output directory, with no trailing newline, and verifies it by reading it back.
