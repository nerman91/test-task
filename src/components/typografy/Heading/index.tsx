import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './heading.module.css';

interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode;
  isDark?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

const Heading = ({ children, isDark, as, ...props }: HeadingProps) => {
  switch (as) {
    case 'h1':
      return (
        <h1
          className={cn([styles.heading], [styles.h1], {
            [styles.dark]: isDark,
          })}
          {...props}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={cn([styles.heading], [styles.h2], {
            [styles.dark]: isDark,
          })}
          {...props}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={cn([styles.heading], [styles.h3], {
            [styles.dark]: isDark,
          })}
          {...props}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h3
          className={cn([styles.heading], [styles.h4], {
            [styles.dark]: isDark,
          })}
          {...props}
        >
          {children}
        </h3>
      );
  }
};

export default Heading;
