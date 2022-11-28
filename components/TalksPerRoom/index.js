import TalkList from "../TalkList";
import TalkItem from "../TalkItem";
import TalkInfoWrapper from "../TalkInfoWrapper";
import FooterNav from "../FooterNav";
import StyledLink from "../StyledLink";
import StyledRoom from "../RoomHeadline";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

function TalksPerRoom({ talks }) {
  const rooms = ["Great Hall", "Liberty Hall", "Metro West"];
  const [roomIndex, setRoomIndex] = useState(0);

  const talksInCurrentRoom = talks
    .filter((talk) => talk.room === rooms[roomIndex])
    .sort((a, b) => {
      let timeA = a.time;
      let timeB = b.time;

      return timeA < timeB ? -1 : 1;
    })
    .sort((a, b) => {
      let sessionA = a.session;
      let sessionB = b.session;

      return sessionA < sessionB ? -1 : 1;
    });

  function handleNextRoomButton() {
    if (roomIndex < rooms.length - 1) {
      setRoomIndex((prev) => prev + 1);
    }
    if (roomIndex === 2) {
      setRoomIndex(0);
    }
  }

  function handlePrevRoomButton() {
    if (roomIndex < rooms.length) {
      setRoomIndex((prev) => prev - 1);
    }
    if (roomIndex === 0) {
      setRoomIndex(2);
    }
  }
  return (
    <>
      <StyledRoom>{rooms[roomIndex]}</StyledRoom>
      <ListContainer>
        <TalkList>
          {talksInCurrentRoom.map((talk) => (
            <Link key={talk.id} href={`/talks/${talk.id}`}>
              <TalkItem>
                <StyledTalkTitle>{talk.title}</StyledTalkTitle>
                <StyledSpeakerName>{talk.authors[0]}</StyledSpeakerName>
                <TalkInfoWrapper>
                  <p>{talk.session}</p>
                  <p>{talk.day}</p>
                  <p>{talk.date}</p>
                  <p>{talk.time}</p>
                </TalkInfoWrapper>
              </TalkItem>
            </Link>
          ))}
        </TalkList>
      </ListContainer>
      <FooterNav>
        <button onClick={handlePrevRoomButton}>PREV</button>
        <StyledLink href="/landingPage">Home</StyledLink>
        <button onClick={handleNextRoomButton}>NEXT</button>
      </FooterNav>
    </>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTalkTitle = styled.h2`
  font-size: 1.1rem;
`;

const StyledSpeakerName = styled.h3`
  font-size: 1rem;
`;

export default TalksPerRoom;
