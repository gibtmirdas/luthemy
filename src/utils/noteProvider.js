const Notes = [
  { value: "a", nbAccents: 0, isTop: true, pitch: 9 + 12 * 4 },
  { value: "a", nbAccents: 0, isTop: false, pitch: 7 + 12 * 4 },
  { value: "a", nbAccents: 1, isTop: false, pitch: 5 + 12 * 4 },
  { value: "a", nbAccents: 2, isTop: false, pitch: 4 + 12 * 4 },
  { value: "a", nbAccents: 3, isTop: false, pitch: 2 + 12 * 4 },
  { value: "4", nbAccents: 0, isTop: false, pitch: 0 + 12 * 4 },
  { value: "5", nbAccents: 0, isTop: false, pitch: 11 + 12 * 3 },
  { value: "6", nbAccents: 0, isTop: false, pitch: 9 + 12 * 3 },
];

export const GetNote = (previous) => {
  let accept = false;
  let note;
  while (!accept) {
    const index = Math.floor(Math.random() * Notes.length);
    note = Notes[index];
    accept = note === previous ? Math.random() < 0.5 : true;
  }
  return note;
};
