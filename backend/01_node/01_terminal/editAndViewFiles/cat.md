# cat Command

## What is `cat`?

Used to display file content in terminal.

---

# Syntax

```bash
cat file_name
```

---

# Example

```bash
cat app.js
```

### Output

```js
console.log("Hello");
```

Shows the content inside `app.js`.

---

# Multiple Files

```bash
cat file1.txt file2.txt
```

Shows combined content of multiple files.

---

# Create File

```bash
cat > notes.txt
```

Creates a new file and allows writing content.

Press:

```bash
CTRL + D
```

to save.

---

# Append Content

```bash
cat >> notes.txt
```

Adds new content without removing old content.

---

# Example

```bash
cat .env
```

Used to quickly view `.env` file content.

---

# Diagram

```text
app.js
   │
   └── cat reads content
```

---

# Important Point

`cat` only displays content.

It does NOT:

- Open editor mode
- Move files
- Delete files

---

# Notes

- `cat` = Concatenate
- Commonly used to read files
- Useful for quick file inspection
- Frequently used in backend development
