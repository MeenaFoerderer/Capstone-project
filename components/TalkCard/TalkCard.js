//import { data } from "../utils/data";
import styled from "styled-components";
import { data } from "../utils/data";

export default function TalkCard() {
  return (
    <>
      <h2>JURASSIC TALK 2022 Schedule</h2>
      <StyledUl>
        {data?.map((talk) => (
          <StyledLi key={talk.id}>
            <h4>{talk.title}</h4>
            <h4>{talk.authors[0]}</h4>
            <StyledDiv>
              <p>{talk.session}</p>
              <p>{talk.time}</p>
              <p>{talk.room}</p>
            </StyledDiv>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  width: 400px;
`;

const StyledLi = styled.li`
  border: 2px solid gray;
  border-radius: 10px;
  padding: 0.5em 1em;
  margin: 1em;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
