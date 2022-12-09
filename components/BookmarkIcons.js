import styled from "styled-components";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

const BookmarkActive = styled(BsFillBookmarkFill)`
  font-size: 1.8rem;
  color: #493843;
`;

const BookmarkInactive = styled(BsBookmark)`
  font-size: 1.8rem;
  color: #786571;
`;

export { BookmarkActive, BookmarkInactive };
