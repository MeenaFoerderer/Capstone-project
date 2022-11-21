import { data } from "../../components/utils/data";
import Header from "../../components/Header";
import TalkList from "../../components/TalkList";
import TalkItem from "../../components/TalkItem";
import TalkInfoWrapper from "../../components/TalkInfoWrapper";
import RoomNav, { NavBar, NavButton } from "../../components/RoomNav";
import { useRouter } from "next/router";

function LibertyHallRoom() {
  const router = useRouter();

  return (
    <>
      <Header>
        <h2>Liberty Hall</h2>
      </Header>

      <TalkList>
        {[...data]
          .filter((talk) => talk.room === "Metro West")
          .sort((a, b) => {
            let timeA = a.time;
            let timeB = b.time;

            return timeA < timeB ? -1 : 1;
          })
          .sort((a, b) => {
            let sessionA = a.session;
            let sessionB = b.session;

            return sessionA < sessionB ? -1 : 1;
          })
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
        <NavButton type="button" onClick={() => router.push("/metroEast")}>
          Prev
        </NavButton>
        <NavButton type="button" onClick={() => router.push("/landingPage")}>
          Home
        </NavButton>
        <NavButton type="button" onClick={() => router.push("/greatHall")}>
          Next
        </NavButton>
      </NavBar>
    </>
  );
}

export default LibertyHallRoom;
