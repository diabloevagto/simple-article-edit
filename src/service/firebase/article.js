import db from './initializeFirebase';

const getAllPost = async function (name) {
  const snapshot = await db.ref(`${name}/posts`).once('value');
  let val = await snapshot.val();

  // new user
  if (val === null) {
    const timeKey = (new Date()).getTime();
    const newPost = {
      [timeKey]: {
        time: timeKey,
        title: 'hello',
        content: 'hello new user',
      },
    };
    db.ref(`${name}/posts`).set(newPost);
    val = newPost;
  }

  return val;
};

const createPost = async function (name, post) {
  console.log(post);
  db.ref(`${name}/posts/${post.time}`).set(post);
};

export default { getAllPost, createPost };
