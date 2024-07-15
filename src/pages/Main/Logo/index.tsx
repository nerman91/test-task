import { Link } from 'react-router-dom';
import { IMAGES } from '../../../images';
import styles from './logo.module.css';

const LogoCompany = () => {
  return (
    <Link to={'#'} style={{ zIndex: 2 }}>
      <img className={styles.logo} src={IMAGES.logo} alt={'Логотьип компании Ржевмаш'} />
    </Link>
  );
};

export default LogoCompany;
