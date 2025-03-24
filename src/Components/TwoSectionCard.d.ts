import { FC } from 'react';
interface TwoSectionCardProps {
    subTitle: string;
    mainTitle: string;
    description: string;
    image: string;
    isReverseDir?: boolean;
}
declare const TwoSectionCard: FC<TwoSectionCardProps>;
export default TwoSectionCard;
