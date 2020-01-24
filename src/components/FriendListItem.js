import React from "react";
import PropTypes from "prop-types";

function FriendListItem({ friends }) {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id}>
          <span>{friend.isOnline}</span>
          <img src={friend.avatar} alt={friend.name} width="48" />
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
