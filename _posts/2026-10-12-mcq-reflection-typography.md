---
layout: post
title: "MCQ Reflection: College Board" 
description: A reflection on reviewing collegboard and the past 8 weeks
categories: [CB, Reflection]
permalink: /cb/mcq-reflection-collegeboard
author: vanshikak210
---

![2018 Practice Exam MCQ results overview: 54 out of 66]({{ '/images/image-1791830212919.png' | relative_url }})

Here is the per-topic breakdown, with the units I missed questions in circled in red:

![Practice exam results by topic, with my weak areas circled in red]({{ '/images/Screenshot%202026-10-12%20at%2011.37.54%E2%80%AFAM.png' | relative_url }})

And here is the breakdown after going back through and correcting my misses:

![Corrected per-topic breakdown showing 100% across the units I reviewed]({{ '/images/Screenshot%202026-10-12%20at%2012.05.34%E2%80%AFPM.png' | relative_url }})

# AP CSP Strengths & Weaknesses Analysis

## My Results

- Per-topic breakdown: misses circled in red were clustered, not random
- After correcting misses: almost all were procedure-related or debugging-related
- Conceptual and data units were nearly clean

| Unit / Topic | Category |
|---|---|
| Algorithms | Strength |
| Data Representation | Strength |
| Boolean Logic | Strength |
| Iteration | Strength |
| Data Compression | Strength |
| Extracting Information from Data | Strength |
| Using Programs with Data | Strength |
| Calling Procedures | **Weakness** |
| Developing Procedures | **Weakness** |
| Identifying & Correcting Errors | **Weakness** |

---

## Two Things Right

### 1. My conceptual understanding is solid

- Strong on abstract concepts: algorithms, data representation, Boolean logic, iteration
- Can reason through a process described in words or a flowchart without touching code
- Comfortable with binary, abstraction, and how data is represented
- Can evaluate Boolean expressions and predict loop behavior
- Understand the *why* behind computing principles, not just the mechanics

### 2. My data & information handling

- Strong on data compression, extracting information from data, using programs with data
- Once data is in front of me, I can read it, transform it, and draw conclusions
- These units test reasoning, not memorization — which is why they come easier

---

## Two Things Wrong

### 1. Procedures (calling & developing)

- Calling Procedures and Developing Procedures were my lowest-scoring units
- I understand what a procedure *is* — I can't reproduce the syntax/steps without a reference
- I've read far more procedure examples than I've written
- My knowledge is recognition-based, not production-based

### 2. Error identification & correction

- I can state what code is *supposed* to do, but can't find where it's broken
- I jump to the intent of the code instead of stepping through line by line
- The actual bug slips past me because I never built a tracing habit

| Weakness | What it looks like | Root cause |
|---|---|---|
| Procedures | Blank on syntax when writing from scratch; mix up definition vs. call | Learned by reading, not by writing |
| Debugging | Know the goal, can't locate the bug | Never built a tracing habit |

---

## What I Know vs. Don't Know

| I Know | I Don't Know |
|---|---|
| How to think algorithmically | How to execute/write procedures from memory |
| Data structures (lists, dictionaries, variables) | Exact syntax without a reference open |
| Conditional and loop logic | How to trace broken code and fix it |
| What correct code looks like when I see it | How to produce code from a blank page under time pressure |

---

## The Main Problem

- **I can recognize correct code, but I struggle to produce it**
- Procedures are the linchpin:
  - Hardest for me to memorize
  - Most abstract to write
  - Show up inside most debugging questions too
- One weakness is driving both low-scoring areas
- Fixing procedures should pull error-correction scores up with it

| Skill layer | Status |
|---|---|
| Recognition — pick the correct code from options | ✅ Strong |
| Comprehension — explain what code does | ✅ Strong |
| Production — write code from scratch | ❌ Weak |
| Debugging — trace and repair broken code | ❌ Weak |

---

## Future Work

### Procedure drills

- Goal: muscle memory — write until syntax is automatic
- Stop reading examples, start producing from memory
- Practice writing code with no reference materials open

