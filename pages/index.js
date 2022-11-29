import styled from "styled-components";
import StyledLink from "../components/StyledLink";

function LandingPage({ conferenceDays, conferenceRooms }) {
  return (
    <LandingPageContainer>
      <h1>Welcome to Jurassic Talk 2022 Toronto</h1>
      <NavWrapper>
        <StyledLink href="/infoPage">Info</StyledLink>
        <StyledLink href={`/${conferenceDays[0]}/${conferenceRooms[0]}`}>
          Schedule
        </StyledLink>
      </NavWrapper>
    </LandingPageContainer>
  );
}

const LandingPageContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 3em;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-top: 6em;
`;

export default LandingPage;
