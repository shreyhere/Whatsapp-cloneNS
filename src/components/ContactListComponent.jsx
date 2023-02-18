import { Chat, DonutLarge, MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { contactList } from "../mockData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.6;
  height: 100%;
  width: 100%;
  border-right: 1px solid #dadada;
`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
`;

const SearchBox = styled.div`
  display: flex;
  background: #f6f6f6;
  padding: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
`;

const SearchIcon = styled.img`
  width: 28px;
  height: 28 px;
`;
export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  margin-left: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 94%;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  padding: 15px 12px;
  :hover {
    background: #ebebeb;
  }
`;
const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 12px;
`;

const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`;

const MessageText = styled.span`
  width: 100%;
  font-size: 14px;
  margin-top: 3px;
  color: rgda(0, 0, 0, 0.8);
`;

const MessageTime = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
`;

const HeaderSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin-left: 340px;
  min-width: 10vw;
`;
const ContactComponent = (props) => {
  const { userData, setChat } = props;
  return (
    <ContactItem onClick={() => setChat(userData)}>
      <ProfileIcon src={userData.profilePic} />

      <ContactInfo>
        <ContactName>{userData.name}</ContactName>
        <MessageText>{userData?.lastText}</MessageText>
      </ContactInfo>
      <MessageTime>{userData?.lastTextTime}</MessageTime>
    </ContactItem>
  );
};

const ContactListComponent = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contactList.filter((userData) =>
    userData.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Container>
      <ProfileInfoDiv>
        <HeaderSide>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </HeaderSide>
        <ProfileImage src="./pp1.png" />
      </ProfileInfoDiv>
      <SearchBox>
        <SearchContainer>
          <SearchIcon
            src={
              "https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png"
            }
          />
          <SearchInput
            placeholder="Search or start new chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>
      </SearchBox>
      {contactList.map((userData) => (
        <ContactComponent userData={userData} setChat={props.setChat} />
      ))}
      {filteredContacts.map((userData) => (
        <ContactComponent userData={userData} />
      ))}
    </Container>
  );
};

export default ContactListComponent;
