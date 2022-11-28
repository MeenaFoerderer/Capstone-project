import { useRouter } from "next/router";
import { data } from "../../components/utils/data";
import styled from "styled-components";

function TalkDetails() {
  const router = useRouter();
  const { id } = router.query;
  const singleTalk = data.find((talk) => talk.id === id);
  if (!id) return;
  return (
    <StyledMain>
      <StyledBackRoute onClick={() => router.back()}>Back</StyledBackRoute>
      <article>
        <StyledTitle>{singleTalk.title}</StyledTitle>
        <StyledAuthorList>{singleTalk.authors.join(", ")}</StyledAuthorList>
        <StyledAbstract>{singleTalk.abstract}</StyledAbstract>
        <InfoContainer>
          <p>{singleTalk.session}</p>
          <p>{singleTalk.day}</p>
          <p>{singleTalk.date}</p>
          <p>{singleTalk.time}</p>
        </InfoContainer>
      </article>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  margin: 0 auto;
  padding: 0 2em;
`;

const StyledBackRoute = styled.div`
  text-decoration: none;
  color: black;
  width: 5em;
  height: 3.5em;
  padding: 1em 3em;
  border-radius: 5px;
  border: none;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 1.4rem;
`;

const StyledAuthorList = styled.h2`
  font-size: 1.1rem;
`;

const StyledAbstract = styled.p`
  text-align: justify;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

export default TalkDetails;
