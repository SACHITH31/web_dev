# How to Add a Boilerplate Snippet for CSS(in short and simple steps)
To add a boilerplate snippet for CSS in your code editor, follow these general steps:
1. **Open Your Code Editor**: Launch the code editor you are using (e.g., VSCode, Sublime Text, Atom).
2. **Access Snippet Settings**: Navigate to the settings or preferences section of your code editor. Look for an option related to "Snippets" or "User Snippets. or else type `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette and search for "Preferences: Configure User Snippets".

3. **Create a New Snippet**: Choose to create a new snippet. You may need to select the language (CSS) for which you want to create the snippet.

4. **Define the Snippet**: In the snippet editor, define your boilerplate code. For example, a basic CSS boilerplate might look like this:

   ```css
   /* CSS Boilerplate */
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   body {
       font-family: Arial, sans-serif;
       line-height: 1.6;
       background-color: #f4f4f4;
       color: #333;
   }
   ```
5. **Set a Trigger**: Assign a prefix or trigger word that you will type in your CSS file to invoke the snippet (e.g., `cssbp`).
6. **Save the Snippet**: Save your snippet configuration.
7. **Use the Snippet**: Open a CSS file in your code editor, type the trigger word (e.g., `css`), and then use the appropriate command (like pressing `Tab` or `Enter`) to expand the snippet into your boilerplate code.
8. **Test the Snippet**: Ensure that the snippet works as expected by testing it in a CSS file.

<!-- my css boilerplate snippet -->
``` json
{
  "My CSS Boilerplate": {
    "prefix": "css",   // type this in CSS file
    "body": [
      "/* Reset */",
      "* {",
      "  margin: 0;",
      "  padding: 0;",
      "  box-sizing: border-box;",
      "}",
      "",
      "html, body {",
      "  width: 100%;",
      "  height: 100%;",
      "}"
    ],
    "description": "Custom CSS boilerplate"
  }
}
```

That's it! You now have a boilerplate snippet for CSS that you can quickly insert into your files.