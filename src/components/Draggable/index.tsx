import React, { useRef, useState, useEffect } from 'react';

interface DraggableProps {
  children: React.ReactNode;
  initialPosition: { x: number | string; y: number | string };
  childrenKey: string;
  className?: string;
}

const Draggable: React.FC<DraggableProps> = ({ children, initialPosition, childrenKey, className }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging || !divRef.current) return;
    
      const mouseX = event.clientX;
      const mouseY = event.clientY;
    
      const newLeft = mouseX - offset.x;
      const newTop = mouseY - offset.y;
    
      divRef.current.style.left = `${newLeft}px`;
      divRef.current.style.top = `${newTop}px`;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!divRef.current) return;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const elementRect = divRef.current.getBoundingClientRect();
    const offsetX = mouseX - elementRect.left;
    const offsetY = mouseY - elementRect.top;
    const initialOffsetX = mouseX - offsetX;
    const initialOffsetY = mouseY - offsetY;
    setOffset({ x: initialOffsetX, y: initialOffsetY });
    setIsDragging(true);
  };

  return (
    <div
      ref={divRef}
      key={childrenKey}
      id={childrenKey}
      onMouseDown={(event) => handleMouseDown(event as React.MouseEvent<HTMLDivElement, MouseEvent>)}
      className={`lg:absolute static ${className}`}
      style={{
        left: initialPosition.x,
        top: initialPosition.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
