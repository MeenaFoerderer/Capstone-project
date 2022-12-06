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
          alt="smth"
          height={667}
          width={375}
        />
      </Background>

      <StyledContainer>
        <Header>
          <PresenterText>ProEvent presents</PresenterText>
          <Title>JURASSIC TALK 2022</Title>
          <Subtitle>Senckenberg Museum</Subtitle>
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
      </StyledContainer>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  text-align: left;
  margin: 0 auto;
  padding: 3em;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  overflow-y: hidden;
`;

const StyledContainer = styled.div`
  z-index: 10;
`;

const Header = styled.div`
  margin: 0;
  margin-top: 2.5em;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 0.5em;
`;

const PresenterText = styled.p`
  color: #8e4a49;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Title = styled.h1`
  color: #493843;
  font-size: 1.9rem;
  margin: 0;
  text-align: center;
  letter-spacing: 0.05em;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #493843;
  margin: 0;
  text-align: justify;
  letter-spacing: 0.01em;
`;

const LinkWrapper = styled.div`
  margin-top: 20em;
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
  color: #493843;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
