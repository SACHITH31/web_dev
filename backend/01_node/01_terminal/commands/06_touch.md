# touch Command

## What is `touch`?

Used to create empty files in terminal.

---

# Syntax

```bash
touch file_name
```

---

# Example

```bash
touch app.js
```

Creates an empty `app.js` file.

---

# Multiple Files

```bash
touch index.html style.css app.js
```

Creates multiple files at once.

---

# Hidden Files

```bash
touch .env
```

Creates a hidden `.env` file.

---

# Relative Path Example

```bash
touch src/index.js
```

Creates `index.js` inside the `src` folder.

---

# Multiple Folder Example

```bash
touch backend/app.js frontend/index.html
```

Creates files inside different folders.

---

# Example With Multiple Commands

```bash
mkdir project && cd project && touch app.js
```

### What Happens?

1. Creates `project` folder
2. Moves into `project`
3. Creates `app.js`

---

# Another Example

```bash
mkdir backend && cd backend && touch server.js routes.js .env
```

### What Happens?

1. Creates `backend`
2. Moves into `backend`
3. Creates:
   - `server.js`
   - `routes.js`
   - `.env`

---

# Diagram

```text
project
├── app.js
├── server.js
└── .env
```

---

# Important Point

`touch` creates only files.

It does NOT:

- Create folders
- Open files
- Add content into files

---

# Common Usage

| Command | Meaning |
| ------ | ------- |
| `touch app.js` | Create in current folder |
| `touch src/app.js` | Create inside `src` |
| `touch ../app.js` | Create one folder back |

---

# Timestamp

If the file already exists:

```bash
touch app.js
```

then `touch` updates the file timestamp instead of creating a new file.

You can check it using:

```bash
ls -l
```

---

# Notes

- `touch` is used to create empty files
- Can create multiple files at once
- Commonly used in backend development
- Very fast way to create files from terminal
