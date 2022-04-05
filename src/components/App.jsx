import Section from './Section/Section';

import Profile from './UserSocialProfile/UserSocialProfile';
import user from 'data/user.json';

import Statictics from './Statistics/Statistics';
import stats from 'data/statistics.json';

import FriendList from './FriendsList/FriendsList';
import friends from 'data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      {/* <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
        }}
      >
        hw-01-components
      </h1> */}

      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statictics title="Upload stats" stats={stats} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
