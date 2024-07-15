import { ArrowBtn, Close, DropdownArrow, Mail, ScrollIcon, Search, Wp } from '../Icons';
import cn from 'classnames';
import { Tg } from '../Icons';
import styles from './icon.module.css';

export enum EIcons {
  dropdownArrow,
  search,
  tg,
  wp,
  mail,
  close,
  arrowBtn,
  scrollIcon,
  scrollIconDark,
}

type TSizes = 'default' | '8' | '15' | '25';
interface IconProps {
  name: EIcons;
  size?: TSizes;
}

const Icon = ({ name, size = 'default' }: IconProps) => {
  const icons = {
    [EIcons.dropdownArrow]: <DropdownArrow />,
    [EIcons.search]: <Search />,
    [EIcons.tg]: <Tg />,
    [EIcons.wp]: <Wp />,
    [EIcons.mail]: <Mail />,
    [EIcons.close]: <Close />,
    [EIcons.arrowBtn]: <ArrowBtn />,
    [EIcons.scrollIcon]: <ScrollIcon />,
    [EIcons.scrollIconDark]: <ScrollIcon isDark />,
  };

  const classes = cn(styles.iconContainer, styles[`s-${size}`]);
  return <div className={classes}>{icons[name]}</div>;
};

export default Icon;
