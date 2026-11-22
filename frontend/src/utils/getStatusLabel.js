export function getStatusLabel(status) {
  if (status === "new") {
    return "Новая";
  }
  if (status === "in_progress") {
    return "В работе";
  }
  if (status === "done") {
    return "Завершена";
  }
  return "Отменена";
}
