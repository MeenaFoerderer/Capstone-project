import { useRouter } from "next/router";
import {
  normalizeRooms,
  normalizeDate,
  dateFromNormalizedString,
} from "../../../helpers/normalize";
import styled from "styled-components";
import Link from "next/link";
import TalkCard from "../../../components/TalkCard";
import StyledList from "../../../components/StyledList";
import StyledMain from "../../../components/StyledMain";
import {
  FooterNav,
  FooterLink,
  LinkText,
  HomeIcon,
  BookmarkIcon,
  PrevRoomIcon,
  NextRoomIcon,
} from "../../../components/StyledFooter";

function Room({ conferenceDays, conferenceRooms, talks, onBookmarkToggle }) {
  const router = useRouter();
  const { date, room } = router.query;
  const pathname = router.asPath;

  if (!room || !date) return;

  const conferenceDaysLinks = conferenceDays.map((day) => {
    return (
      <DateLink
        key={`${day}`}
        href={`/${normalizeDate(day)}/${room}`}
        active={pathname === `/${normalizeDate(day)}/${room}` ? 1 : 0}
      >
        <Weekday>
          {day
            .toLocaleDateString("en-EN", {
              weekday: "short",
            })
            .toUpperCase()}
        </Weekday>
        <p>
          {day.toLocaleDateString("en-EN", {
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
      <>
        <RoomHeadlineContainer>
          <RoomHeadline>{roomName}</RoomHeadline>
        </RoomHeadlineContainer>
        <StyledMain>
          <StyledList>
            {filteredTalks.map((talk) => (
              <TalkCard
                key={talk.id}
                talk={talk}
                onBookmarkToggle={onBookmarkToggle}
                date={date}
                room={room}
              />
            ))}
          </StyledList>
        </StyledMain>
      </>

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

// const StyledMain = styled.main`
//   background-color: #e6e4e5;
//   width: 100%;
// `;

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
  color: #616161;
  text-decoration: none;
  width: 8em;
  height: 3.5em;
  padding: 1em 3em;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: OpenSans-SemiBold, sans-serif;

  background: ${(props) => (props.active ? "#787272" : "#f9f9f9")};
  color: ${(props) => (props.active ? "#fafafa" : "#616161")};
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

export default Room;
