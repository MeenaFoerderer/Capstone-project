import styled from "styled-components";
import Link from "next/link";
import { normalizeDate, normalizeRooms } from "../helpers/normalize";
import { BsCalendar4Week, BsJournalBookmarkFill } from "react-icons/bs";
import Image from "next/image";

function LandingPage({ conferenceDays, conferenceRooms }) {
  return (
    <StyledMain>
      <Background>
        <Image
          src="/images/landingpage02.jpeg"
          alt="historical museum hall with large whale skeleton hanging from the ceiling"
          fill
          style={{objectFit:"cover", objectPosition:"left"}}
        />
      </Background>

      <ContentContainer>
        <Header>
          <Presenter>ProEvent presents</Presenter>
          <Conference>
            <TitleName>JURASSIC TALK </TitleName>
            <YearWrapper>
              <TitleDecoration />
              <TitleYear>2022</TitleYear>
              <TitleDecoration />
            </YearWrapper>
            <Subtitle>Senckenberg Museum</Subtitle>
          </Conference>
        </Header>

        <LinkWrapper>
          <NavigationLink
            href={`/${normalizeDate(conferenceDays[0])}/${normalizeRooms(
              conferenceRooms[0]
            )}`}
          >
            <StyledCalendarIcon />
            Schedule
          </NavigationLink>
          <NavigationLink href={"../bookmarks"}>
            <StyledBookmarkIcon /> Bookmarks
          </NavigationLink>
        </LinkWrapper>
      </ContentContainer>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Background = styled.div`
  position: relative;
  top: 0;
  position: fixed;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
  max-width: 820px;
`;

const ContentContainer = styled.div`
  z-index: 10;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
`;

const Header = styled.header`
  margin: 0;
  margin-top: 2.5em;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  padding: 0.7em 0.5em;
`;

const Presenter = styled.p`
  color: #8e4a49;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: OpenSans-Bold, sans-serif;
`;

const Conference = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleDecoration = styled.div`
  background: #8e4a49;
  width: 6em;
  height: 1em;
  margin-bottom: 0.4em;
`;

const TitleName = styled.h1`
  color: var(--aubergine);
  font-size: 2.15rem;
  margin: 0;
  text-align: center;
  font-family: RubikDirt, sans-serif;
`;

const YearWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleYear = styled.h2`
  color: var(--aubergine);
  font-size: 2rem;
  margin: 0;
  margin-top: -0.2em;
  text-align: center;
  font-family: RubikDirt, sans-serif;
  margin-left: 0.1em;
  margin-right: 0.1em;
`;

const Subtitle = styled.h2`
  font-size: 1.3rem;
  color: var(--aubergine);
  margin: 0;
  padding-bottom: 0.2em;
  text-align: justify;
  letter-spacing: 0.17em;
  border-bottom: 2px solid #493843;
  font-family: OpenSans-Bold, sans-serif;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 0.8em;
`;

const NavigationLink = styled(Link)`
  width: 50%;
  height: 3em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  text-decoration: none;
  color: var(--aubergine);
  font-size: 1.1rem;
  font-family: OpenSans-Bold, sans-serif;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:focus:active {
    background-color: #f9f9f9;
    color: var(--aubergine);
  }
`;

const StyledCalendarIcon = styled(BsCalendar4Week)`
  font-size: 1.3rem;
  margin-right: 0.3em;
`;

const StyledBookmarkIcon = styled(BsJournalBookmarkFill)`
  font-size: 1.3rem;
  margin-right: 0.3em;
`;

export default LandingPage;
