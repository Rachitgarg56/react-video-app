import React from "react";
import styled from "styled-components";
import Thumbnail from "../img/thumbnail.png";
import ChannelImg from "../img/channelimg.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 280px; //360px
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 200px; //202px
  background-color: #999;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``
const Title = styled.h1`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: black; //${({ theme }) => theme.text}
`
const ChannelName = styled.h2`
  margin: 0;
  font-size: 14px;
  color: black; //${({ theme }) => theme.textSoft}
  margin: 9px 0px; 
`
const Info = styled.div`
  font-size: 14px;
  color: black; //${({ theme }) => theme.textSoft}
`

const Card = () => {
    return (
      <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container>
          <Image src={Thumbnail} />
          <Details>
            <ChannelImage src={ChannelImg} />
            <Texts>
              <Title>Test Video</Title>
              <ChannelName>Lama Dev</ChannelName>
              <Info>660,908 views · 1 day ago</Info>
            </Texts>
          </Details>
          </Container>
          </Link>
    )
}

export default Card;

