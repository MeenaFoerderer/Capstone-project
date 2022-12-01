import { useRouter } from "next/router";
import {
  normalizeRooms,
  normalizeDate,
  dateFromNormalizedString,
} from "../../../helpers/normalize";
import FooterNav from "../../../components/FooterNav";
import StyledLink from "../../../components/StyledLink";
import styled from "styled-components";
import Link from "next/link";

function Room({ conferenceDays, conferenceRooms, talks }) {
  const router = useRouter();
  const { date, room } = router.query;

  if (!room || !date) return;

  const conferenceDaysLinks = conferenceDays.map((day) => {
    return (
      <StyledLink key={`${day}`} href={`/${normalizeDate(day)}/${room}`}>
        {day.toLocaleDateString("de-DE", {
          weekday: "short",
          day: "numeric",
          month: "numeric",
        })}
      </StyledLink>
    );
  });

  const indexOfCurrentRoom = conferenceRooms.map(normalizeRooms).indexOf(room);

  const conferenceNextRoom = normalizeRooms(
    conferenceRooms[
      indexOfCurrentRoom === conferenceRooms.length - 1
        ? 0
        : indexOfCurrentRoom + 1
    ]
  );

  const conferencePrevRoom = normalizeRooms(
    conferenceRooms[
      indexOfCurrentRoom === 0
        ? conferenceRooms.length - 1
        : indexOfCurrentRoom - 1
    ]
  );

  const filteredTalks = talks
    .filter((talk) => {
      const newDate = dateFromNormalizedString(talk.date);
      return normalizeDate(newDate) === date;
    })
    .filter((talk) => normalizeRooms(talk.room) === room);

  return (
    <>
      <Header>{conferenceDaysLinks}</Header>
      <RoomHeadline>{room.toUpperCase().replaceAll("-", " ")}</RoomHeadline>
      <ListContainer>
        <TalkList>
          {filteredTalks.map((talk) => (
            <StyledTalkLink
              key={talk.id}
              href={`/${date}/${room}/talks/${talk.id}`}
            >
              <TalkItem>
                <StyledTalkTitle>{`${talk.title.substring(
                  0,
                  25
                )}...`}</StyledTalkTitle>
                <StyledSpeakerName>{talk.authors[0]}</StyledSpeakerName>
                <TalkInfoWrapper>
                  <p>{talk.session}</p>
                  <p>{talk.time}</p>
                </TalkInfoWrapper>
              </TalkItem>
            </StyledTalkLink>
          ))}
        </TalkList>
      </ListContainer>
      <FooterNav>
        <StyledLink href={`/${date}/${conferencePrevRoom}`}>Prev</StyledLink>
        <StyledLink href={"/"}>Home</StyledLink>
        <StyledLink href={`/${date}/${conferenceNextRoom}`}>Next</StyledLink>
      </FooterNav>
    </>
  );
}

const Header = styled.div`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
`;

const RoomHeadline = styled.h1`
  position: fixed;
  top: 3em;
  width: 50%;
  height: 1.5em;
  margin-left: 25%;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #fff;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TalkList = styled.ul`
  list-style: none;
  width: 400px;
  padding: 0;
  margin: 3.6em 0;
  display: inline-block;
`;

const StyledTalkLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const TalkItem = styled.li`
  border: 2px solid gray;
  border-radius: 10px;
  padding: 0.5em 1em;
  margin: 1em;
`;

const TalkInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTalkTitle = styled.h2`
  font-size: 1.1rem;
`;

const StyledSpeakerName = styled.h3`
  font-size: 1rem;
`;

export default Room;
