import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import styles from './navBar.module.css';

interface NavProps {
  isDark?: boolean;
}
const NawBar = ({ isDark = false }: NavProps) => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <Link className={cn([styles.navLink, { [styles.isActive]: pathname === '/', [styles.isDark]: isDark }])} to={'/'}>
        Компания
      </Link>
      <Link
        className={cn([styles.navLink, { [styles.isActive]: pathname === '/about', [styles.isDark]: isDark }])}
        to={'/about'}
      >
        Кто мы
      </Link>
      <Link
        className={cn([styles.navLink, { [styles.isActive]: pathname === '/advantages', [styles.isDark]: isDark }])}
        to={'/advantages'}
      >
        Преимущества
      </Link>
    </nav>
  );
};

export default NawBar;
