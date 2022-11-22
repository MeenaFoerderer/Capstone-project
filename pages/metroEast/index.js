import { data } from "../../components/utils/data";
import Header from "../../components/Header";
import TalkList from "../../components/TalkList";
import TalkItem from "../../components/TalkItem";
import TalkInfoWrapper from "../../components/TalkInfoWrapper";
import NavBar from "../../components/RoomNav";
import StyledLink from "../../components/StyledLink";

function MetroEastRoom() {
  return (
    <>
      <Header>
        <h2>Metro East</h2>
      </Header>

      <TalkList>
        {[...data]
          .filter((talk) => talk.room === "Metro East")
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
        <StyledLink href="/greatHall">Prev</StyledLink>
        <StyledLink href="/landingPage">Home</StyledLink>
        <StyledLink href="/libertyHall">Next</StyledLink>
      </NavBar>
    </>
  );
}

export default MetroEastRoom;
