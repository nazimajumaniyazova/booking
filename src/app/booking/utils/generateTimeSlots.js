export function generateTimeSlots(date, showAll = false) {
  const start = new Date(date);
  start.setHours(9, 0, 0, 0);
  const end = new Date(date);
  end.setHours(18, 0, 0, 0);
  const slots = [];
  let cur = new Date(start);
  while (cur < end) {
    const label = cur.toTimeString().slice(0, 5);
    const disabled = !showAll ? false : Math.random() < 0.35;
    slots.push({ label, value: label, disabled });
    cur = new Date(cur.getTime() + 30 * 60 * 1000);
  }
  return slots;
}
