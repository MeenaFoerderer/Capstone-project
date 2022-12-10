import { useRouter } from "next/router";
import {
  FooterNav,
  FooterLink,
  LinkText,
  HomeIcon,
  BookmarkIcon,
} from "../../../../components/FooterElements";
import styled from "styled-components";
import { css } from "styled-components";
import { dateFromNormalizedString } from "../../../../helpers/normalize";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  BookmarkActive,
  BookmarkInactive,
} from "../../../../components/BookmarkIcons";
import { TfiEmail } from "react-icons/tfi";
import { useState } from "react";

function TalkDetails({ talks, onBookmarkToggle }) {
  const [isOpen, setIsOpen] = useState(false);
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
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
              }}
            >
              {firstAuthor}
              <MailIcon />
            </StyledFirstAuthor>
            {coAuthors}
          </StyledAuthorList>
          {isOpen && (
            <Modal>
              <ModalHeader>Do you want to send an email?</ModalHeader>
              <ButtonWrapper>
                <Button
                  type="button"
                  variant="cancel"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="button" variant="continue">
                  <MailLink
                    href={`mailto:${firstAuthor.toLowerCase()}@mail.com`}
                  >
                    Continue
                  </MailLink>
                </Button>
              </ButtonWrapper>
            </Modal>
          )}
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
  color: #292929;
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

const Modal = styled.div`
  background: #e6e4e5;
  position: fixed;
  top: 35%;
  width: 311px;
  max-width: 85vw;
  height: 180px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const ModalHeader = styled.h3`
  margin: 0;
  color: #292929;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-items: space-between;
  align-items: center;
  width: 85%;
  gap: 1em;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  width: 50%;
  padding: 0.8em 0;
  font-size: 1rem;
  font-family: OpenSans-SemiBold, sans-serif;
  cursor: pointer;

  ${({ variant }) =>
    variant === "continue" &&
    css`
      background: #493843;
      color: #fff;
    `}

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      background: #fff;
      color: #493843;
    `}
`;

const MailLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export default TalkDetails;
