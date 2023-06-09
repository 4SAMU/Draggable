## Draggable React Hook

A custom React hook for creating draggable components.

![Draggable.gif](Draggable.gif)

### Installation

Install the package using npm:

```shell
npm install draggable-react-hook
```

or using Yarn:

```shell
yarn add draggable-react-hook
```

### Usage

Import the `useDraggable` hook from the package:

```js
import useDraggable from "draggable-react-hook";
```

Use the `useDraggable` hook in your component:

```js
function DraggableComponent() {
  const draggableProps = useDraggable();

  return <div {...draggableProps}>Drag me</div>;
}
```

The `useDraggable` hook returns a set of props that need to be spread onto the element you want to make draggable. These props include event handlers and styles for drag functionality.

### Example

Here's a simple example of how to use the `useDraggable` hook:

```js
import React from "react";
import useDraggable from "draggable-react-hook";

function DraggableComponent() {
  const draggableProps = useDraggable();

  return (
    <div {...draggableProps}>
      <h1>Draggable Component</h1>
      <p>Drag me around!</p>
    </div>
  );
}

export default DraggableComponent;
```

In the example above, the `DraggableComponent` will be draggable within its parent container.

To enable independent dragging for each component, you need to create separate `draggableProps` objects for each component.
`i.e` :

```js
import React from "react";
import useDraggable from "draggable-react-hook";
const DragMe = () => {
  const draggableProps1 = useDraggable();
  const draggableProps2 = useDraggable();
  return (
    <>
      <div className="drag-green " {...draggableProps1}>
        <h1>Green Component</h1>
        <p>Drag me around!</p>
      </div>
      <div className="drag-red" {...draggableProps2}>
        <h1>Red Component</h1>
        <p>Drag me around!</p>
      </div>
    </>
  );
};

export default DragMe;
```

### API

The `useDraggable` hook does not accept any parameters and returns an object with the following properties:

- `onMouseDown`: Event handler for the mousedown event.<Br/>
- `onMouseMove`: Event handler for the mousemove event.<Br/>
- `onMouseUp`: Event handler for the mouseup event.<Br/>
- `onTouchStart`: Event handler for the touchstart event.<Br/>
- `onTouchMove`: Event handler for the touchmove event.<Br/>
- `onTouchEnd`: Event handler for the touchend event.<Br/>
- `style`: An object containing inline styles for the draggable element. This includes the `transform` property for positioning and the `opacity` property for visual feedback during dragging. <Br/>

### Author

4SAMU-[Github](https://github.com/4SAMU)

### Tips

`Double tap+hold and Move` <br/>
`Left Click+hold and Move`<br/>
`Touch and move`<br/>

### challenge 🔥

Create a game using the package, Happy Hacking👨🏻‍💻👩‍💻!!!

Enjoy Using `draggable-react-hook` package! 🥳🥳🥳
