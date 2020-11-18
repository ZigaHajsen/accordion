import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Article, Header, Title, Button, Info } from './QuestionStyle';

interface QuestionProps {
  title: string;
  info: string;
}

const Question: React.FC<QuestionProps> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <Article>
      <Header>
        <Title>{title}</Title>
        <Button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Button>
      </Header>
      {showInfo && <Info>{info}</Info>}
    </Article>
  );
};

export default Question;
