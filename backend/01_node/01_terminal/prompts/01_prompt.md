# Terminal Prompt

## What is Prompt?

Prompt is the text shown before typing commands in terminal.

---

# Example

```bash
SACHITH@DESKTOP-F0N8OVB MINGW64 ~/Desktop/022/web_dev (main)
$
```

This whole line is called terminal prompt.

---

# Why Prompt is Important?

Prompt helps us know:

- Current user
- Computer name
- Current folder
- Git branch

---

# Common PS1 Symbols

| Symbol | Meaning |
| ------ | ------- |
| `\u` | Username |
| `\h` | Host name |
| `\w` | Current directory |
| `\n` | New line |
| `$` | Prompt symbol |

---

# Check Current Prompt

```bash
echo $PS1
```

Shows the current PS1 prompt value.

---

# Temporary Prompt Change

```bash
PS1="hello > "
```

Now terminal prompt becomes:

```bash
hello >
```

---

# Diagram

```text
Prompt
   │
   ├── Username
   ├── Computer Name
   ├── Current Folder
   └── Git Branch
```

---

# Notes

- Prompt appears before commands
- PS1 controls main terminal prompt
- Developers customize prompts for better workflow
