import GlobalStyles from "../components/GlobalStyles";
import { data } from "../helpers/data";

function MyApp({ Component, pageProps }) {
  const conferenceDays = Array.from(new Set(data.map((talk) => talk.date)))
    .map((date) => {
      let [day, month, year] = date.split(".");
      month = Number(month) - 1;
      const createdDate = new Date(year, month, day);
      return createdDate;
    })
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
