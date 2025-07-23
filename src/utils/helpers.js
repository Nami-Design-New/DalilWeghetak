export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are 0-based
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
}

export function addEventFormatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
