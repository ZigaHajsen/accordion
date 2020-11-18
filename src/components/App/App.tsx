import React, { useState } from 'react';
import data from '../../data.json';
import { QuestionModel } from '../../models/question.model';
import { Question } from '../';
import { Main, Container, Title, Info } from './AppStyle';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionModel[]>(data);

  return (
    <Main>
      <Container>
        <Title>questions and answers about login</Title>
        <Info>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </Info>
      </Container>
    </Main>
  );
};

export default App;
