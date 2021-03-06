import mongoose from 'mongoose';

const Schema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    name: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      required: false,
    },

    date: {
      type: String,
      required: false,
    },

    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // tags: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Tags',
    //     required: false,
    //   },
    // ],
  },
  { timestamps: {}, versionKey: false },
);

export default mongoose.model('Answer', Schema);
