const { Comment } = require("../models");

const commentdata = [
//   {
//     comment_text: "Go Team 1",
//     user_id: 6,
//     post_id: 1,
//   },
//   {
//     comment_text: "Team 2 sucks",
//     user_id: 6,
//     post_id: 8,
//   },
//   {
//     comment_text: "Pitcher A is awesome",
//     user_id: 3,
//     post_id: 1,
//   },
//   {
//     comment_text: "hitter 4 hits homeruns",
//     user_id: 3,
//     post_id: 8,
//   },
//   {
//     comment_text: "team 5 on a winning streak",
//     user_id: 7,
//     post_id: 5,
//   },
//   {
//     comment_text: "team 10 best team in the league",
//     user_id: 1,
//     post_id: 2,
//   },
//   {
//     comment_text: "team alpha always last",
//     user_id: 6,
//     post_id: 7,
//   },
//   {
//     comment_text: "team 12 always makes the playoffs",
//     user_id: 7,
//     post_id: 4,
//   },
//   {
//     comment_text: "shortstop needs a trade",
//     user_id: 6,
//     post_id: 3,
//   },
//   {
//     comment_text: "catcher needs to be benched",
//     user_id: 6,
//     post_id: 3,
//   },
//   {
//     comment_text:
//       "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
//     user_id: 3,
//     post_id: 4,
//   },
//   {
//     comment_text: "Donec ut mauris eget massa tempor convallis.",
//     user_id: 5,
//     post_id: 4,
//   },
//   {
//     comment_text:
//       "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
//     user_id: 4,
//     post_id: 9,
//   },
//   {
//     comment_text:
//       "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
//     user_id: 5,
//     post_id: 4,
//   },
//   {
//     comment_text: "Quisque porta volutpat erat.",
//     user_id: 6,
//     post_id: 2,
//   },
//   {
//     comment_text: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
//     user_id: 8,
//     post_id: 2,
//   },
//   {
//     comment_text:
//       "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
//     user_id: 2,
//     post_id: 6,
//   },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
