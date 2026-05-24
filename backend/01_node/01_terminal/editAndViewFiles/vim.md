# vim Editor

## What is `vim`?

`vim` is a powerful terminal text editor.

Used for:

- Editing code
- Editing config files
- Working on Linux servers

---

# Open File

```bash
vim app.js
```

- Opens `app.js` if it exists
- Creates `app.js` if it does not exist

---

# Important Concept

`vim` works using modes.

---

# Main Modes

| Mode | Purpose |
| ------ | ------ |
| Normal Mode | Navigation |
| Insert Mode | Typing |
| Command Mode | Save/Quit |

---

# Insert Mode

Press:

```text
i
```

Now you can type/edit content.

---

# Exit Insert Mode

Press:

```text
ESC
```

Returns to normal mode.

---

# Save File

```vim
:w
```

---

# Quit vim

```vim
:q
```

---

# Save and Quit

```vim
:wq
```

---

# Quit Without Saving

```vim
:q!
```

---

# Example Workflow

```bash
vim server.js
```

### What Happens?

1. Opens `server.js`
2. Press `i`
3. Start typing
4. Press `ESC`
5. Type `:wq`
6. Press `Enter`

---

# Navigation Keys

| Key | Action |
| ------ | ------ |
| `h` | Left |
| `l` | Right |
| `k` | Up |
| `j` | Down |

---

# Delete Line

```vim
dd
```

Deletes current line.

---

# Copy and Paste

| Command | Action |
| ------ | ------ |
| `yy` | Copy line |
| `p` | Paste |

---

# Undo / Redo

| Command | Action |
| ------ | ------ |
| `u` | Undo |
| `CTRL + R` | Redo |

---

# Search Text

```vim
/text
```

Example:

```vim
/server
```

Searches for `server`.

---

# Diagram

```text
Terminal
   │
   └── vim app.js
            │
            ├── Insert Mode
            ├── Edit Content
            ├── Save
            └── Quit
```

---

# Notes

- Very powerful editor
- Faster after practice
- Commonly used by advanced developers
- Widely used in Linux servers and backend development