| Drill | How | Frequency | Done when |
|---|---|---|---|
| Blank-page rewrites | Close references; write a definition + call from memory; compare to answer | Daily, 10 min | 5 in a row correct from memory |
| Call/define pairs | Given a definition, write 3 valid calls and 1 invalid one (explain why) | 3×/week | No syntax errors on calls |
| Parameters & returns | Write procedures with parameters and return values, in AP pseudocode and the class language | 3×/week | Can convert either direction without notes |
| Timed sets | 5 procedure questions in 10 minutes | Weekly | ≥ 4/5 consistently |

### Debugging exercises

- **Trace tables** — hand-trace short programs, write each variable's value per line *before* running it (3×/week)
- **Break-and-fix** — take working code, insert one bug, come back an hour later and find it (2×/week)
- **Common-error checklist** — wrong parameter count, off-by-one, missing return, bad scope, wrong condition
  - Build once, use on every debugging question
- **Past-exam error questions** — only the "identify/correct the error" questions from CB practice sets (weekly, aim for ≥ 80%)

---

## How I Executed It Through My Project

### Tools and Development

I set up and ran both parts of the project locally: the Jekyll site with `make` and the Flask backend in a virtual environment. Then I deployed the site on GitHub Pages and the backend on Render.

| ID | Area | Self Rank | Peer | Teacher |
|---|---|---|---|---|
| T01 | Development Environment | 3 | 3 | — |
| T02 | VS Code | 3 | 3 | — |
| T03 | Git / GitHub | 3 | 3 | — |
| T04 | Portfolio / GitHub Pages | 3 | 3 | — |

### Development and Creation

I built the Shoreline login, signup and survey features and connected them to my own Flask routes. I used AI to plan across the frontend, backend and deployment, and checked the results myself with logs.

| ID | Area | Self Rank | Peer | Teacher |
|---|---|---|---|---|
| T05 | Tools & Equipment Hacks | 3 | 3 | — |
| T06 | Portfolio / Blogging Hacks | 2 | 3 | — |
| T07 | Theme / Style / Layout | 3 | 3 | — |
| T08 | JavaScript / Coding Challenges | 3 | 3 | — |
| T09 | AI Orchestration | 4 | 3 | — |

### Technical Awareness and Communication

I fixed errors by reading tracebacks: a missing route, a file in the wrong folder, and a missing database table.

| ID | Area | Self Rank | Peer | Teacher |
|---|---|---|---|---|
| T10 | Tech / Cyber Growth | 4 | 2 | — |
| T11 | Learning Through Mistakes | 4 | 2 | — |
| T12 | Tech / Cyber Talk | 3 | 3 | — |

### Core Behaviours

I showed up consistently, but it was hard to do on my own. I used AI to figure out how pages for Open Coding Society work and built it off of that.

| ID | Area | Self Rank | Peer | Teacher |
|---|---|---|---|---|
| P01 | Attendance / Tardy | 5 | 5 | — |
| P02 | Work Habits | 3 | 5 | — |
| P03 | Integrity | 3 | 5 | — |

### Collaboration

When I got stuck, I asked for help and shared the exact errors, logs and screenshots, which made problems faster to solve.

| ID | Area | Self Rank | Peer | Teacher |
|---|---|---|---|---|
| P04 | Communication | 3 | 3 | — |
| P05 | Help Seeking | 4 | 3 | — |
| P06 | Mentoring / Advocacy | 2 | 3 | — |

### Professional Skills

I kept working until the survey was saving to the backend, even late at night. I organized the team's work into GitHub issues with clear descriptions.

| ID | Area | Self Rank | Peer | Teacher |
|---|---|---|---|---|
| P07 | Timeliness | 3 | 3 | — |
| P08 | Persistence | 4 | 3 | — |
| P09 | Organization | 3 | 3 | — |
| P10 | Engagement | 3 | 3 | — |

---

## My Class vs. Exam — Steps and Reflection

- **In class:** struggle to reproduce procedures from memory during live coding
- **On the CB exam:** score lower on procedure units, higher on recognition/conceptual questions
- **Fix:** my weakness in class *is* my weakness on the exam — same problem, same drills
- **Success metric:** on the next practice exam, procedure and error-correction units score on par with conceptual units
