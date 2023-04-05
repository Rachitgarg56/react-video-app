import React from "react";  
import styled from "styled-components";
import Youtube from "../img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import { ExploreOutlined, HelpOutlineOutlined, SettingsBrightnessOutlined, SubscriptOutlined, VideoLibraryOutlined, HistoryOutlined, MusicNoteOutlined, SportsOutlined, GamesOutlined, MovieOutlined, NewspaperOutlined, LiveTvOutlined, SettingsOutlined, ReportOutlined, AccountCircleOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bg};
  height: 100%;
  color: ${({theme}) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover{
    background-color: ${({theme}) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div``
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`

const Menu = ({darkMode, setDarkMode}) => {

  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Youtube} />
            YOUTUBE
          </Logo>
        </Link>
        <Item theme={theme}>
          <HomeIcon />
          Home
        </Item>
        <Item theme={theme}>
          <ExploreOutlined />
          Explore
        </Item>
        <Item theme={theme}>
          <SubscriptOutlined />
          Subscription
        </Item>
        <Hr theme={theme}/>
        <Item theme={theme}>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item theme={theme}>
          <HistoryOutlined />
          History
        </Item>
        <Hr theme={theme}/>
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
          <Button>
            <AccountCircleOutlined />
            SIGN IN
            </Button>
            </Link>
        </Login>
        <Hr theme={theme}/>
        <Title>BEST OF YOUTUBE</Title>
        <Item theme={theme}>
          <MusicNoteOutlined />
          Music
        </Item>
        <Item theme={theme}>
          <SportsOutlined />
          Sports
        </Item>
        <Item theme={theme}>
          <GamesOutlined />
          Gaming
        </Item>
        <Item theme={theme}>
          <MovieOutlined />
          Movies
        </Item>
        <Item theme={theme}>
          <NewspaperOutlined />
          News
        </Item>
        <Item theme={theme}>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr theme={theme}/>
        <Item theme={theme}>
          <SettingsOutlined />
          Setings
        </Item>
        <Item theme={theme}>
          <ReportOutlined />
          Report
        </Item>
        <Item theme={theme}>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item theme={theme} onClick={() => setDarkMode((current) => !current)}>
          <SettingsBrightnessOutlined />
           {theme.bg === "#181818" ? "Dark" : "Light"} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu;
