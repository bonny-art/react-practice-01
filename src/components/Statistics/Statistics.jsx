import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

// const icons = [
//   <FaRegThumbsUp />,
//   <MdPeople />,
//   <MdOutlineProductionQuantityLimits />,
//   <GiTreeDoor />,
// ];

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

export const Statistics = ({ title, statsData }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {statsData.map(({ id, title, total }, idx) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            Icon={icons[idx]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
