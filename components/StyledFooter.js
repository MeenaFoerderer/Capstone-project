import styled from "styled-components";
import Link from "next/link";
import {
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsHouseDoor,
  BsJournalBookmarkFill,
  BsCalendar4Week,
} from "react-icons/bs";
import css from "styled-jsx/css";

const FooterNav = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 9vh;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ variant }) =>
    variant === "idPageFooter" &&
    css`
      height: 8.6vh;
    `}
`;

const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 0.3em 0;

  &:active:focus {
    background-color: #493843;
  }
`;

const LinkText = styled.p`
  font-size: 0.85rem;
  margin: 1px 0 0 0;
  color: #7a7a7a;

  &:active:focus {
    color: #f9f9f9;
  }
`;

const PrevRoomIcon = styled(BsArrowLeftSquare)`
  font-size: 1.8rem;
  color: #7a7a7a;

  &:active:focus {
    color: #f9f9f9;
  }
`;

const NextRoomIcon = styled(BsArrowRightSquare)`
  font-size: 1.8rem;
  color: #7a7a7a;

  &:active:focus {
    color: #f9f9f9;
  }
`;

const HomeIcon = styled(BsHouseDoor)`
  font-size: 1.8rem;
  color: #7a7a7a;

  &:active:focus {
    color: #f9f9f9;
  }
`;

const BookmarkIcon = styled(BsJournalBookmarkFill)`
  font-size: 1.8rem;
  color: #7a7a7a;

  &:active:focus {
    color: #f9f9f9;
  }
`;

const CalendarIcon = styled(BsCalendar4Week)`
  font-size: 1.8rem;
  color: #7a7a7a;

  &:active:focus {
    color: #f9f9f9;
  }
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
