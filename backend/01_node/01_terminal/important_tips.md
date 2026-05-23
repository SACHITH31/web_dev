# Pro Tip

You can run multiple commands in a single line using `&&`.

---

# Syntax

```bash
command1 && command2
```

The next command runs only if the previous command is successful.

---

# Example

```bash
cd .. && ls
```

### What Happens?

1. Moves one folder back
2. Shows files and folders

---

# Example

```bash
mkdir project && cd project
```

### What Happens?

1. Creates `project` folder
2. Moves into `project`

---

# Example

```bash
cd backend && ls
```

### What Happens?

1. Moves into `backend`
2. Shows contents inside `backend`

---

# Multiple Commands Example

```bash
mkdir project && cd project && touch app.js && mkdir src && cd src && touch index.js && cd .. && ls
```

### What Happens?

1. Creates `project` folder
2. Moves into `project`
3. Creates `app.js`
4. Creates `src` folder
5. Moves into `src`
6. Creates `index.js`
7. Moves back to `project`
8. Shows files and folders

---

# Important Point

If one command fails, the remaining commands will not run.

---

# Example

```bash
cd unknownFolder && ls
```

### Output

```bash
bash: cd: unknownFolder: No such file or directory
```

Here `ls` will not run because `cd unknownFolder` failed.

---

# Real Developer Usage

```bash
npm install && npm start
```

```bash
git add . && git commit -m "update" && git push
```

---

# Notes

- `&&` is used to chain commands
- Saves time in terminal
- Commonly used by developers
- Very useful in backend development
