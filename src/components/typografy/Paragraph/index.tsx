import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './paragraph.module.css';
import cn from 'classnames';

interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  withOpacityDark?: boolean;
  withOpacityLight?: boolean;
  isDark?: boolean;
}

const Paragraph = ({ children, withOpacityLight = false, withOpacityDark = false, isDark = false }: ParagraphProps) => {
  return (
    <p
      className={cn([styles.text], {
        [styles.darkOpacity]: withOpacityDark,
        [styles.dark]: isDark,
        [styles.lightOpacity]: withOpacityLight,
      })}
    >
      {children}
    </p>
  );
};

export default Paragraph;
