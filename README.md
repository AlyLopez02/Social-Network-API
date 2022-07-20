# Social-Network-API
## Description
These files come together to create a social network API! This was created from scratch.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)


## Installation
Download these files from this GitHub Repository and then type `npm i` in your terminal for the folder with said files. Additionally, make sure you have Insomnia installed on the device you plan to run this code. You should now be good to run the code!

## Usage
Type `npm start` into the same terminal you used for the installation. You can then open up Insomnia to test the functionality of my code! Use the url `localhost:3001/api` followed by either `/thoughts` or `/users` to get to working endpoints. You can also add on another slash followed by an id number to get specific thoughts or users. You are able to GET, POST, PUT, and DELETE with both. 

Additionally, if you go to `localhost:3001/api/thoughts/:thoughtId/reactions` and replace `:thoughtId` with the id of a thought, then you will be able to add a reaction to said thought (with POST) or delete a reaction (with DELETE). For adding a reaction, you will need to input a `reactionBody` and a `username` while for deleting a reaction you will need to input a `reactionId`. Click on 'Body' in Insomnia and select 'JSON' to input the previously stated.

Finally, you can add and delete friends if you go to `localhost:3001/api/users/:userId1/friends/:userId2` and replace `:userId1` and `:userId2` with two different user ids. The first id will have the second one as a friend, but not the other way around. Thus, if you would like two users to both friend each other, then you will also have to switch the ids. To add a friend, you will use POST and to delete a friend you will use DELETE.

As you can tell, there is a lot of actions you can do, so have fun experimenting! 

## Walkthrough Video (2 Parts)
Here are the links to the two part walkthrough of the application:

Part 1 Video:
<a href="https://watch.screencastify.com/v/aF8u1gFhTSy3YTybpOWC">https://watch.screencastify.com/v/aF8u1gFhTSy3YTybpOWC</a>

Part 2 Video:
<a href="https://watch.screencastify.com/v/HbWpNkLPH7gR6dXDbh9Q">https://watch.screencastify.com/v/HbWpNkLPH7gR6dXDbh9Q</a>

Any information used in the video was placeholder information.