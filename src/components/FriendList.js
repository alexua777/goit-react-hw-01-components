import React from "react";
import FriendListItem from "./FriendListItem";
import friendsList from "../friends.json";


function FriendList({ friends }) {
  return (
    <>
      <ul class="friend-list">
        <FriendListItem friends={friendsList} />
      </ul>
    </>
  );
}

export default FriendList;
