import styles from './dropdown.module.css';
import Icon, { EIcons } from '../../../../components/Icon';
import cn from 'classnames';
import Info from './Info';

interface DropdownProps {
  isOpen: boolean;
}

const Dropdown = ({ isOpen }: DropdownProps) => {
  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.inputWrapper}>
          <input type={'text'} className={styles.searchInput} placeholder={'Поиск по сайту...'} />
          <button className={cn(['btnReset', styles.searchBtn])}>
            <Icon name={EIcons.search} size={'15'} />
          </button>
        </div>

        <Info />
      </div>
    </div>
  );
};

export default Dropdown;
