const username1 = [
  'catlover9',
  'doglover7',
  'nerdygirl144',
  'hulkfan77',
  'batmanhater0',
  'dinofinder1',
  'horselover44',
  'mickeymouse08',
  // 'greenlantern67',
  // 'wonderwoman88',
  // 'minniemouse80',
  // 'wordmaster99',
  // 'amazingauthor2',
  // 'cameracadet66',
  // 'gothamknight44',
  // 'lewislane03',
  // 'supergirl7',
  // 'greenarrow46',
  // 'flashzoomzoom',
  // 'hawkgirl',
  // 'lavagirl1997'
];

const username2 = [
  'catlover9',
  'doglover7',
  'nerdygirl144',
  'hulkfan77',
  'batmanhater0',
  'dinofinder1',
  'horselover44',
  'mickeymouse08',
  // 'greenlantern67',
  // 'wonderwoman88',
  // 'minniemouse80',
  // 'wordmaster99',
  // 'amazingauthor2',
  // 'cameracadet66',
  // 'gothamknight44',
  // 'lewislane03',
  // 'supergirl7',
  // 'greenarrow46',
  // 'flashzoomzoom',
  // 'hawkgirl',
  // 'lavagirl1997'
];

const email = [
  'c.gerarld@email.com',
  'd.smith@email.com',
  'j.johnson@email.org',
  'a.adams@email.com',
  'b_barnes@email.com',
  'c-clementine@email.org',
  'd-derrick@email.com',
  'e.evans@email.com',
  // 'f_fonds@email.org',
  // 'g-garrick@email.org',
  // 'h-harrolds@email.com',
  // 'i.iverson@email.org',
  // 'j-joshua@email.com',
  // 'k-karmen@email.com',
  // 'l_linus@email.com',
  // 'm-matthews@email.com',
  // 'n.nichols@email.org',
  // 'o.otterson@email.org',
  // 'p.potter@email.org',
  // 'q.quincy@email.org',
  // 'r.robinson@email.org'
];

const thoughtText = [
  'Fish are better than people!',
  'Batman is not a super hero.',
  'Mechanical pencils are better than regular ones.',
  'Staying home is better than going out.',
  'Video games are bad for kids.',
  'Video games are good for kids and are super fun!',
  'The books are better than the movies.',
  'Batman is an amazing super hero!',
  'Ice cream is best in the winter.',
  'Evelators are terrifying.',
  'The sunset is prettier than the sunrise.',
  'Dinos are super cool!',
  'Dinos are lame.',
  'Startbucks sucks.',
  'Starbucks is great!',
  'McDonalds is the best fast food.',
  'Burger King is the best fast food.',
  'Wendys is the best fast food.',
  'Coding is annoying.',
  'Coding is super fun!',
  'Batman would win against all the other superheroes.'
];

const reactionBody = [
  'I agree!',
  'No way!',
  'For sure',
  'Obviously',
  'You can not be serious...',
  'Disappointed in you...',
  'I am not mad, just disappointed',
  'Disagree',
  'Completely agree',
  'I know right?',
  'Amazing!',
  'Wow!',
  'Wow...'
];


//Not exported -------------------
// Get random array item
const getRandomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get random array item and delete (prevents unique errors)
const getRandomArrItemThenDelete = (arr) => {
  itemNumber = [Math.floor(Math.random() * arr.length)]

  let result = arr[itemNumber];
  arr.splice(itemNumber, 1);
  return `${result}`;


};
// -------------------------------



//Exported------------------------
// For properties that do not require unique
const getRandomUsername = () =>
  `${getRandomArrayItem(username2)}`;

const getRandomThought = () =>
  `${getRandomArrayItem(thoughtText)}`;

const getRandomFriends = (int) => {
  const friends = [];
  for (let i = 0; i < int; i++) {
    friends.push({
      username: getRandomUsername(),
    });
  }
  return friends;
};

const getRandomReactions = (int) => {
  const reactions = [];
  for (let i = 0; i < int; i++) {
    reactions.push({
      reactionBody: getRandomArrayItem(reactionBody),
      username: getRandomUsername()
    });
  }
  return reactions;
};


//for properties that do require unique
const getPossibleUsername = () =>
  `${getRandomArrItemThenDelete(username1)}`;

const getPossibleEmail = () =>
  `${getRandomArrItemThenDelete(email)}`;

// -------------------------------


module.exports = { getRandomUsername, getRandomThought, getRandomFriends, getRandomReactions, getPossibleUsername, getPossibleEmail };