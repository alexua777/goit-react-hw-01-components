import React from "react";
import PropTypes from "prop-types";
import styles from "./Friends.module.css";

function FriendListItem({ friends }) {
  return (
    <>
      {friends.map(friend => (
        <li className={styles.listItem} key={friend.id}>
          <span
            className={friend.isOnline ? styles.isActive : styles.nonActive}
          >
            {friend.isOnline}
          </span>
          <img
            className={styles.img}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p>{friend.name}</p>
        </li>
      ))}
    </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default FriendListItem;
