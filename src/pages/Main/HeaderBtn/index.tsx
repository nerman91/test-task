import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import styles from './headerBtm.module.css';
import Icon, { EIcons } from '../../../components/Icon';

interface BtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isDropdownOpen: boolean;
}

const HeaderBtn = ({ isDropdownOpen, ...props }: BtnProps) => {
  return (
    <button className={styles.btn} {...props}>
      {!isDropdownOpen && (
        <>
          <div className={cn([styles.square, styles.square1])}></div>
          <div className={cn([styles.square, styles.square2])}></div>
          <div className={cn([styles.square, styles.square3])}></div>
          <div className={cn([styles.square, styles.square4])}></div>
        </>
      )}

      {isDropdownOpen && <Icon name={EIcons.close} size={'25'} />}
    </button>
  );
};

export default HeaderBtn;
