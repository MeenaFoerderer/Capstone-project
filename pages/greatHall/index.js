import { data } from "../../components/utils/data";
import Header from "../../components/Header";
import TalkList from "../../components/TalkList";
import TalkItem from "../../components/TalkItem";
import TalkInfoWrapper from "../../components/TalkInfoWrapper";
import RoomNav, { NavBar, NavButton } from "../../components/RoomNav";
import Link from "next/link";

function GreatHallRoom() {
  return (
    <>
      <Header>
        <h2>Great Hall</h2>
      </Header>
      <TalkList>
        {data
          .filter((talk) => talk.room === "Great Hall")
          .map((talk) => (
            <TalkItem key={talk.id}>
              <h4>{talk.title}</h4>
              <h5>{talk.authors[0]}</h5>
              <TalkInfoWrapper>
                <p>{talk.session}</p>
                <p>{talk.time}</p>
              </TalkInfoWrapper>
            </TalkItem>
          ))}
      </TalkList>
      <NavBar>
        <Link href="../libertyHall">
          <NavButton>Prev</NavButton>
        </Link>
        <Link href="../metroEast">
          <NavButton>Next</NavButton>
        </Link>
      </NavBar>
    </>
  );
}

export default GreatHallRoom;
