import React from 'react';
import styled from 'styled-components';
import { useTheme } from "@mui/material";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
 
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`
const Date = styled.span` 
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`
const Text = styled.span`
  font-size: 14px;
`
 

const Comment = () => {

  const theme = useTheme();
  
    return (
        <Container>
            <Avatar src='https://cdnb.artstation.com/p/assets/images/images/050/554/563/large/maryssa-masters-mr-beast-logo-emission.jpg?1655136794' />
            <Details theme={theme}>
                <Name>Rachit Garg <Date theme={theme}>1 day ago</Date></Name>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto inventore ad minima accusantium quaerat sunt reiciendis! Nulla obcaecati adipisci deserunt ad suscipit quibusdam voluptates non cumque velit architecto? Dolor, vero!</Text>
            </Details>
        </Container>
    )
}
 
export default Comment;