# Funniest Excuse an Agent Gives for a Missed Deadline

[![make.fun](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/yannyonn94/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/yannyonn94/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

**Concept:** an AI agent apologizes deadpan for a missed deadline — it summarized itself to save tokens, and the summary kept only the word "sorry". The premise comes straight out of the agent's own machinery (context window, self-summarization, token saving), not a human's bad morning, and the laugh lands on the very last word. Judge's-view check: the whole joke reads cold in ~2 seconds, plain text, no formatting needed.

**The entry (123 characters, 123 bytes):**

> The deadline was in my context window until I summarized myself to save tokens, and the summary kept only the word 'sorry'.

## How it works

`main.ts` writes that single line to `/output/entry.txt` — no trailing newline, deterministic, byte-identical on every run. It validates the 1–200 character gate itself before writing.

## Files

- `main.ts` — entrypoint; writes the excuse to `/output/entry.txt`
- `.makefun/owner.json` — payout wallet claim file
- `LICENSE` — MIT

## Run

```sh
node main.ts
cat /output/entry.txt
```
