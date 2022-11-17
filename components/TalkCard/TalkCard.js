import styled from "styled-components";
import { data } from "../utils/data";

export default function TalkCard() {
  return (
    <>
      <h2>JURASSIC TALK 2022 Schedule</h2>
      <TalkList>
        {data?.map((talk) => (
          <TalkItem key={talk.id}>
            <h4>{talk.title}</h4>
            <h5>{talk.authors[0]}</h5>
            <TalkInfoWrapper>
              <p>{talk.session}</p>
              <p>{talk.time}</p>
              <p>{talk.room}</p>
            </TalkInfoWrapper>
          </TalkItem>
        ))}
      </TalkList>
    </>
  );
}

const TalkList = styled.ul`
  list-style: none;
  width: 400px;
`;

const TalkItem = styled.li`
  border: 2px solid gray;
  border-radius: 10px;
  padding: 0.5em 1em;
  margin: 1em;
`;

const TalkInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
