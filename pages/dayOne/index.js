import { data } from "../../components/utils/data";
import RoomNav from "../../components/RoomNav";
import Header from "../../components/Header";
import StyledLink from "../../components/StyledLink";

const filteredByDay = data.filter((talk) => talk.date === "23.11.2022");
console.log(filteredByDay);

function DayOne() {
  return (
    <>
      <Header>
        <StyledLink href="#">Mittwoch 23.11.</StyledLink>
        <StyledLink href="/dayTwo">Donnerstag 24.11.</StyledLink>
        <StyledLink href="/dayThree">Freitag 25.11.</StyledLink>
      </Header>
      <RoomNav talks={filteredByDay} />
    </>
  );
}

export default DayOne;
export { filteredByDay };
