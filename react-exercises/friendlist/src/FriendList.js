import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';

const FriendList = (props) => {
    const mappedFriends = props.friends.map((friend, i) => {
        console.log(friend)
        return (
            <Friend name={ friend.name }
                    age={ friend.age }
                    pets={ friend.pets }
                    key={ friend.name + i}
            />
        )
    })
    return (
        <div>
            { mappedFriends }
        </div>    
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}

export default FriendList;