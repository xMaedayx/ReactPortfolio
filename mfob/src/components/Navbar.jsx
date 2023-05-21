import React from 'react';
import styled from 'styled-components';
import myImage from '../images/MFOB.png';
import myIcon from '../images/icon.png';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
  
`;

const Logo = styled.img`
  height: 50px;
 
`;

const List = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
`;

const ListItem = styled.div`
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px 0;
  background-color: #E8DEFC;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={myImage} alt="Logo" /> 
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Portfolio</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>Resume</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src={myIcon} alt="Icon" /> {/* Added alt attribute */}
          <Button>Hire Me!</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;