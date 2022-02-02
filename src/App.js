import "./App.css";
import Profile from "./components/task-1/Profile";
import user from "./json/user.json";

import Statistics from "./components/task-2/Statistics";
import data from "./json/data.json";

import FriendList from "./components/task-3/FriendList";
import friends from "./json/friends.json";

import TransactionHistory from "./components/task-4/TransactionHistory";
import transactions from "./json/transactions.json";

export default function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
}
