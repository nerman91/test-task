import Heading from '../../../../../components/typografy/Heading';
import { Link } from 'react-router-dom';
import Icon, { EIcons } from '../../../../../components/Icon';
import styles from './info.module.css';

const aboutData = ['Наша компания', 'Вопрос Ответ', 'История', 'Решения'];
const productsData = ['Все', 'Грохоты и сепараторы', 'Прессовое оборудование'];
const pressData = ['Новости', 'Наши Отзывы', 'Новости'];

const Info = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Heading as={'h4'}>О Нас</Heading>
        {aboutData.map((item, index) => (
          <Link className={styles.link} key={index} to={'/'}>
            {item}
          </Link>
        ))}
      </li>

      <li className={styles.listItem}>
        <Heading as={'h4'}>Продукция</Heading>
        {productsData.map((item, index) => (
          <Link className={styles.link} key={index} to={'/'}>
            {item}
          </Link>
        ))}
      </li>

      <li className={styles.listItem}>
        <Heading as={'h4'}>Пресс-центр</Heading>
        {pressData.map((item, index) => (
          <Link className={styles.link} key={index} to={'/'}>
            {item}
          </Link>
        ))}
      </li>

      <li className={styles.listItem}>
        <Heading as={'h4'}>Контакты</Heading>
        <a className={styles.link} href="tel:+12345678901">
          +1 (234) 567-89-01
        </a>
        <a className={styles.link} href="mailto:example@mail.com">
          example@mail.com
        </a>
        <div className={styles.messengers}>
          <a className={styles.messengerLink} href={'https://wa.me/1234567890'} target={'_blank'}>
            <Icon name={EIcons.wp} />
          </a>
          <a className={styles.messengerLink} href={'tg://user?id=123'} target={'_blank'}>
            <Icon name={EIcons.tg} />
          </a>
          <a className={styles.messengerLink} href={'"mailto:example@email.com"'} target={'_blank'}>
            <Icon name={EIcons.mail} />{' '}
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Info;
