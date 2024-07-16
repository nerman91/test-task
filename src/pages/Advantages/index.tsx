import Heading from '../../components/typografy/Heading';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';
import cn from 'classnames';
import { IMAGES } from '../../images';
import Card from './Card';
import NawBar from '../../components/NawBar';
import styles from './advantages.module.css';

const data = [
  {
    img: IMAGES.service,
    head1: 'Техническая ',
    head2: 'экспертиза',
    description1:
      'РЖЕВМАШ — это, прежде всего, команда профессиональных инженеров. В своих разработках мы опираемся на опыт лучших мировых производителей, адаптируя его к российским реалиям.',

    description2:
      'Каждый проект проходит тщательную инженерную проработку с учетом имеющейся инфраструктуры и особенностей работы клиента. Вы можете быть уверены в том, что получите сбалансированное техническое решение, полностью отвечающее вашим потребностям.',
  },
  {
    img: IMAGES.production,
    head1: 'Собственное ',
    head2: 'производство',
    description1:
      'Наша производственная площадка – завод «РЖЕВМАШ» – располагается в Тверской области, всего в 3 часах езды от Москвы. Территория 14 га, площадь производственных площадей более 20 000 кв.м. Современный станочный парк, крупногабаритные покрасочные камеры, железнодорожные подъездные пути.',

    description2:
      'Локализация производства в России не только позволяет снизить стоимость нашего оборудования по сравнению с зарубежными аналогами, но и существенно сокращает время ожидания для клиента.',
  },
  {
    img: IMAGES.service,
    head1: 'Сервис и ',
    head2: 'обслуживание',
    description1:
      'РЖЕВМАШ — это российское машиностроительное предприятие, а значит наши специалисты всегда рядом и могут выехать к заказчику для консультации или проведения технического обслуживания.',
    description2: 'Это выгодно отличает нас от западных производителей.',
  },
];

const Advantages = () => {
  useScrollNavigation({ prevPage: '/about' });

  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.gridElem}>
          <div className={styles.navWrapper}>
            <NawBar isDark />
          </div>
        </div>
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
      </div>

      <div className={styles.contentWrapper}>
        <Heading as={'h2'} isDark>
          <span className={cn([styles.headContent])}>Наши</span>{' '}
          <span className={cn([styles.headContent, styles.headContentGreen])}>преимущества</span>
        </Heading>

        <ul className={styles.listWrap}>
          {data.map((item, index) => (
            <Card
              key={index}
              head1={item.head1}
              head2={item.head2}
              img={item.img}
              description1={item.description1}
              description2={item.description2}
              index={index + 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
