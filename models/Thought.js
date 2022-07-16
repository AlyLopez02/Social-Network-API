const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAt //maybe call getDate function or don't have this at all & delete date function
            //Use a getter method to format the timestamp on query
        },
        username: { // unsure if more is needed here
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

function getDate(createdAt){
    return createdAt;
}

thoughtSchema
    .virtual('reactionCount')
    .get(function(){
        return (this.reactions.length);
    });

const Course = model('thought', thoughtSchema);

module.exports = Thought;
