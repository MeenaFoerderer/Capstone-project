import { data } from "../../components/utils/data";
import Room from "../../components/Room";
import Header from "../../components/Header";

const filteredByDay = data.filter((talk) => talk.day === "23.11.");
console.log(filteredByDay);

function DayOne() {
  return (
    <>
      <Header>
        <h2>Mittwoch 23.11.</h2>
      </Header>
      <Room talks={filteredByDay} />
    </>
  );
}

export default DayOne;
export { filteredByDay };
