import styled from "styled-components";
import TalkCard from "../../components/TalkCard";
import { normalizeDate, normalizeRooms } from "../../helpers/normalize";
import {
  FooterLink,
  FooterNav,
  LinkText,
  HomeIcon,
  BookmarkIcon,
  CalendarIcon,
} from "../../components/FooterNav";

function Bookmarks({
  talks,
  onBookmarkToggle,
  date,
  room,
  conferenceDays,
  conferenceRooms,
}) {
  return (
    <>
      <h1>Bookmarks</h1>

      <TalkList>
        {talks.map(
          (talk) =>
            talk.isBookmarked && (
              <TalkCard
                key={talk.id}
                talk={talk}
                onBookmarkToggle={onBookmarkToggle}
                date={date}
                room={room}
              />
            )
        )}
      </TalkList>

      <FooterNav>
        <FooterLink href={"/"}>
          <HomeIcon />
          <LinkText>Home</LinkText>
        </FooterLink>
        <FooterLink
          href={`/${normalizeDate(conferenceDays[0])}/${normalizeRooms(
            conferenceRooms[0]
          )}`}
        >
          <CalendarIcon />
          <LinkText>Schedule</LinkText>
        </FooterLink>
      </FooterNav>
    </>
  );
}

const TalkList = styled.ul`
  list-style: none;
  width: 400px;
  padding: 0;
  margin: 3.6em 0;
  display: inline-block;
`;

export default Bookmarks;
