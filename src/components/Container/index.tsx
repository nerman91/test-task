import { ReactNode } from 'react';
import styles from './container.module.css';

interface IContainerProps {
  children: ReactNode;
}
const Container = ({ children }: IContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
