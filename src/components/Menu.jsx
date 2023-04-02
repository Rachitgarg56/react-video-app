import React from "react";
import styled from "styled-components";
import LamaTube from "../img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import { ExploreOutlined, HelpOutlineOutlined, SettingsBrightnessOutlined, SubscriptOutlined, VideoLibraryOutlined, HistoryOutlined, MusicNoteOutlined, SportsOutlined, GamesOutlined, MovieOutlined, NewspaperOutlined, LiveTvOutlined, SettingsOutlined, ReportOutlined, AccountCircleOutlined } from "@mui/icons-material";
// import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: black; //theme.bgLighter
  height: 100%; 
  color: white;
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
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
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

const Menu = () => {

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LamaTube} />
            LamaTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlined />
          Explore
        </Item>
        <Item>
          <SubscriptOutlined />
          Subscription
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button><AccountCircleOutlined />SIGN IN</Button>
        </Login>
        <Hr />
        <Title>BEST OF LAMATUBE</Title>
        <Item>
          <MusicNoteOutlined />
          Music
        </Item>
        <Item>
          <SportsOutlined />
          Sports
        </Item>
        <Item>
          <GamesOutlined />
          Gaming
        </Item>
        <Item>
          <MovieOutlined />
          Movies
        </Item>
        <Item>
          <NewspaperOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Setings
        </Item>
        <Item>
          <ReportOutlined />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item>
          <SettingsBrightnessOutlined />
          Light Mode {/*{darkMode ? "Light" : "Dark"*/}
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu;