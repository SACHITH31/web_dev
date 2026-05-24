# My Personal Terminal Setup


# Requirements

Before using this setup install:

- Git Bash
- fastfetch
- Nerd Font (optional)

Also update the `fastfetch` path according to your system.
- to get the path of fastfetch, open cmd and run `where fastfetch` and copy the path.
- and change the path in the code snippet below after `export PATH="$PATH:` and before the closing `"` only.

---

```bash
# Add fastfetch path (change according to your system)
export PATH="$PATH:/path/to/fastfetch"

# Show system info
fastfetch --logo-type small

# Welcome message
echo "⚡ Welcome Back ⚡"

# Custom hacker style prompt
PS1='\[\033[1;32m\]┌──[\u@DEV]─[\w]\[\033[1;32m\]`__git_ps1 " (%s)"`\[\033[0m\]\n\[\033[1;32m\]└──❯ \[\033[0m\]'

# Clear terminal
alias cls='clear'

# Git shortcuts
alias gs='git status'
alias ga='git add .'
alias gp='git push'
alias gc='git commit -m'

# Reload bashrc
alias reload='source ~/.bashrc'

# Folder navigation shortcuts
alias ..='cd ..'
alias ...='cd ../..'
alias root='cd /'
alias home='cd ~'
```