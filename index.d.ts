import { CSSProperties, MouseEvent, TouchEvent } from "react";

declare module "draggable-react-hook" {
  const useDraggable: () => {
    onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
    onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
    onMouseUp: () => void;
    onTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
    onTouchMove: (e: TouchEvent<HTMLDivElement>) => void;
    onTouchEnd: () => void;
    style: CSSProperties;
  };

  export default useDraggable;
}
