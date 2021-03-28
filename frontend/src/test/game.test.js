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



test('King starting position', () => {
  expect(getKingPosition(squares, 1)).toBe(4);
  expect(getKingPosition(squares, 2)).toBe(60);
});

test('check function pathIsClear', () => {
  expect(pathIsClear(squares, 4, 12)).toBe(false);
  expect(pathIsClear(squares, 12,20)).toBe(true);
});


test('Square 4 is e1', () => {
  expect(algebreicNotation(4)).toBe('e1');
});


test('squares immutable', () => {
  expect(squares).toStrictEqual(boardInit());
});