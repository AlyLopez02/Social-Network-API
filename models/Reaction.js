const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
        type: String,
        required: true
      },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAt //maybe call getDate function or don't have this at all & delete date function
        //Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
        getters: true,
      },
      id: false,
  }
);

function getDate(createdAt){
    return createdAt;
}


module.exports = reactionSchema;
