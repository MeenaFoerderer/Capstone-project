import { useRouter } from "next/router";
import styled from "styled-components";
import { NavButton } from "../../components/RoomNav";

function InfoPage() {
  const router = useRouter();

  return (
    <InfoContainer>
      <h1>82nd ANNUAL MEETING</h1>
      <h2>The Westin Harbour Castle - Toronto, Ontario, Canada</h2>
      <h2>November 2-5, 2022</h2>
      <h3>HOST COMMITTEE</h3>
      <p>David C. Evans, Co-Chair Mary T. Silcox, Co-Chair</p>
      <h3>SYMPOSIUM CONVENORS</h3>
      <p>
        Nina G. Jablonski, Xueping Ji, Taormina Lepore, David A. Levering,
        Denise F. Su
      </p>
      <h3>PROGRAMM COMMITTEE</h3>
      <p>
        Ken D. Angielczyk, Victoria Arbour, Arnau Bolet, Matthew R. Borths,
        Jennifer Botha, Judd A. Case, Kimberley Chapelle, Karen Chin, Brian
        Choo, Thomas M. Cullen, Liping Dong, Alton C. Dooley, Jaelyn J. Eberle
      </p>
      <h3>EDITORS</h3>
      <p>Dana J. Ehret, Andrew A. Farke, Ethan Fulwood</p>
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
