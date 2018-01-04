import db from './initializeFirebase';

const getAllPost = async (name) => {
  const snapshot = await db.ref(`${name}/posts`).once('value');
  let val = await snapshot.val();

  // new user
  if (val === null) {
    const timeKey = (new Date()).getTime();
    const newPost = {
      reserve: true,
      [timeKey]: {
        time: timeKey,
        title: 'hello new user',
        content: '# h1\n## h2\n\n* one\n* two\n\n1. one\n2. two\n\n~~delete~~\n\n*italic*',
      },
    };
    db.ref(`${name}/posts`).set(newPost);
    val = newPost;
  }

  return val;
};

const createPost = async (name, post) => {
  await db.ref(`${name}/posts/${post.time}`).set(post);
};

const deletePost = async (name, timeKey) => {
  await db.ref(`${name}/posts/${timeKey}`).remove();
};

const updatePost = async (name, timeKey, post) => {
  await db.ref(`${name}/posts/${post.time}`).set(post);
};

export default { getAllPost, createPost, deletePost, updatePost };
