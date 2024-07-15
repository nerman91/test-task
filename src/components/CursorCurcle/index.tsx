import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './cursorCircle.module.css';

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement) {
        setIsClickable(true);
      } else {
        setIsClickable(false);
      }

      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [window.scrollY]);

  return (
    <div
      className={cn([styles.cursorCircle, { [styles.isActive]: isClickable }])}
      style={{
        left: `${position.x || 0}px`,
        top: `${position.y || 0}px`,
      }}
    >
      {isClickable && <span className={styles.text}>Click</span>}
    </div>
  );
};

export default CursorCircle;
