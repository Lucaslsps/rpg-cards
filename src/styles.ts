import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 834px;
    width: 514px;
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 80%, rgba(0,0,0,1)), url('/images/samex.png');
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const Title = styled.span`
/*     writing-mode: vertical-lr;
    transform: rotate(180deg);
    height: 100%; */
    font-weight: bold;
    font-size: 100px;
    font-family: medievalSharp;
    text-shadow: 2px 2px white;
    line-height: 1;
    color: white;
`

export const SubTitle = styled.span`
    /* writing-mode: vertical-lr;
    transform: rotate(180deg);
    height: 100%; */
    font-weight: bold;
    font-size: 50px;
    font-family: arial;
    text-shadow: 2px 2px white;
    line-height: 1;
`

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    border-left: 2px solid black;
    padding: 6px;
    backdrop-filter: blur(10px);
    filter: drop-shadow(2px 4px 6px black);
`

export const AttributeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 100%;

`

export const AttributeIcon = styled.img`
    height: 50px;
    width: 50px;
`

export const AttributeValue = styled.span`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color:white;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoIcon = styled.img`
    height: 30px;
    width: 30px;
`

export const LogoValue = styled.span`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color:white;
    font-family: Dancing Script;
    font-size: 20px;
`