// const fs = require('fs/promises');

async function fetchData() {
  try {
    console.log('ユーザーデータの取得を開始します。');
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('データの取得に失敗しました');
    }

    const data = await response.json();
  
    console.log('ユーザー一覧:');
  
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);

      if(i === data.length - 1){
        console.log('データ取得が完了しました。取得件数:'+ data.length + '件');
      }
    }
  } catch (error) {
    console.error('エラー発生：', error);
  }
}

// 外部データを取得
console.log('fetchData()関数を実行します。');
fetchData();
console.log('fetchData()関数を実行しました。');

// 100ミリ秒ごとにメッセージを表示
let count = 1;
const interval = setInterval(() => {
  console.log(`別の処理を実行中... ${count++}`);
  if (count > 10) clearInterval(interval);
}, 100);