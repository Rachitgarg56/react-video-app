import React from "react";  
import styled from "styled-components";
import Thumbnail from "../img/thumbnail.png";
import ChannelImg from "../img/channelimg.jpg";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

const Container = styled.div`
  width: ${(props) => props.type === "sm" && "360px"}; //360px;
  margin-bottom: ${(props) => props.type === 'sm' ? "10px" : "45px"};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === 'sm' ? "120px" : "200px"}; //202px
  background-color: #999;
  object-fit: cover;
  flex: 1;
  flex-shrink: 0;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
  flex-shrink: 0;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``

const Title = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px; 
`
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  width: max-content;
`

const Card = (props) => {

  const theme = useTheme();

    return (
      <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container type={props.type}>
          <Image type={props.type} src={Thumbnail} />
          <Details type={props.type}>
            <ChannelImage type={props.type} src={ChannelImg} />
            <Texts> 
              <Title theme={theme} >Test Video</Title>
              <ChannelName theme={theme} >React Dev</ChannelName>
              <Info theme={theme} >660,908 views · 1 day ago</Info>
            </Texts>
          </Details>
          </Container>
          </Link>
    )
}

export default Card;

