import { Flex, Layout, Typography } from 'antd';
import { FC } from 'react';
import { ReactNode } from 'react';
import useIsMobile from '../Hooks/UseIsMobile';

const { Text, Title, Paragraph } = Typography;

interface TwoSectionCardProps {
  subTitle: string;
  mainTitle: string;
  description: string;
  image: string;
  isReverseDir?: boolean;
}

const TwoSectionCard: FC<TwoSectionCardProps> = ({
  subTitle,
  mainTitle,
  description,
  image,
  isReverseDir,
}) => {
  const isMobile = useIsMobile();

  return (
    <Flex
      gap="large"
      {...{
        style: {
          paddingTop: 'clamp(40px, 10vw, 140px)',
          paddingRight: 'clamp(16px, 8vw, 128px)',
          paddingBottom: 'clamp(40px, 5vw, 100px)',
          paddingLeft: 'clamp(16px, 8vw, 128px)',
          flexDirection: isReverseDir
            ? `${isMobile ? 'column' : 'row'}-reverse`
            : `${isMobile ? 'column' : 'row'}`,
        },
      }}
    >
      <Flex
        vertical
        justify="center"
        {...{ style: { width: !isMobile ? '50%' : '100%' } }}
      >
        <Text
          {...{
            style: {
              textAlign: isMobile ? 'center' : 'left',
              color: '#D90429',
            },
          }}
        >
          {subTitle}
        </Text>
        <Title {...{ style: { textAlign: isMobile ? 'center' : 'left' } }}>
          {mainTitle}
        </Title>
        <Paragraph {...{ style: { textAlign: isMobile ? 'center' : 'left' } }}>
          {description}
        </Paragraph>
      </Flex>

      <div>
        <img
          src={image}
          alt="Card Image"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </Flex>
  );
};

export default TwoSectionCard;
