import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon, { EIcons } from '../../../components/Icon';
import LogoCompany from '../Logo';
import HeaderBtn from '../HeaderBtn';
import Dropdown from './Dropdown';
import { CSSTransition } from 'react-transition-group';
import styles from './header.module.css';

const links = [
  { path: '/', hasDropdown: false, text: 'О компании' },
  { path: '/', hasDropdown: true, text: 'Продукция' },
  { path: '/', hasDropdown: false, text: 'Решения' },
  { path: '/', hasDropdown: false, text: 'Новости' },
];

const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <LogoCompany />
      </div>

      <nav className={styles.nav}>
        {links.map((link, index) => (
          <Link key={index} className={styles.link} to={link.path}>
            {link.text} {link.hasDropdown && <Icon name={EIcons.dropdownArrow} size={'8'} />}
          </Link>
        ))}
      </nav>
      <div />

      <div className={styles.headerButtonWrapper}>
        <HeaderBtn isDropdownOpen={isOpenDropdown} onClick={() => setIsOpenDropdown(isOpen => !isOpen)} />
      </div>

      <CSSTransition
        in={isOpenDropdown}
        classNames={{
          enter: styles['dropdown-enter'],
          enterActive: styles['dropdown-enter-active'],
          exit: styles['dropdown-exit'],
          exitActive: styles['dropdown-exit-active'],
        }}
        timeout={300}
        unmountOnExit
      >
        <Dropdown isOpen={isOpenDropdown} />
      </CSSTransition>
    </header>
  );
};

export default Header;
