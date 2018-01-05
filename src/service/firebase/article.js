import db from './initializeFirebase';

/**
 * 到 firebase 取得當前使用者所有文章，如果使用者未註冊則新增預設資料
 *
 * @param {string} 指定的使用者名稱
 */
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

/**
 * 新增文章
 *
 * @param {string} 指定的使用者名稱
 * @param {Object} 文章內容，此物件包含 { time, title, content }
 */
const createPost = async (name, post) => {
  await db.ref(`${name}/posts/${post.time}`).set(post);
};

/**
 * 刪除指定文章
 *
 * @param {string} 指定的使用者名稱
 * @param {number} 所要刪除的文章 time key
 */
const deletePost = async (name, timeKey) => {
  await db.ref(`${name}/posts/${timeKey}`).remove();
};

/**
 * 更新文章，將使用者編輯內容記錄下來
 *
 * @param {string} 指定的使用者名稱
 * @param {number} 所要刪除的文章 time key
 * @param {Object} 文章內容，此物件包含 { time, title, content }
 */
const updatePost = async (name, timeKey, post) => {
  await db.ref(`${name}/posts/${post.time}`).set(post);
};

export default { getAllPost, createPost, deletePost, updatePost };
