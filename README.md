# simple-article-edit
[![Build Status](https://travis-ci.org/diabloevagto/simple-article-edit.svg?branch=master)](https://travis-ci.org/diabloevagto/simple-article-edit)

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

# 注意事項
* 要到 config 將 productionSourceMap 關閉，[commit](https://github.com/diabloevagto/simple-article-edit/commit/26ef86f557bd5e0fcc721ef55db5087d9399ec34)
* 檔案放到 github page 上要修改 router base 並且只能使用 hash mode，[commit](https://github.com/diabloevagto/simple-article-edit/commit/75e3235a5ba8323936afa82a35d871e28efa625f#diff-36727cbb21483337586ca81cb95f29b4)
* 檔案放到 github page 上要修改 asset public path，[commit](https://github.com/diabloevagto/simple-article-edit/commit/da474d96fcfe6d8dfe3b4a88ce59055606aec2af)

# todo
* [X] 新增文章
* [X] 讀取文章
* [X] 更新文章
* [X] 刪除文章
* [X] 結合 firebase
* [ ] 權限管理
* [X] markdown