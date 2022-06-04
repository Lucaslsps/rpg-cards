import * as React from 'react';
import Container from '@material-ui/core/Container';
import {CardContainer, AttributeIcon, Title, SubTitle, AttributeContainer, TitleContainer, AttributeValue, SideContainer, LogoContainer, LogoIcon, LogoValue} from './styles'
import data from './data/characters.json'

interface ICharacter {
  name: string;
  race: string;
  class: string;
  attributes: IAttribute
}

interface IAttribute{
  strenght: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
}

export default function App() {
  const characters: ICharacter[] = data

  return (
    <Container maxWidth="sm">
      {characters.map(char=>
      <CardContainer>
        <TitleContainer>
          <Title>{char.name}</Title>
          <SubTitle>{`${char.race} / ${char.class}`}</SubTitle>
        </TitleContainer>
        <SideContainer>
          <AttributeContainer>
            <AttributeIcon src='/images/strength.svg'></AttributeIcon>
            <AttributeValue>{char.attributes.strenght}</AttributeValue>
            <AttributeIcon src='/images/dexterity.svg'></AttributeIcon>
            <AttributeValue>{char.attributes.dexterity}</AttributeValue>
            <AttributeIcon src='/images/constitution.svg'></AttributeIcon>
            <AttributeValue>{char.attributes.constitution}</AttributeValue>
            <AttributeIcon src='/images/intelligence.svg'></AttributeIcon>
            <AttributeValue>{char.attributes.intelligence}</AttributeValue>
            <AttributeIcon src='/images/wisdom.svg'></AttributeIcon>
            <AttributeValue>{char.attributes.wisdom}</AttributeValue>
            <AttributeIcon src='/images/charisma.svg'></AttributeIcon>
            <AttributeValue>{char.attributes.charisma}</AttributeValue>
          </AttributeContainer>
          <LogoContainer>
          <LogoIcon src='/images/mirror.svg' ></LogoIcon>
          <LogoValue>MV</LogoValue>
          </LogoContainer>
        </SideContainer>
      </CardContainer>)}
    </Container>
  );
}
