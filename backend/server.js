//Запускает весь проект полностью на одном сервере.
import express from "express";
import { db, saveDatabase, query, run } from "./database.js";

const app = express();
//Создаем сервер
const PORT = 3000;
//Указываем порт
app.use(express.json());
//Настраиваем JSON-формат
app.use(express.static("public"));
//Указываем название папки в которой находится frontend часть приложения

//Универсальная функция для преобразования SQL-ответа в массив с объектами.

// app.get("/api/categories", (req, res) => {
//   const result = db.exec(`SELECT * from categories ORDER BY name;`);
//   if (result.length === 0) {
//     return res.json([]);
//   }

//   const columns = result[0].columns;
//   const values = result[0].values;

//   const categories = values.map((row) => {
//     const category = {};
//     columns.forEach((column, index) => {
//       category[column] = row[index];
//     });
//     return category;
//   });

//   res.json(categories);
// });

//описываем get-запрос на получение всех заявок
// DESC заявки с большим id идут первыми. сортируем id по убыванию
app.get("/api/leads", (req, res) => {
  const leads = query(`SELECT * FROM leads ORDER BY id DESC;`);

  res.json(leads);
});

//описываем post-запрос на добавление завки
app.post("/api/leads", (req, res) => {
  const { name, phone, service, status, price, comment } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Заполните имя",
    });
  }

  // toISOString() метод для перевода даты в читаемый формат
  const createdAt = new Date().toISOString();

  run(
    `INSERT INTO leads (name, phone, service, status, price, comment, created_at)
    VALUES ($name, $phone, $service, $status, $price, $comment, $createdAt);`,
    {
      $name: name,
      $phone: phone || "",
      $service: service || "",
      $status: status || "new",
      $price: Number(price) || 0,
      $comment: comment || "",
      $createdAt: createdAt,
    },
  );

  saveDatabase();

  res.status(201).json({
    message: "Заявка добавлена",
  });
});

//описываем delete-запрос на удаление транзакций
app.delete("/api/leads/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({
      error: "Некорректный id",
    });
  }

  run(`DELETE FROM leads WHERE id = $id;`, {
    $id: id,
  });

  saveDatabase();

  res.status(201).json({
    message: "Заявка удалена",
  });
});

app.get("/api/leads/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({
      error: "Некорректный id",
    });
  }

  const leads = query(`SELECT * FROM leads WHERE id = $id;`, {
    $id: id,
  });

  const lead = leads[0];

  if (!lead) {
    return res.status(404).json({
      error: "Заявка не найдена",
    });
  }

  saveDatabase();

  res.status(201).json(lead);
});

app.patch("/api/leads/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({
      error: "Некорректный id",
    });
  }

  const leads = query(`SELECT * FROM leads WHERE id = $id;`, {
    $id: id,
  });

  const lead = leads[0];

  if (!lead) {
    return res.status(404).json({
      error: "Заявка не найдена",
    });
  }

  const { name, phone, service, status, price, comment } = req.body;

  run(
    `UPDATE leads SET name=$name, phone=$phone, service=$service, status=$status, price=$price, comment=$comment WHERE id=$id`,
    {
      $id: id,
      $name: name ?? lead.name,
      $phone: phone ?? lead.phone,
      $service: service ?? lead.service,
      $status: status ?? lead.service,
      $price: price ?? lead.price,
      $comment: comment ?? lead.comment,
    },
  );

  saveDatabase();

  res.status(201).json({
    message: "Заявка изменена",
  });
});

//Запускаем сервер, всегда в самом низу документа, после всех настроек
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
