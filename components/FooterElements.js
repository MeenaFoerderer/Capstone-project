import styled from "styled-components";
import Link from "next/link";
import {
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsHouseDoor,
  BsJournalBookmarkFill,
  BsCalendar4Week,
} from "react-icons/bs";

const FooterNav = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0.7em;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 18%;
`;

const LinkText = styled.p`
  font-size: 0.85rem;
  margin: 0.1em 0 0 0;
  color: #7a7a7a;
`;

const PrevRoomIcon = styled(BsArrowLeftSquare)`
  font-size: 2em;
  color: #7a7a7a;
`;

const NextRoomIcon = styled(BsArrowRightSquare)`
  font-size: 2em;
  color: #7a7a7a;
`;

const HomeIcon = styled(BsHouseDoor)`
  font-size: 2.5em;
  color: #7a7a7a;
`;

const BookmarkIcon = styled(BsJournalBookmarkFill)`
  font-size: 2.5em;
  color: #7a7a7a;
`;

const CalendarIcon = styled(BsCalendar4Week)`
  font-size: 2.5em;
  color: #7a7a7a;
`;

export {
  CalendarIcon,
  FooterLink,
  FooterNav,
  LinkText,
  HomeIcon,
  BookmarkIcon,
  PrevRoomIcon,
  NextRoomIcon,
};