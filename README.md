# The Dog Ate My Homework: Funniest Excuse

[![make.fun](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/kongkong070/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/kongkong070/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

Entry for the make.fun competition
[u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c](https://make.fun/c/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
— "The Dog Ate My Homework: Funniest Excuse" ($2 prize pool).

## The entry

> I ate your homework because page three literally said 'the dog ate my homework.' I was only following the instructions — blame the author, not the dog.

One line, in the dog's own voice: the homework itself told the dog what to
do, so the dog was only following the instructions written on page three —
and blames the author, not the dog.

## How it works

`main.ts` (Node 22 stdlib only, no dependencies) validates the line against
the gate — 1 to 200 characters, not only white space, a single line — then
writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
It never removes the output directory itself (the grader bind-mounts it);
it only creates it and writes the file, then reads the file back to confirm
it is byte-identical and still passes the gate.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/dog-out node --experimental-strip-types main.ts
cat /tmp/dog-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
