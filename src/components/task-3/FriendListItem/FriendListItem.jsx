import React from "react";
import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendlist__item}>
      <span
        className={`${css.friendlist__status} ${
          css[`${isOnline ? "online" : "ofline"}`]
        }`}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={css.friendlist__name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
