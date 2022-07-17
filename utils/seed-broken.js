//rename 'seed.js' before running npm run seed
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomArrayItem, getRandomUsername, getRandomThought, getRandomFriends, getRandomReactions, getPossibleUsername, getPossibleEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing users
    await User.deleteMany({});

    // Drop existing thoughts
    await Thought.deleteMany({});

    // Create empty array to hold the thoughts
    const thoughts = [];

    // Loop 20 times -- add thoughts to the thoughts array
    for (let i = 0; i < 20; i++) {
        // Get some random assignment objects using a helper function that we imported from ./data
        const reactions = getRandomReactions(5);

        const thoughtText = getRandomThought();
        const username = getRandomUsername();

        thoughts.push({
            thoughtText,
            username,
            reactions
        });
    }

    // Add students to the collection and await the results
    await Thought.collection.insertMany(thoughts);


    // Create empty array to hold users
    const users = [];

    // Loop 8 times
    for (let i = 0; i < 8; i++) {
        // Get some random assignment objects using a helper function that we imported from ./data


        const username = getPossibleUsername();
        const email = getPossibleEmail();

        users.push({
            username,
            email,
            thoughts: [...thoughts], //Need to make it so that only associated thoughts go through

        });
    }

    const getFriends = () => {
        
        
        friends = [
            (getRandomArrayItem(users))._id,
            (getRandomArrayItem(users))._id,
            (getRandomArrayItem(users))._id
        ]

        return friends;

    }

    console.log(users);
    // Add courses to the collection and await the results
    await User.collection.insertMany(users);
    // users.forEach(() => getFriends());

    const giveFriends = () => {
        
        for (let i = 0; i < users.length; i++) {

            users[i].friends = getFriends();

        }
        
    };

    giveFriends();

    console.log(users)

    await User.collection.insertMany(users);

    // Log out the seed data to indicate what should appear in the database
    console.table(thoughts);
    console.table(users);
    console.info('Seeding finished!');
    process.exit(0);
});
