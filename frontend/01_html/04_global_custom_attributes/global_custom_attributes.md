# Global and Custom Attributes
- Global Attributes:
  - Global attributes are special attributes that can be applied to any HTML element.
  - Examples include `id`, `class`, `style`, `title`, and `data-*`, `hidden`, `tabindex`, etc.
  - They provide additional information about the element or modify its behavior.
- Custom Attributes: 
  - Custom attributes are user-defined attributes that start with `data-`.
  - They allow developers to store extra information on HTML elements without affecting the presentation or behavior of the element.

    ``` html
    <div data-user-id="12345" data-role="admin"></div>
    ```

    - Custom attributes can be accessed and manipulated using JavaScript.

    ``` JS
    const userId = element.getAttribute('data-user-id');
    console.log(userId); // Outputs: 12345
    ```
