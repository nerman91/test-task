import { useTabsContext } from '../../../Context/TabsContext.tsx';
import cn from 'classnames';
import styles from './tabs.module.css';

const tabsContent = ['Пара слов о нашей компании', 'Мусоросортировочный комплекс', 'Мусороперегрузочная станция'];

const Tabs = () => {
  const { selectedTab, onSelect } = useTabsContext();
  return (
    <ol className={styles.listWrapper}>
      {tabsContent.map((value, index) => (
        <li key={index}>
          <span className={styles.itemCount}>{`${index >= 9 ? '' : '0'}` + (index + 1)}</span>
          <button
            onClick={() => onSelect(index)}
            className={cn([styles.tabButton, { [styles.tabButtonSelected]: index === selectedTab }])}
          >
            {value}
          </button>
        </li>
      ))}
    </ol>
  );
};

export default Tabs;
