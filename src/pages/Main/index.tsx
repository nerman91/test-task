import Header from './Header';
import Background from './Background';
import Tabs from './Tabs';
import TabsContent from './TabsContent';
import LearnMore from '../../components/LearnMore';
import styles from './main.module.css';
import NawBar from '../../components/NawBar';
import { useScrollNavigation } from '../../hooks/useScrollNavigation';

const Main = () => {
  useScrollNavigation({ nextPage: '/about' });

  return (
    <div className={styles.mainContainer}>
      <Header />

      <main className={styles.gridContainer}>
        <div className={styles.gridEl} />

        <div className={styles.gridEl}>
          <TabsContent />
        </div>

        <div className={styles.gridEl}>
          <Tabs />
        </div>

        <div className={styles.gridEl} />

        <div className={styles.gridEl}>
          <div className={styles.navWrapper}>
            <NawBar />
          </div>
        </div>

        <div className={styles.gridEl} />

        <div className={styles.gridEl}>
          <div className={styles.center}>
            <LearnMore />
          </div>
        </div>

        <div className={styles.gridEl} />
      </main>

      <Background />
    </div>
  );
};

export default Main;
