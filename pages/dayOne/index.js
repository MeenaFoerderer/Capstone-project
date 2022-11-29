import { data } from "../../helpers/data";
import RoomNav from "../../components/TalksPerRoom";
import Header from "../../components/Header";
import StyledLink from "../../components/StyledLink";

const filteredByDay = data.filter((talk) => talk.date === "23.11.2022");

function DayOne() {
  return (
    <>
      <Header>
        <StyledLink href="#" style={{ background: "darkgray" }}>
          Mittwoch 23.11.
        </StyledLink>
        <StyledLink href="/dayTwo">Donnerstag 24.11.</StyledLink>
        <StyledLink href="/dayThree">Freitag 25.11.</StyledLink>
      </Header>
      <RoomNav talks={filteredByDay} />
    </>
  );
}

export default DayOne;
export { filteredByDay };
