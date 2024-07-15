import Heading from '../../../components/typografy/Heading';
import Paragraph from '../../../components/typografy/Paragraph';
import cn from 'classnames';
import styles from './card.module.css';

interface CardProps {
  img: string;
  head1: string;
  head2: string;
  description1: string;
  description2: string;
  index: number;
}

const Card = ({ img, head1, head2, description1, description2, index }: CardProps) => {
  const isEven = index % 2 == 0;

  return (
    <li className={cn([styles.cardWrapper, { [styles.reversed]: isEven }])}>
      <img src={img} alt={head1 + ' ' + head2} />

      <div className={styles.contentWrapper}>
        <Heading as={'h4'} isDark>
          <span className={cn([styles.headContent, { [styles.headContentGreen]: isEven }])}>{head1}</span>
          <span className={cn([styles.headContent, { [styles.headContentGreen]: !isEven }])}>{head2}</span>
        </Heading>
        <Paragraph isDark>{description1}</Paragraph>
        <Paragraph isDark>{description2}</Paragraph>
      </div>
    </li>
  );
};

export default Card;
