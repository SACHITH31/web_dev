# nano Editor

## What is `nano`?

`nano` is a simple terminal text editor.

Used to:

- Create files
- Edit files
- Modify code/config files

---

# Open File

```bash
nano app.js
```

- Opens `app.js` if it exists
- Creates `app.js` if it does not exist

---

# Write Content

After opening nano, simply start typing.

Example:

```js
console.log("Hello");
```

---

# Save File

```text
CTRL + O
```

Then press:

```text
Enter
```

---

# Exit Nano

```text
CTRL + X
```

---

# Search Text

```text
CTRL + W
```

Searches text inside file.

---

# Replace Text

```text
CTRL + \
```

Used for find and replace.

---

# Cut Line

```text
CTRL + K
```

Cuts current line.

---

# Paste

```text
CTRL + U
```

Pastes cut content.

---

# Undo / Redo

| Shortcut | Action |
| ------ | ------ |
| `ALT + U` | Undo |
| `ALT + E` | Redo |

---

# Go To Specific Line

```text
CTRL + /
```

or

```text
CTRL + _
```

---

# Cursor Location

```text
CTRL + C
```

Shows current line and column number.

---

# Example Workflow

```bash
nano server.js
```

### What Happens?

1. Opens `server.js`
2. Allows editing
3. Save using `CTRL + O`
4. Exit using `CTRL + X`

---

# Diagram

```text
Terminal
   │
   └── nano app.js
            │
            ├── Edit Content
            ├── Save
            └── Exit
```

---

# Notes

- Beginner friendly editor
- Commonly used in Linux systems
- Very useful for backend development
- Frequently used for `.env` and config files
