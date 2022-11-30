import { useRouter } from "next/router";
import { data } from "../../../../helpers/data";
import styled from "styled-components";
import Link from "next/link";
import { dateFromNormalizedString } from "../../../../helpers/normalize";

function TalkDetails() {
  const router = useRouter();
  const { date, room, id } = router.query;
  const {
    title,
    authors,
    abstract,
    session,
    day,
    date: talkDate,
    time,
  } = data.find((talk) => talk.id === id);

  if (!id || !date || !room) return;

  const dateWithWeekday = dateFromNormalizedString(talkDate).toLocaleDateString(
    "de-DE",
    { weekday: "long", day: "numeric", month: "numeric", year: "numeric" }
  );

  return (
    <StyledMain>
      <StyledBackRoute href={`/${date}/${room}/`}>Back</StyledBackRoute>
      <article>
        <StyledTitle>{title}</StyledTitle>
        <StyledAuthorList>{authors.join(", ")}</StyledAuthorList>
        <StyledAbstract>{abstract}</StyledAbstract>
        <InfoContainer>
          <li>{session}</li>
          <li>{dateWithWeekday}</li>
          <li>{time}</li>
        </InfoContainer>
      </article>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  margin: 0 auto;
  padding: 0 2em;
`;

const StyledBackRoute = styled(Link)`
  text-decoration: none;
  color: black;
  width: 5em;
  height: 3.5em;
  padding: 1em 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 1.4rem;
`;

const StyledAuthorList = styled.h2`
  font-size: 1.1rem;
`;

const StyledAbstract = styled.p`
  text-align: justify;
`;
const InfoContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  list-style: none;
  padding: 0;
`;

export default TalkDetails;
