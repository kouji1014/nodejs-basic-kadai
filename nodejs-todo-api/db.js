const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  port: 3306, // Macの方は8889にしてください
  user: 'root',
  password: '', // 初期設定はXAMPPが''、MAMPが'root'
  database: 'nodejs_db_kadai'
};

const pool = mysql.createPool(dbConfig);

async function closePool() {
  try {
    await pool.end();
    console.log('データベース接続プールを破棄しました。');
  } catch (err) {
    console.error('データベース接続プールの破棄中にエラーが発生しました：', err);
  }
}

async function executeQuery(sql, params = []) {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  closePool,
  executeQuery
};