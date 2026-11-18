import initSqlJs from "sql.js";
import fs from "fs";

const SQL = await initSqlJs();
//загружает sqlite
const databasePath = "./database.sqlite";

let db;
// создаем переменную для базы данных

if (fs.existsSync(databasePath)) {
  const fileBuffer = fs.readFileSync(databasePath);
  //получаем и читаем файл базы данных

  db = new SQL.Database(fileBuffer);
  //загружаем существующую базу данных
} else {
  db = new SQL.Database();
  //иначе создаем пустую базу данных
}

db.run(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT,
    service TEXT ,
    status TEXT NOT NULL,
    price INTEGER,
    comment TEXT ,
    created_at TEXT 
  );
  `);
//Создаем таблицу заявок если еще не существует, id автоматически генерируется и увеличивается

function saveDatabase() {
  const data = db.export();
  //экспортируем базу данных
  const buffer = Buffer.from(data);
  //получаем ее обновленное содержимое
  fs.writeFileSync(databasePath, buffer);
  //записываем обновление в существующий файл бд
}
//функция для сохранения изменений в базу данных

function query(sql, params = {}) {
  //метод prepare() подготавливает sql-запрос к выполнению
  const statement = db.prepare(sql);

  //метод bind() передает параметры в sql-запрос
  statement.bind(params);

  const rows = [];

  //Метод step() выполняет шаг sql-запроса и переходит к следующей доступной строке результата
  while (statement.step()) {
    //метод getAsObject() получает строку таблицы в виде объекта
    rows.push(statement.getAsObject());
  }

  //метод free() освобождает ресурсы которые sql выделила для подготовленного запроса
  statement.free();
  return rows;
}

function run(sql, params = {}) {
  //метод prepare() подготавливает sql-запрос к выполнению
  const statement = db.prepare(sql);

  //метод bind() передает параметры в sql-запрос
  statement.run(params);

  //метод free() освобождает ресурсы которые sql выделила для подготовленного запроса
  statement.free();
  saveDatabase();
}

saveDatabase();
//Сохранили все изменения в базе данных
export { db, saveDatabase, query, run };
//Экспортируем переменную базы данных и функцию обновление в существующий файл бд

// npm init - инициализация
// npm install express sql.js - установка пакетов
// node database.js - запускаем файл database.js в среде Node.js, то есть не в браузере.
