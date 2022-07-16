const { Schema, model } = require('mongoose');


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
            get: createdAt //maybe call getDate function
            //Use a getter method to format the timestamp on query
        },
        username: { // unsure if more is needed here
            type: String,
            required: true
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,  //unsure if this is right
                ref: 'Reaction',
            }
        ],
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
