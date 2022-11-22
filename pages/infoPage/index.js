import { useRouter } from "next/router";
import styled from "styled-components";
import { NavButton } from "../../components/RoomNav";

function InfoPage() {
  const router = useRouter();

  return (
    <InfoContainer>
      <h3>82nd ANNUAL MEETING</h3>
      <h4>The Westin Harbour Castle - Toronto, Ontario, Canada</h4>
      <h4>November 2-5, 2022</h4>
      <h4>HOST COMMITTEE</h4>
      <p>David C. Evans, Co-Chair Mary T. Silcox, Co-Chair</p>
      <h4>SYMPOSIUM CONVENORS</h4>
      <p>
        Nina G. Jablonski, Xueping Ji, Taormina Lepore, David A. Levering,
        Denise F. Su
      </p>
      <h4>PROGRAMM COMMITTEE</h4>
      <p>
        Ken D. Angielczyk, Victoria Arbour, Arnau Bolet, Matthew R. Borths,
        Jennifer Botha, Judd A. Case, Kimberley Chapelle, Karen Chin, Brian
        Choo, Thomas M. Cullen, Liping Dong, Alton C. Dooley, Jaelyn J. Eberle
      </p>
      <h4>EDITORS</h4>
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
