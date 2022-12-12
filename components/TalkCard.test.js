import { render, screen } from "@testing-library/react";
import TalkCard from "./TalkCard";
import "@testing-library/jest-dom";

it("renderTalkCard", () => {
  const onBookmarkToggle = jest.fn();
  const talk = {
    id: "01",
    isBookmarked: false,
    title:
      "No Swimming Dinosaurs Here: New Insights on Manus-dominated Dinosaur Tracks From the Mayan Dude Ranch in Bandera, Texas",
    authors: ["Adams", "Miller", "Smart", "Funk"],
    abstract:
      "Ornithopods are a group of herbivorous dinosaurs that were incredibly successful and diverse during the Cretaceous period. Fossil remains from this group have been found on all seven continents, demonstrating that ornithopods had a worldwide extent at their apex. Here we use computed tomographic (CT) scan data to investigate the dentary and partial braincase of a new ornithopod species from the Late Cretaceous of Antarctica. Using digital segmentation techniques, the dentition and neurovasculature were reconstructed from the dentary CT data, while the internal cavities that would have housed the endosseous labyrinth, cranial nerves and floccular lobe were reconstructed from the braincase CT data. The relationships between functional, replacement and non-functional old teeth at each tooth row was examined to investigate the different stages of tooth replacement in this new ornithopod.",
    session: { name: "01 Romer Prize", bgColor: "#FFC0CB" },
    time: "08:00",
    day: "Wednesday",
    date: "23.11.2022",
    room: "Great Hall",
  };

  render(<TalkCard talk={talk} onBookmarkToggle={onBookmarkToggle} />);

  //   screen.debug();

  const expectedAuthorName = talk.authors[0];
  const expectedSessionName = talk.session.name;
  const expectedTitle = talk.title.substring(0, 20);
  // const expectedBookmarkStatus = !talk.isBookmarked
  const expectedTime = "08:00";

  const authors = screen.getByText(/adams/i);
  console.log(authors);
  //   const session = screen.getByText(/ornithopods/i);
  const title = screen.getByText(/no/i);
  const time = screen.getByText(/08:00/i);

  expect(authors).toHaveTextContent(expectedAuthorName);
  //   expect(session).toHaveTextContent(expectedSessionName);
  expect(title).toHaveTextContent(expectedTitle);
  // expect(isBookmarked).toHaveValue(expectedBookmarkStatus);
  expect(time).toHaveTextContent(expectedTime);
});
