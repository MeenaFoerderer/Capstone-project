import styled from "styled-components";
import TalkCard from "../../components/TalkCard";
import { normalizeDate, normalizeRooms } from "../../helpers/normalize";
import {
  FooterLink,
  LinkText,
  HomeIcon,
  BookmarkIcon,
  CalendarIcon,
} from "../../components/FooterElements";
import { IoBookmarks } from "react-icons/io5";

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
      <StyledTitle>
        <IoBookmarks /> Bookmarks
      </StyledTitle>
      <main>
        <TalkList>
          {talks.map(
            (talk) =>
              talk.isBookmarked && (
                <TalkCard
                  key={talk.id}
                  talk={talk}
                  onBookmarkToggle={onBookmarkToggle}
                />
              )
          )}
          {!talks.find((talk) => talk.isBookmarked === true) ? (
            <PlaceholderText>You have no bookmarks yet.</PlaceholderText>
          ) : (
            ""
          )}
        </TalkList>
      </main>
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

const StyledTitle = styled.h1`
  color: #303030;
  margin-left: 1em;
  margin-top: 1.5em;
  font-size: 1.5rem;
`;

const TalkList = styled.ul`
  list-style: none;
  width: 400px;
  padding: 0;
  margin-top: 1em;
  margin-bottom: 4.5em;
  display: inline-block;
`;

const FooterNav = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.5em 0.7em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const PlaceholderText = styled.p`
  padding: 50px;
  text-align: center;
  font-size: 1.2rem;
  color: #7a7a7a;
`;

export default Bookmarks;
