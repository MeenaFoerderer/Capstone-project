import styled from "styled-components";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

const BookmarkActive = styled(BsFillBookmarkFill)`
  font-size: 2.5em;
  color: #2a384f;
`;

const BookmarkInactive = styled(BsBookmark)`
  font-size: 2.5em;
  color: #2a384f;
`;

export { BookmarkActive, BookmarkInactive };
