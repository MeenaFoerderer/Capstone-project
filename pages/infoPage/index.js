import { useRouter } from "next/router";
import styled from "styled-components";
import { NavButton } from "../../components/RoomNav";

function InfoPage() {
  const router = useRouter();

  return (
    <InfoContainer>
      <h3>Coming soon...</h3>
      <NavButton type="button" onClick={() => router.push("/landingPage")}>
        Home
      </NavButton>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export default InfoPage;
