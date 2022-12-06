import styled from "styled-components";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

const BookmarkActive = styled(BsFillBookmarkFill)`
  font-size: 2em;
  _color: #222222;
  color: #474747;
`;

const BookmarkInactive = styled(BsBookmark)`
  font-size: 2em;
  color: #7a7a7a;
`;

export { BookmarkActive, BookmarkInactive };
