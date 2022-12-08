import { useRouter } from "next/router";
import {
  normalizeRooms,
  normalizeDate,
  dateFromNormalizedString,
} from "../../../helpers/normalize";
import styled from "styled-components";
import Link from "next/link";
import TalkCard from "../../../components/TalkCard";
import {
  FooterLink,
  LinkText,
  HomeIcon,
  BookmarkIcon,
  PrevRoomIcon,
  NextRoomIcon,
} from "../../../components/FooterElements";

function Room({ conferenceDays, conferenceRooms, talks, onBookmarkToggle }) {
  const router = useRouter();
  const { date, room } = router.query;

  if (!room || !date) return;

  const conferenceDaysLinks = conferenceDays.map((day) => {
    return (
      <DateLink key={`${day}`} href={`/${normalizeDate(day)}/${room}`}>
        <Weekday>
          {day
            .toLocaleDateString("de-DE", {
              weekday: "short",
            })
            .toUpperCase()}
        </Weekday>
        <p>
          {day.toLocaleDateString("de-DE", {
            day: "numeric",
            month: "numeric",
          })}
        </p>
      </DateLink>
    );
  });

  const indexOfCurrentRoom = conferenceRooms.map(normalizeRooms).indexOf(room);

  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const roomName = toTitleCase(room.replaceAll("-", " "));

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
      <StyledMain>
        <RoomHeadlineContainer>
          <RoomHeadline>{roomName}</RoomHeadline>
        </RoomHeadlineContainer>

        <ListContainer>
          {/* {filteredTalks.map((talk) => (
            <p key={talk.id}>{talk.session}</p>
          ))} */}
          <TalkList>
            {filteredTalks.map((talk) => (
              <TalkCard
                key={talk.id}
                talk={talk}
                onBookmarkToggle={onBookmarkToggle}
                date={date}
                room={room}
              />
            ))}
          </TalkList>
        </ListContainer>
      </StyledMain>

      <FooterNav>
        <FooterLink href={`/${date}/${conferencePrevRoom}`}>
          <PrevRoomIcon aria-label="previous room button" />
          <LinkText>Room</LinkText>
        </FooterLink>
        <FooterLink href={"/"}>
          <HomeIcon />
          <LinkText>Home</LinkText>
        </FooterLink>
        <FooterLink href={"/bookmarks"}>
          <BookmarkIcon />
          <LinkText>Bookmarks</LinkText>
        </FooterLink>
        <FooterLink href={`/${date}/${conferenceNextRoom}`}>
          <NextRoomIcon aria-label="next room button" />
          <LinkText>Room</LinkText>
        </FooterLink>
      </FooterNav>
    </>
  );
}

const StyledMain = styled.main`
  background-color: #e6e4e5;
  width: 100%;
`;

const Header = styled.div`
  background-color: #e6e4e5;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

const DateLink = styled(Link)`
  background-color: #f9f9f9;
  color: #616161;
  text-decoration: none;
  width: 8em;
  height: 3.5em;
  padding: 1em 3em;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const Weekday = styled.p`
  margin-right: 0.2em;
`;

const RoomHeadlineContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 3.5em;
  height: 4em;
  background: rgb(230, 228, 229);
  background: linear-gradient(
    0deg,
    rgba(230, 228, 229, 0.05646008403361347) 0%,
    rgba(230, 228, 229, 1) 77%
  );
`;

const RoomHeadline = styled.h1`
  width: 50%;
  padding: 0.3em 0;
  border-radius: 10px;
  background: #493843;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
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

const FooterNav = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default Room;
