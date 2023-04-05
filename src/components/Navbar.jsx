import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter}; 
  height: 56px;
  `

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({theme}) => theme.textSoft};
`

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({theme}) => theme.text};
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {

  const theme = useTheme();

  return (
        <Container theme={theme}>
            <Wrapper>
                <Search theme={theme}>
                    <Input placeholder="Search" theme={theme} />
                    <SearchOutlined />
                </Search>
                <Link to="signin" style={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleOutlined />
                    SIGN IN
                </Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
