import styled from "styled-components";
import TalkCard from "../../components/TalkCard";
import StyledList from "../../components/StyledList";
import StyledMain from "../../components/StyledMain";
import { normalizeDate, normalizeRooms } from "../../helpers/normalize";
import {
  FooterNav,
  FooterLink,
  LinkText,
  HomeIcon,
  CalendarIcon,
} from "../../components/StyledFooter";
import { IoBookmarks } from "react-icons/io5";
import Image from "next/image";

function Bookmarks({
  talks,
  onBookmarkToggle,
  conferenceDays,
  conferenceRooms,
}) {
  return (
    <>
      <StyledMain>
        <StyledTitle>
          <IoBookmarks /> Bookmarks
        </StyledTitle>
        <StyledList>
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
        </StyledList>
      </StyledMain>
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
  background-color: #e6e4e5;
  position: fixed;
  top: 0;
  min-width: 400px;
  max-width: 500px;
  margin: 0 auto;
  color: #303030;
  padding: 1.5em 0 1em 1em;
  font-size: 1.5rem;
  font-family: OpenSans-Bold, sans-serif;
`;

const PlaceHolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const PlaceholderText = styled.p`
  padding: 50px;
  text-align: center;
  font-size: 1.2rem;
  color: #7a7a7a;
`;

export default Bookmarks;
