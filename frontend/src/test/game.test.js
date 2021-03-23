import boardInit from '../helpers/BoardInit.js';
import {
  getKingPosition,
  isCheck,
  isMate,
  pathIsClear,
  algebreicNotation
} from '../components/Game.js';

const squares = boardInit();
const squares2 = boardInit();



test('player 1 king at position 4', () => {
  expect(getKingPosition(squares, 1)).toBe(4);
});

test('Square 4 is e1', () => {
  expect(algebreicNotation(4)).toBe('e1');
});


test('squares immutable', () => {
  expect(squares).toStrictEqual(squares2);
});