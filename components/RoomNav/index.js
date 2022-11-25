import TalkList from "../TalkList";
import TalkItem from "../TalkItem";
import TalkInfoWrapper from "../TalkInfoWrapper";
import FooterNav from "../FooterNav";
import StyledLink from "../StyledLink";
import StyledRoom from "../StyledRoom";
import { useState } from "react";

export default function RoomNav({ talks }) {
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
      <TalkList>
        {talksInCurrentRoom.map((talk) => (
          <TalkItem key={talk.id}>
            <h4>{talk.title}</h4>
            <h5>{talk.authors[0]}</h5>
            <TalkInfoWrapper>
              <p>{talk.session}</p>
              <p>{talk.day}</p>
              <p>{talk.date}</p>
              <p>{talk.time}</p>
            </TalkInfoWrapper>
          </TalkItem>
        ))}
      </TalkList>
      <FooterNav>
        <button onClick={handlePrevRoomButton}>PREV</button>
        <StyledLink href="/landingPage">Home</StyledLink>
        <button onClick={handleNextRoomButton}>NEXT</button>
      </FooterNav>
    </>
  );
}
