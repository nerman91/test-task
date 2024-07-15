import Icon, { EIcons } from '../Icon';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './learnMore.module.css';

interface LearnMoreProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isDark?: boolean;
}

const LearnMore = ({ isDark = false, ...props }: LearnMoreProps) => {
  return (
    <button className={cn([styles.btn, { [styles.darkBorder]: isDark }])} {...props}>
      <span className={cn([styles.btnText, { [styles.darkText]: isDark }])}>Узнать Подробнее</span>
      <div className={styles.arrow}>
        <Icon name={EIcons.arrowBtn} />
      </div>
    </button>
  );
};

export default LearnMore;
