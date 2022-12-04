import { useRouter } from "next/router";
import {
  normalizeRooms,
  normalizeDate,
  dateFromNormalizedString,
} from "../../../helpers/normalize";
import styled from "styled-components";
import Link from "next/link";
import {
  BookmarkActive,
  BookmarkInactive,
} from "../../../components/BookmarkIcons";
import {
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsHouseDoor,
} from "react-icons/bs";

function Room({ conferenceDays, conferenceRooms, talks, onBookmarkToggle }) {
  const router = useRouter();
  const { date, room } = router.query;

  if (!room || !date) return;

  const conferenceDaysLinks = conferenceDays.map((day) => {
    return (
      <DateLink key={`${day}`} href={`/${normalizeDate(day)}/${room}`}>
        {day.toLocaleDateString("de-DE", {
          weekday: "short",
          day: "numeric",
          month: "numeric",
        })}
      </DateLink>
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
      <RoomHeadlineContainer>
        <RoomHeadline>{room.toUpperCase().replaceAll("-", " ")}</RoomHeadline>
      </RoomHeadlineContainer>

      <ListContainer>
        <TalkList>
          {filteredTalks.map((talk) => (
            <TalkItem key={talk.id}>
              <StyledDiv>
                <StyledTalkLink href={`/${date}/${room}/talks/${talk.id}`}>
                  <StyledTalkTitle>{`${talk.title.substring(
                    0,
                    25
                  )}...`}</StyledTalkTitle>
                </StyledTalkLink>
                <Button
                  type={"button"}
                  onClick={() => {
                    onBookmarkToggle(talk.id);
                  }}
                >
                  {talk.isBookmarked ? (
                    <BookmarkActive />
                  ) : (
                    <BookmarkInactive />
                  )}
                </Button>
              </StyledDiv>

              <StyledSpeakerName>{talk.authors[0]}</StyledSpeakerName>
              <TalkInfoWrapper>
                <p>{talk.session}</p>
                <p>{talk.time}</p>
              </TalkInfoWrapper>
            </TalkItem>
          ))}
        </TalkList>
      </ListContainer>
      <FooterNav>
        <FooterLink href={`/${date}/${conferencePrevRoom}`}>
          <PrevRoomIcon />
          <LinkText>Room</LinkText>
        </FooterLink>

        <FooterLink href={"/"}>
          <HomeIcon />
          <LinkText>Home</LinkText>
        </FooterLink>

        <FooterLink href={`/${date}/${conferenceNextRoom}`}>
          <NextRoomIcon />
          <LinkText>Room</LinkText>
        </FooterLink>
      </FooterNav>
    </>
  );
}

const DateLink = styled(Link)`
  background-color: #2a384f;
  color: #ecfdf5;
  text-decoration: none;
  width: 8em;
  height: 3.5em;
  padding: 1em 3em;
  border-radius: 7px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  margin-top: 0.5em;
  margin-right: -0.8em;
  border: none;

  &:hover {
    background-color: transparent;
  }
`;

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

const RoomHeadlineContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 3.5em;
  height: 4em;
  background: rgb(229, 231, 235);
  background: linear-gradient(
    0deg,
    rgba(229, 231, 235, 0) 0%,
    rgba(229, 231, 235, 1) 86%
  );
`;

const RoomHeadline = styled.h1`
  width: 50%;
  height: 1.5em;
  border-radius: 10px;
  background: #fff;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`;

const TalkList = styled.ul`
  list-style: none;
  width: 400px;
  padding: 0;
  margin: 3.6em 0;
  display: inline-block;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTalkLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const TalkItem = styled.li`
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  color: #1f2937;
  margin-bottom: 0;
`;

const StyledSpeakerName = styled.h3`
  font-size: 1rem;
  margin: 1em 0;
`;

const FooterNav = styled.nav`
  background-color: #2a384f;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0.7em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 18%;
`;

const LinkText = styled.p`
  font-size: 0.85rem;
  margin: 0.1em 0 0 0;
  color: #f5f5f5;
`;

const PrevRoomIcon = styled(BsArrowLeftSquare)`
  font-size: 2em;
  color: #f5f5f5;
`;

const NextRoomIcon = styled(BsArrowRightSquare)`
  font-size: 2em;
  color: #f5f5f5;
`;

const HomeIcon = styled(BsHouseDoor)`
  font-size: 2.5em;
  color: #f5f5f5;
`;

export default Room;
