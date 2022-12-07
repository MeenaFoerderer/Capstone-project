import styled from "styled-components";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

const BookmarkActive = styled(BsFillBookmarkFill)`
  font-size: 2em;
  color: #493843;
`;

const BookmarkInactive = styled(BsBookmark)`
  font-size: 2em;
  color: #786571;
`;

export { BookmarkActive, BookmarkInactive };
