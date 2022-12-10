import { useRouter } from "next/router";
import {
  FooterNav,
  FooterLink,
  LinkText,
  HomeIcon,
  BookmarkIcon,
} from "../../../../components/FooterElements";
import styled from "styled-components";
import { dateFromNormalizedString } from "../../../../helpers/normalize";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  BookmarkActive,
  BookmarkInactive,
} from "../../../../components/BookmarkIcons";
import { TfiEmail } from "react-icons/tfi";

function TalkDetails({ talks, onBookmarkToggle }) {
  const router = useRouter();
  const { date, room, id } = router.query;
  if (!id || !date || !room) return;
  const {
    title,
    authors,
    abstract,
    session: { name, bgColor },
    room: talkRoom,
    day,
    date: talkDate,
    time,
    id: talkId,
    isBookmarked,
  } = talks.find((talk) => talk.id === id);

  const dateWithWeekday = dateFromNormalizedString(talkDate).toLocaleDateString(
    "en-EN",
    { weekday: "long", day: "numeric", month: "numeric", year: "numeric" }
  );

  const firstAuthor = authors[0];
  const coAuthors = ` ${authors.slice(1).join(", ")}`;

  return (
    <>
      <StyledMain>
        <StyledArticle>
          <IconWrapper>
            <BackButton aria-label="back button" onClick={() => router.back()}>
              <CloseIcon />
            </BackButton>
            <ToggleButton
              aria-label="toggle bookmark button"
              type={"button"}
              onClick={() => {
                onBookmarkToggle(talkId);
              }}
            >
              {isBookmarked ? <BookmarkActive /> : <BookmarkInactive />}
            </ToggleButton>
          </IconWrapper>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthorList>
            <StyledFirstAuthor
              href={`mailto:${firstAuthor.toLowerCase()}@mail.com`}
            >
              {firstAuthor}
              <MailIcon />
            </StyledFirstAuthor>
            {coAuthors}
          </StyledAuthorList>
          <StyledAbstract>{abstract}</StyledAbstract>
          <StyledSession style={{ background: bgColor }}>{name}</StyledSession>
          <InfoContainer>
            <li>{dateWithWeekday}</li>
            <li>{talkRoom}</li>
            <li>{time}</li>
          </InfoContainer>
        </StyledArticle>
      </StyledMain>
      <FooterNav>
        <FooterLink href={"/"}>
          <HomeIcon />
          <LinkText>Home</LinkText>
        </FooterLink>
        <FooterLink href={`/../bookmarks`}>
          <BookmarkIcon />
          <LinkText>Bookmarks</LinkText>
        </FooterLink>
      </FooterNav>
    </>
  );
}

const StyledMain = styled.div`
  margin: 0 auto;
  padding: 1em;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseIcon = styled(IoCloseCircleOutline)`
  font-size: 2.2rem;
  color: #6b6b6b;
  margin-left: -0.3em;
  margin-top: -0.15em;
`;

const StyledArticle = styled.article`
  background-color: #fff;
  padding: 1em;
  border-radius: 10px;
  margin-top: 0;
  margin-bottom: 4em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StyledTitle = styled.h1`
  font-size: 1.1rem;
  color: #292929;
  font-family: OpenSans-Bold, sans-serif;
`;

const StyledAuthorList = styled.h2`
  font-size: 0.9rem;
  color: #292929;
`;

const StyledFirstAuthor = styled.a`
  background-color: #f5f5f5;
  padding: 0.3em 0.5em;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #292929;
`;

const MailIcon = styled(TfiEmail)`
  margin-left: 0.3em;
  color: #292929;
`;

const StyledAbstract = styled.p`
  text-align: justify;
  font-size: 0.9rem;
  color: #292929;
`;

const StyledSession = styled.p`
  font-size: 0.9rem;
  padding: 0.5em 1em;
  border-radius: 5px;
  display: inline;
`;

const InfoContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  list-style: none;
  padding: 0;
  color: #292929;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  margin-top: -5px;
  margin-right: -10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default TalkDetails;
