import TalkList from "../TalkList";
import TalkItem from "../TalkItem";
import TalkInfoWrapper from "../TalkInfoWrapper";
import NavBar from "../RoomNav";
import StyledLink from "../StyledLink";
import { useState } from "react";

export default function Room({ talks }) {
  const rooms = ["Great Hall", "Metro East", "Metro West"];
  const [roomIndex, setRoomIndex] = useState(0);

  const talksInCurrentRoom = talks.filter(
    (talk) => talk.room === rooms[roomIndex]
  );

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
      <h3>{rooms[roomIndex]}</h3>
      <TalkList>
        {talksInCurrentRoom.map((talk) => (
          <TalkItem key={talk.id}>
            <h4>{talk.title}</h4>
            <h5>{talk.authors[0]}</h5>
            <TalkInfoWrapper>
              <p>{talk.session}</p>
              <p>{talk.day}</p>
              <p>{talk.time}</p>
            </TalkInfoWrapper>
          </TalkItem>
        ))}
      </TalkList>
      <NavBar>
        <button onClick={handlePrevRoomButton}>PREV</button>
        <StyledLink href="/landingPage">Home</StyledLink>
        <button onClick={handleNextRoomButton}>NEXT</button>
      </NavBar>
    </>
  );
}