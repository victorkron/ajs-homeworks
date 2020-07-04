const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 0 },
];

const alive = characters.filter((item) => item.health > 0);
if (alive); // Добавленно, чтобы не выдовалась ошибка о том, что alive не используется:
// 8:7  error  'alive' is assigned a value but never used  no-unused-vars
