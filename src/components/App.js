import React from 'react';
import Profile from './Profile/Profile';
import userList from './Profile/user.json'
import statsData from '../stats-data.json'
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import transactionData from '../transactions.json';




export default function App() {
  return (
    <>
<Profile user={userList}/>
<Statistics title ="Upload stats" stats={statsData} />
<FriendList />
<TransactionHistory items ={transactionData}/>
  </>
  );
}

