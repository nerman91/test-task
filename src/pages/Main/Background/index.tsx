import video from '../../../assets/video/rzhevmash.mp4';
import styles from './background.module.css';
import { useTabsContext } from '../../../Context/TabsContext.tsx';
import { IMAGES } from '../../../images';

const Background = () => {
  const { selectedTab } = useTabsContext();
  if (selectedTab === 0) {
    return <video className={styles.background} autoPlay={true} loop={true} muted={true} src={video as string} />;
  } else if (selectedTab === 1) {
    return <img className={styles.background} src={IMAGES.complex} alt="Изображение мусоросортировочного комплекса" />;
  } else if (selectedTab === 2) {
    return <img className={styles.background} src={IMAGES.station} alt="Изображение мусороперегрузочной станции" />;
  }
};

export default Background;
