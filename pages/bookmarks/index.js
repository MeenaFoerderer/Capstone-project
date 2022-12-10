import styled from "styled-components";
import TalkCard from "../../components/TalkCard";
import { normalizeDate, normalizeRooms } from "../../helpers/normalize";
import {
  FooterNav,
  FooterLink,
  LinkText,
  HomeIcon,
  BookmarkIcon,
  CalendarIcon,
} from "../../components/FooterElements";
import { IoBookmarks } from "react-icons/io5";
import Image from "next/image";

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
      <Header>
        <StyledTitle>
          <IoBookmarks /> Bookmarks
        </StyledTitle>
      </Header>

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
            <PlaceHolderContainer>
              <PlaceholderText>You have no bookmarks yet.</PlaceholderText>
              <Image
                src="/images/dinosaur.png"
                alt="small sauropod dinosaur icon"
                height={50}
                width={50}
              />
            </PlaceHolderContainer>
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

const Header = styled.div`
  background-color: #e6e4e5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-bottom: 1em;
`;

const StyledTitle = styled.h1`
  color: #303030;
  margin-left: 1em;
  margin-top: 1.5em;
  font-size: 1.5rem;
  font-family: OpenSans-Bold, sans-serif;
`;

const PlaceHolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const TalkList = styled.ul`
  list-style: none;
  width: 400px;
  padding: 0;
  margin-top: 5.5em;
  margin-bottom: 4.5em;
  display: inline-block;
`;

const PlaceholderText = styled.p`
  padding: 50px;
  text-align: center;
  font-size: 1.2rem;
  color: #7a7a7a;
`;

export default Bookmarks;
