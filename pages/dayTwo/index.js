import { data } from "../../components/utils/data";
import RoomNav from "../../components/RoomNav";
import Header from "../../components/Header";
import StyledLink from "../../components/StyledLink";

const filteredByDay = data.filter((talk) => talk.date === "24.11.2022");
console.log(filteredByDay);

function DayTwo() {
  return (
    <>
      <Header>
        <StyledLink href="/dayOne">Mittwoch 23.11.</StyledLink>
        <StyledLink href="#" style={{ background: "darkgray" }}>
          Donnerstag 24.11.
        </StyledLink>
        <StyledLink href="/dayThree">Freitag 25.11.</StyledLink>
      </Header>
      <RoomNav talks={filteredByDay} />
    </>
  );
}

export default DayTwo;
export { filteredByDay };
