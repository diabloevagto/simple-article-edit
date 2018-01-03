# simple-article-edit

實做 CRUD 線上文章編輯功能，並且利用 firebase 實現 CRUD 功能

# 使用步驟
1. 輸入自己希望的使用者名稱，之後的文章變更皆在此名稱底下，此部分不做驗證
2. 可以自行新增文章，給予當下時間做唯一 key 值
3. 點選時間進入文章內可預覽以及編輯，支援 markdown
    * 左方編輯區為目前的內容
    * 右方預覽區為實際顯示內容
4. 點選文章列表的 X 可刪除文章

# 使用 lib
* vue
* vue-router
* vuex
* element-ui
* axios
* firebase

# todo
* [X] 新增文章
* [X] 讀取文章
* [X] 更新文章
* [X] 刪除文章
* [X] 結合 firebase
* [ ] 權限管理
* [X] markdown