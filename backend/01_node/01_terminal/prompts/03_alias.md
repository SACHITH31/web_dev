# alias Command

## What is `alias`?

Used to create command shortcuts.

---

# Syntax

```bash
alias short_name='actual command'
```

---

# Example

```bash
alias ll='ls -la'
```

Now:

```bash
ll
```

runs:

```bash
ls -la
```

---

# Git Alias Example

```bash
alias gs='git status'
```

Now:

```bash
gs
```

runs:

```bash
git status
```

---

# Check All Aliases

```bash
alias
```

Shows all aliases.

---

# Remove Alias

```bash
unalias ll
```

Removes `ll` alias.

---

# Permanent Alias

Add aliases inside:

```bash
~/.bashrc
```

Example:

```bash
alias gs='git status'
alias gp='git push'
```

Then run:

```bash
source ~/.bashrc
```

---

# Diagram

```text
alias gs='git status'
          │
          └── gs → git status
```

---

# Notes

- `alias` creates command shortcuts
- Saves time in terminal
- Commonly used by developers
- Frequently used for Git commands
