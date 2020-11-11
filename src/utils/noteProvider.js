const Notes = [
  { value: "a", nbAccents: 0, isTop: true, pitch: [8 + 12 * 3, 8 + 12 * 4] },
  { value: "a", nbAccents: 0, isTop: false, pitch: [6 + 12 * 3, 6 + 12 * 4] },
  { value: "a", nbAccents: 1, isTop: false, pitch: [4 + 12 * 3, 4 + 12 * 4] },
  { value: "a", nbAccents: 2, isTop: false, pitch: [3 + 12 * 3, 3 + 12 * 4] },
  { value: "a", nbAccents: 3, isTop: false, pitch: [1 + 12 * 3, 1 + 12 * 4] },
  { value: "4", nbAccents: 0, isTop: false, pitch: [11 + 12 * 2, 11 + 12 * 3] },
  { value: "5", nbAccents: 0, isTop: false, pitch: [10 + 12 * 2, 10 + 12 * 3] },
  { value: "6", nbAccents: 0, isTop: false, pitch: [8 + 12 * 2, 8 + 12 * 3] },
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
