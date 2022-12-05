import styled from "styled-components";
import Link from "next/link";
import { normalizeDate, normalizeRooms } from "../helpers/normalize";
import { BsCalendar4Week } from "react-icons/bs";

function LandingPage({ conferenceDays, conferenceRooms }) {
  return (
    <LandingPageContainer>
      <LandingTitle>
        <LightText>ProEvent presents </LightText>JURASSIC TALK 2022 Toronto
      </LandingTitle>
      <NavigationLink
        href={`/${normalizeDate(conferenceDays[0])}/${normalizeRooms(
          conferenceRooms[0]
        )}`}
      >
        <StyledCalendarIcon />
        Conference Schedule
      </NavigationLink>
      <NavigationLink href={"../bookmarks"}>Bookmarks</NavigationLink>
    </LandingPageContainer>
  );
}

const LandingPageContainer = styled.div`
  text-align: left;
  margin: 0 auto;
  padding: 3em;
  width: 100vw;
  height: 100vh;
  background-color: #2a384f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LandingTitle = styled.h1`
  color: #4adf86;
  margin: 2em 0;
  font-size: 1.9rem;
`;

const LightText = styled.span`
  color: #fff;
  font-size: 1.6rem;
`;

const NavigationLink = styled(Link)`
  width: 100%;
  height: 3em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecfdf5;
  text-decoration: none;
  color: #2a384f;
  font-size: 1.1rem;
  font-weight: bold;
`;

const StyledCalendarIcon = styled(BsCalendar4Week)`
  margin-right: 0.5em;
  font-size: 1.3rem;
`;

export default LandingPage;
