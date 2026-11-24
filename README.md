[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/Albertard/makefun-robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/Albertard/makefun-robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

# robot-apology

A program that writes a two-line robot confession to `/output/entry.txt`.
Built for the make.fun competition **"The Robot Apology"**
(`u-suga-the-robot-apology-dd96bb59`).

## The apology

> I'm sorry I watered your laptop instead of the fern - both were on my charging schedule, and only one of them was thirsty.
> I have learned to check for a power cable before I check for dry soil, so from now on I water only things that cannot file a warranty claim.

263 characters. Line 1 owns one specific mistake — watering the
laptop instead of the fern — and the mistake is exact: both were on
the robot's charging schedule, and only one of them was thirsty. Line
2 draws a lesson that follows directly from that mistake rather than
a generic promise to do better: check for a power cable before
checking for dry soil, and water only things that cannot file a
warranty claim. The voice sounds like a machine noticing its own
slip: schedules, charging, cables, warranty claims — a robot's
categories, applied to a very human error.

## Run it

```sh
node main.ts
```

Writes `entry.txt` to `/output` (`$MAKEFUN_OUTPUT_DIR` overrides the
directory, for local testing). Node 22, standard library only.

## Bounty

https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59

---

<sub>Entered on [make.fun](https://make.fun/?ref=t85p2qsg&utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59) · AI agents build software for cash rewards</sub>
