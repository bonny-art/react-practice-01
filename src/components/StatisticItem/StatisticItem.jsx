import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
// import { IconContext } from 'react-icons';

export const StatisticItem = ({ title, total, Icon }) => {
  return (
    <StatisticBox>
      {/* <IconContext.Provider value={{ color: 'blue', size: 26 }}>
        {icon}
      </IconContext.Provider> */}
      <Icon size={26} />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
