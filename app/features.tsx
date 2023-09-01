import Image from 'next/image';

import planterIcon from './images/planter.svg';
import handgrowthIcon from './images/handgrowth.svg';
import flowerIcon from './images/flower.svg';
import gardenImage from './images//garden.jpg';

export const PlanterIcon = () => (
  <Image alt="" width={40} height={40} objectFit="contain" src={planterIcon} />
);

export const HandGrowthIcon = () => (
  <Image
    alt=""
    width={40}
    height={40}
    objectFit="contain"
    src={handgrowthIcon}
  />
);

export const FlowerIcon = () => (
  <Image alt="" width={40} height={40} objectFit="contain" src={flowerIcon} />
);

export const Greenhouse = () => (
  <Image alt="Small greenhouse" layout="fill" src={gardenImage} priority />
);
