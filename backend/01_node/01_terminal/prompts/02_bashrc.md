# .bashrc File

## What is `.bashrc`?

`.bashrc` is a bash configuration file.

Used to:

- Customize terminal
- Add aliases
- Change prompt
- Configure environment settings

---

# Location

```bash
~/.bashrc
```

---

# View `.bashrc`

```bash
cat ~/.bashrc
```

Shows file content.

---

# Edit `.bashrc`

```bash
nano ~/.bashrc
```

or

```bash
vim ~/.bashrc
```

---

# Example

```bash
alias ll='ls -la'
PS1="myterminal > "
```

---

# Apply Changes

```bash
source ~/.bashrc
```

Reloads `.bashrc` without restarting terminal.

---

# Hidden File

`.bashrc` starts with `.` so it is a hidden file.

Check using:

```bash
ls -a
```

---

# Diagram

```text
Terminal Starts
        │
        └── .bashrc Runs Automatically
```

---

# Notes

- `.bashrc` is used for terminal customization
- Automatically runs when terminal opens
- Commonly used by developers
