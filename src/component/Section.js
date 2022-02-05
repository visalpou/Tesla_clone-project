import React from 'react';
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap style={{
      backgroundImage:`url(/img/${backgroundImg})`
    }}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>   
        </Fade>
        <Fade bottom>
            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>
                { rightBtnText &&
                    <RightButton>{rightBtnText}</RightButton>
                }
            </ButtonGroup>
        </Fade>      
        <Icon>
            <DownArrow src='/img/down-arrow.svg' />     
        </Icon>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
    height:100vh;
    background-size:cover;
    background-position:center;
    
`
const ItemText = styled.div`
    text-align:center;
    padding-top:20vh;
`
const ButtonGroup = styled.div`
    display:flex;
    justify-content:center;
    padding-top:60vh;
    @media (max-width:768px){
      flex-direction:column
    }
`
const LeftButton = styled.div`
    border: 1px solid;
    background-color:#3c3f44;
    color:white;
    border-radius:50px;
    padding:15px 60px;
    margin: 0px 10px;
    cursor:pointer;
`
const RightButton = styled.div`
    background-color:white;
    color:#3c3f44;
    border-radius:50px;
    padding:15px 60px;
    cursor:pointer;
`
const Icon = styled.div`
    display:flex;
    justify-content:center;
`

const DownArrow = styled.img`
    height:40px;
    color:black;
    animation: animateDown infinite 1.5s;
`
