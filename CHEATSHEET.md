# Mike's Dev Cheat Sheet
Commands you've actually used, plus ones you'll need soon.
Update this as you learn new ones.

---

## Bash (Terminal) — Navigation & Files

| Command | What it does | Real example from your work |
|---|---|---|
| `ls` | List files in current folder | Confirmed Black Tie had 4 files after cleanup |
| `pwd` | Print working directory — shows where you are | Used to confirm you were in the right folder |
| `cd foldername` | Move into a folder | `cd Documents/Black-tie-redesign` |
| `cd ..` | Go up one folder level | Move from Black-tie-redesign back to Documents |
| `clear` | Clear the terminal screen | When output gets cluttered |
| `cat filename` | Print a file's contents to the terminal | `cat index.html` shows the full HTML |
| `rm filename` | Delete a file permanently | `rm WhiskerWatch.dc.html` — removed wrong project file |
| `open filename` | Open a file in its default app (Mac only) | `open index.html` opens in browser |
| `mkdir foldername` | Create a new folder | `mkdir assets` |

---

## Bash — Finding Things

| Command | What it does | Real example from your work |
|---|---|---|
| `grep -n "word" filename` | Search a file for a word, show line numbers | Used to find `scroll-margin-top` in style.css |
| `grep -n "word" filename \| head -40` | Same but only show first 40 results | Used to find all href links in index.html |
| `ls -lh` | List files with sizes and dates | Confirmed WhiskerWatch files were written to wrong folder |

---

## Git — The Ones You Use Every Session

| Command | What it does | When to use it |
|---|---|---|
| `git status` | Shows what's changed since last commit | Start of every session, before every commit |
| `git add .` | Stages ALL changed files for commit | After you're happy with changes |
| `git add filename` | Stages ONE specific file | When you only want to commit one thing |
| `git commit -m "message"` | Saves a snapshot with a description | After staging, before pushing |
| `git push origin main` | Sends commits to GitHub, updates live site | After committing |
| `git log --oneline -5` | Shows last 5 commits in short form | To see recent history |
| `git log --oneline -1` | Shows just the last commit | Quick check of where you are |

---

## Git — Undoing Things

| Command | What it does | When to use it |
|---|---|---|
| `git restore .` | Discards ALL uncommitted changes | Nuclear undo — wipes everything back to last commit |
| `git restore filename` | Discards changes to ONE file | Undo just one file |
| `git clean -n` | Dry run — lists untracked files that WOULD be deleted | Preview before cleaning |
| `git clean -fd` | Deletes all untracked files and folders | Remove files git doesn't know about |
| `git reset --hard HEAD~1` | Undo the last commit entirely | If you committed something wrong |

---

## Git — Setup & Config

| Command | What it does | When to use it |
|---|---|---|
| `git config --global user.name "Name"` | Sets your name for commits | One time setup per machine |
| `git config --global user.email "email"` | Sets your email for commits | One time setup per machine |
| `git config --global user.email` | Reads back your current email | Verify the setting took |
| `git clone URL` | Downloads a repo to your machine | Starting fresh from GitHub |
| `git init` | Initializes a new repo in current folder | Starting a brand new project |

---

## Git — Checking Things

| Command | What it does | Real example from your work |
|---|---|---|
| `git status` | What files changed | Used constantly throughout today |
| `git diff` | Shows exact line-by-line changes | See what changed before staging |
| `git log --oneline -5` | Last 5 commits | Quick history check |
| `ls /path/to/folder` | List files at a specific path | `ls /Users/mikesavoy/Documents/Black-tie-redesign` |

---

## Python / Flask (Resume Ranker)

| Command | What it does | When to use it |
|---|---|---|
| `python3 app.py` | Starts the Flask server | Launch Resume Ranker locally |
| `python3 -m http.server` | Starts a basic local web server | Preview a static HTML site |
| `Ctrl+C` | Stops whatever is running in terminal | Kill a server |
| `pip install packagename` | Installs a Python package | Adding new dependencies |
| `pip freeze > requirements.txt` | Saves your dependencies list | Before sharing or deploying |

---

## VS Code Shortcuts (Mac)

| Shortcut | What it does |
|---|---|
| `Cmd+\`` | Open/close integrated terminal |
| `Cmd+Shift+P` | Command palette — search any VS Code action |
| `Cmd+Shift+X` | Open Extensions panel |
| `Cmd+S` | Save current file |
| `Cmd+Z` | Undo last edit |
| `Cmd+Shift+R` | Hard refresh browser (bypass cache) |
| `Cmd+/` | Toggle comment on selected line |
| `Cmd+F` | Find in current file |
| `Cmd+Shift+F` | Find across all files in project |

---

## The "Something Went Wrong" Toolkit

When things break, run these in order:

```bash
# 1. Where am I?
pwd

# 2. What files are here?
ls

# 3. What does git think changed?
git status

# 4. What was the last thing committed?
git log --oneline -1

# 5. Nuclear undo — wipes all uncommitted changes
git restore .
```

---

## Commit Message Formula

```
[Action] [what] — [optional detail]

Good examples:
"Add contact form with Formspree integration"
"Remove pricing section from home page"
"Fix anchor scroll on service cards"
"Update CLAUDE.md with new standing rules"

Bad examples:
"updates"
"fix"
"stuff"
"asdfgh"
```

---

*Last updated: June 2026*
*Add new commands here as you learn them*