function bigBuddy(friends) {
    if (Array.isArray(friends)) {
        let bigFriend = friends[0];
    for (const friend of friends) {
        if (friend.length > bigFriend.length) {
            bigFriend = friend;
        }
    }
    return bigFriend;
    }
    else {
        return 'give a valid array';
    }
    
}
const friends = ['Johurul', 'Bashar', 'Arafat', 'Monalisa'];
const buddy = bigBuddy(123435345);
console.log(buddy);