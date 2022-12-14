import styled from "styled-components";
import Link from "next/link";
import { BookmarkActive, BookmarkInactive } from "./StyledBookmarks";
import { normalizeRooms } from "../helpers/normalize";

function TalkCard({ talk, onBookmarkToggle }) {
  const date = talk.date.replaceAll(".", "-");
  const room = normalizeRooms(talk.room);

  return (
    <TalkItem>
      <StyledTalkTime>{talk.time}</StyledTalkTime>

      <StyledCard>
        <SessionWrapper style={{ background: talk.session.bgColor }} />
        <MainCardContainer>
          <CardHeader>
            <StyledTalkLink href={`/${date}/${room}/talks/${talk.id}`}>
              <StyledTalkTitle>{`${talk.title.substring(
                0,
                20
              )}...`}</StyledTalkTitle>
            </StyledTalkLink>
            <Button
              aria-label="toggle bookmark button"
              type={"button"}
              onClick={() => {
                onBookmarkToggle(talk.id);
              }}
            >
              {talk.isBookmarked ? <BookmarkActive /> : <BookmarkInactive />}
            </Button>
          </CardHeader>

          <StyledSpeakerName>{talk.authors[0]}</StyledSpeakerName>
        </MainCardContainer>
      </StyledCard>
    </TalkItem>
  );
}

const Button = styled.button`
  background-color: transparent;
  margin-top: 0.5em;
  margin-right: -0.8em;
  border: none;
  cursor: pointer;
`;

const TalkItem = styled.li`
  margin: 1em 1em 1em 1.5em;
  display: flex;
  border-top: 1px solid #c9c7c5;
`;

const StyledTalkTime = styled.p`
  color: #5c5c5c;
`;

const StyledCard = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0;
  width: 100%;
  margin-top: 1em;
  margin-left: 1em;
  border-radius: 10px;
`;

const SessionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5%;
  margin-right: 0.5em;
  border-radius: 10px 0 0 10px;
`;

const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 0em 1em 1em 0;
  width: 100%;
  border-radius: 0 10px 10px 0;
  color: var(--secondary-text-color);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.3em;
`;

const StyledTalkLink = styled(Link)`
  text-decoration: none;
  color: var(--secondary-text-color);
`;

const StyledTalkTitle = styled.h2`
  font-size: 1.1rem;
  margin: 0.7em 0 0 0;
  font-family: OpenSans-SemiBold, sans-serif;
`;

const StyledSpeakerName = styled.h3`
  font-size: 1rem;
  margin: 0.2em 0 0 0;
  font-weight: 400;
`;

export default TalkCard;
