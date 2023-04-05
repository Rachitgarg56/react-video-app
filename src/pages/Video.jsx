import { AddTaskOutlined, ReplyOutlined, ThumbDownOffAltOutlined, ThumbUpOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import channelmg from '../img/channelimg.jpg';
import Comments from '../components/Comments';
import Card from '../components/Card';
import { useTheme } from "@mui/material";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {

  const theme = useTheme();

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="550" //720
            src="https://www.youtube.com/embed/ueDd6QzG-IY"
            title='Youtube video player'
            allow='accelerometer; autoplay; clipboard-white; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            style={{border: 0}}
          ></iframe>
        </VideoWrapper>
        <Title theme={theme}>Test Video</Title>
        <Details>
          <Info theme={theme}>7,660,908 views · June 22, 2023</Info>
          <Buttons theme={theme}>
            <Button>
              <ThumbUpOutlined /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlined /> Dislike
            </Button>
            <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr theme={theme} />
        <Channel>
          <ChannelInfo>
            <Image src={channelmg}></Image>
            <ChannelDetail theme={theme}>
              <ChannelName>React Dev</ChannelName>
              <ChannelCounter theme={theme}>200K subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, numquam autem iusto illo ut error quas alias suscipit aliquid repellat facere eos temporibus similique, deserunt dolorum? Quibusdam iusto reiciendis dolores.</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe> SUBSCRIBE</Subscribe>
        </Channel>
        <Hr theme={theme} />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video;




