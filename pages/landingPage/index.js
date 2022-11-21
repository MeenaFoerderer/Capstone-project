import { useRouter } from "next/router";

function LandingPage() {
  const router = useRouter();

  return (
    <>
      <h1>Welcome to Jurassic Talk 2022 NYC</h1>
      <button>Info</button>
      <button type="button" onClick={() => router.push("/greatHall")}>
        Schedule
      </button>
    </>
  );
}

export default LandingPage;
