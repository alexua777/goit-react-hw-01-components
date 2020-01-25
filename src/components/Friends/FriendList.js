import React from "react";
import FriendListItem from "./FriendListItem";
import friendsList from "./friends.json";
import styles from "./Friends.module.css";

function FriendList({ friends }) {
  return (
    <>
      <ul className={styles.list}>
        <FriendListItem friends={friendsList} />
      </ul>
    </>
  );
}

export default FriendList;
