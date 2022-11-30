function normalizeDate(date) {
  return date.toLocaleDateString("de-DE").replaceAll(".", "-");
}

function normalizeRooms(room) {
  return room.toLowerCase().replaceAll(" ", "-");
}

function dateFromNormalizedString(date) {
  let [day, month, year] = date.split(".");
  const createdDate = new Date(year, Number(month) - 1, day);
  return createdDate;
}

export { normalizeDate, normalizeRooms, dateFromNormalizedString };
