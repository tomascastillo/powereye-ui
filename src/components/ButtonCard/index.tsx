import React from 'react';
import { Card, Typography } from 'antd';
import './index.scss';
import ChartImage from '../../assets/chart.png';
import ConfigImage from '../../assets/config.png';

const { Title } = Typography;

export const ButtonCard = (props: ButtonCardProps) => {

  const { title, image, onClick } = props;

  return <Card className={'buttom-card'} onClick={onClick}>
    <img alt={title} src={ image === 'chart' ? ChartImage : ConfigImage } />
    <Title level={3}>{title}</Title>
  </Card>;

};

export interface ButtonCardProps {
  title: string;
  image: string;
  onClick: () => void;
}