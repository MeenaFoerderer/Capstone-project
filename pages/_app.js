import GlobalStyles from "../components/GlobalStyles";
import { data } from "../helpers/data";
import { dateFromNormalizedString } from "../helpers/normalize";

function MyApp({ Component, pageProps }) {
  const conferenceDays = Array.from(new Set(data.map((talk) => talk.date)))
    .map((date) => dateFromNormalizedString(date))
    .sort((a, b) => a - b);

  const conferenceRooms = Array.from(
    new Set(data.map((talk) => talk.room))
  ).sort();

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        conferenceDays={conferenceDays}
        conferenceRooms={conferenceRooms}
        talks={data}
      />
    </>
  );
}

export default MyApp;
