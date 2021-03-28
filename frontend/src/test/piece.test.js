import boardInit from '../helpers/BoardInit.js';
const squares = boardInit()
test('check pawn isMovePossible', () => {
    expect(squares[8].isMovePossible(8,24)).toBe(true);
    expect(squares[8].isMovePossible(8,16)).toBe(true);
    expect(squares[8].isMovePossible(8,15)).toBe(false);
    expect(squares[8].isMovePossible(8,17)).toBe(true);
    expect(squares[8].isMovePossible(7,16)).toBe(false);
  });
  
  test('check rook isMovePossible', () => {
    expect(squares[7].type).toBe('r');
    expect(squares[7].isMovePossible(7,55)).toBe(true);
    expect(squares[7].isMovePossible(7,8)).toBe(false);
    expect(squares[7].isMovePossible(7,0)).toBe(true);
    expect(squares[7].isMovePossible(7,15)).toBe(true);
  });
  
  test('check king isMovePossible', () => {
    expect(squares[4].isMovePossible(4,3)).toBe(true);
    expect(squares[4].isMovePossible(4,11)).toBe(true);
    expect(squares[60].isMovePossible(60,52)).toBe(true);
    expect(squares[60].isMovePossible(60,44)).toBe(false);
  });
  
  test('check queen isMovePossible', () => {
    expect(squares[3].type).toBe('q');
    expect(squares[59].type).toBe('q');
    expect(squares[3].isMovePossible(3,0)).toBe(true);
    expect(squares[3].isMovePossible(3,19)).toBe(true);
    expect(squares[59].isMovePossible(59,43)).toBe(true);
    expect(squares[59].isMovePossible(59,)).toBe(false);
  });
  test('check bishop isMovePossible', () => {
    expect(squares[6].type).toBe('b');
    expect(squares[62].type).toBe('b');
    expect(squares[6].isMovePossible(6,15)).toBe(true);
    expect(squares[6].isMovePossible(6,14)).toBe(false);
    expect(squares[62].isMovePossible(62,53)).toBe(true);
    expect(squares[62].isMovePossible(62,52)).toBe(false);
  });
  test('check knight isMovePossible', () => {
    expect(squares[2].type).toBe('kn');
    expect(squares[58].type).toBe('kn');
    expect(squares[2].isMovePossible(2,19)).toBe(true);
    expect(squares[2].isMovePossible(2,17)).toBe(true);
    expect(squares[58].isMovePossible(58,48)).toBe(true);
    expect(squares[58].isMovePossible(58,52)).toBe(true);
  });