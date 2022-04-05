import PropTypes from 'prop-types';
import Friend from './Friends';
import css from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.friendsItem}>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
