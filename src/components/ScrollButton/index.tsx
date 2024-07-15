import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import Icon, { EIcons } from '../Icon';
import styles from './scrollButton.module.css';

interface ScrollButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isDark?: boolean;
}
const ScrollButton = ({ isDark = false, ...props }: ScrollButtonProps) => {
  return (
    <button className={styles.btn} {...props}>
      {!isDark && <Icon name={EIcons.scrollIcon} />}
      {isDark && <Icon name={EIcons.scrollIconDark} />}
    </button>
  );
};

export default ScrollButton;
