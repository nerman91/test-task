import Heading from '../../components/typografy/Heading';
import Paragraph from '../../components/typografy/Paragraph';
import LearnMore from '../../components/LearnMore';
import styles from './about.module.css';
import cn from 'classnames';
import NawBar from '../../components/NawBar';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';

const About = () => {
  useScrollNavigation({ prevPage: '/', nextPage: '/advantages' });

  return (
    <section className={styles.aboutContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem}>
          <div className={styles.navWrapper}>
            <NawBar isDark />
          </div>
        </div>

        <div className={cn([styles.gridElem, styles.gridElemInfo])}>
          <div className={styles.infoItemCenter}>
            <div>
              <span className={styles.count}>01</span>
              <Heading as={'h4'} isDark>
                Полный цикл разработки
              </Heading>
            </div>
          </div>
        </div>

        <div className={cn([styles.gridElem, styles.gridElemInfo])}>
          <div className={styles.infoItemCenter}>
            <div>
              <span className={styles.count}>02</span>
              <Heading as={'h4'} isDark>
                Пиндивидуальные проекты
              </Heading>
            </div>
          </div>
        </div>

        <div className={cn([styles.gridElem, styles.gridElemInfo])}>
          <div className={styles.infoItemCenter}>
            <div>
              <span className={styles.count}>03</span>
              <Heading as={'h4'} isDark>
                42 проекта
              </Heading>
            </div>
          </div>
        </div>

        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
        <div className={styles.gridElem} />
      </div>

      <div className={styles.aboutInfo}>
        <Heading as={'h4'}>
          <span className={styles.headContentGreen}>
            Российский разработчик и производитель <br /> эффективных решений{' '}
          </span>
          <span className={styles.textDark}>в области управления отходами</span>
        </Heading>

        <Paragraph isDark>
          Имея за плечами опыт создания собственного завода по рециклингу полимеров и находясь в постоянном контакте с
          нашими поставщиками сырья, мы как никто другой знаем все нюансы сбора и сортировки отходов. Нашим клиентам мы
          предлагаем как типовые решения с различной степенью механизации, так и сложнейшие автоматические сортировочные
          комплексы, разработанные по индивидуальным проектам. С 2010 года нами введено в эксплуатацию более 48
          мусоросортировочных комплексов и мусороперегрузочных станций.
        </Paragraph>

        <LearnMore isDark />
      </div>
    </section>
  );
};

export default About;
