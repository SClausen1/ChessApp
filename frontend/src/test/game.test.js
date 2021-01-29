import boardInit from '../helpers/BoardInit.js';

squares = boardInit();
const getKingPosition = require('./getKingPosition');



test('player 1 king at position 4', () => {
  expect(getKingPosition(squares, 1)).toBe(4);
});