export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are 0-based
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
}
