import Heading from '../../../components/typografy/Heading';
import cn from 'classnames';
import styles from './tabsContent.module.css';
import Paragraph from '../../../components/typografy/Paragraph';
import { useTabsContext } from '../../../Context/TabsContext.tsx';
const TabsContent = () => {
  const { selectedTab } = useTabsContext();
  return (
    <div className={styles.tabsWrapper}>
      {selectedTab === 0 && (
        <>
          <Heading as={'h1'}>
            <span className={cn([styles.headContent, styles.headContentGreen])}>Ржев</span>
            <span className={styles.headContent}>маш</span>
          </Heading>

          <div className={styles.description}>
            <Heading as={'h4'}>
              <span className={styles.headContentGreen}> Эффективные решения </span>
              <span>
                в<br />
                области управления отходами
              </span>
            </Heading>
            <Paragraph withOpacityLight>
              Мы проектируем и строим мусоросортировочные комплексы, станции мусороперегрузки, а также производим
              различное оборудование для сортировки и переработки ТКО, предназначенное специально для российских условий
              эксплуатации.
            </Paragraph>
          </div>
        </>
      )}

      {selectedTab === 1 && (
        <>
          <Heading as={'h2'}>
            <span className={styles.headContent}>Мусоро</span>
            <span className={cn([styles.headContent, styles.headContentGreen])}>сортировочный </span>
            <span className={styles.headContent}>комплекс</span>
          </Heading>

          <div className={styles.description}>
            <Heading as={'h4'}>
              <span className={styles.headContentGreen}>
                Комплекс по обработке коммунальных отходов <br />
              </span>
              <span>с высокой степенью механизации</span>
            </Heading>
            <Paragraph withOpacityLight>
              Мы проектируем и строим мусоросортировочные комплексы, станции мусороперегрузки, а также производим
              различное оборудование для сортировки и переработки ТКО, предназначенное специально для российских условий
              эксплуатации.
            </Paragraph>
          </div>
        </>
      )}

      {selectedTab === 2 && (
        <>
          <Heading as={'h2'}>
            <span className={styles.headContent}>Мусоро</span>
            <span className={cn([styles.headContent, styles.headContentGreen])}>перегрузочная </span>
            <span className={styles.headContent}>cтанция</span>
          </Heading>

          <div className={styles.description}>
            <Heading as={'h4'}>
              <span className={styles.headContentGreen}>Cтанция на пресс-компактор </span>
              <span>RMZ PC40-360</span>
            </Heading>
            <Paragraph withOpacityLight>
              Предназначена для перегрузки отходов из мусоровозов в контейнер для последующей перевозки на большегрузном
              транспорте (мультилифт). Бетонная или сборно-разборная металлическая эстакада может быть оперативно
              смонтирована в удобном месте. Разгрузка мусоровоза занимает от 3 до 10 минут, а заполнение контейнера
              объемом 30 м3 за 40 минут. Может принять до 150 тонн отходов в смену. Не требует строительства ангара,
              сложных бетонных работ.
            </Paragraph>
          </div>
        </>
      )}
    </div>
  );
};

export default TabsContent;
