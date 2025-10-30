const Team = require("../src/team");

describe("Team", () => {
  let team;
  const char1 = { name: "Warrior", level: 10 };
  const char2 = { name: "Mage", level: 12 };
  const char3 = { name: "Archer", level: 8 };

  beforeEach(() => {
    team = new Team();
  });

  test("конструктор и toArray возвращают пустой массив", () => {
    expect(team.toArray()).toEqual([]);
  });

  test("метод add добавляет персонажа без ошибок", () => {
    expect(() => team.add(char1)).not.toThrow();
    expect(team.toArray()).toEqual([char1]);
  });

  test("метод add вызывает ошибку при добавлении одного и того же персонажа дважды", () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow("Этот персонаж уже в команде.");
  });

  test("метод addAll добавляет несколько персонажей", () => {
    team.addAll(char1, char2, char3);
    expect(team.toArray()).toEqual(
      expect.arrayContaining([char1, char2, char3])
    );
    expect(team.toArray()).toHaveLength(3);
  });

  test("метод addAll не добавляет дублирующие персонажи", () => {
    team.addAll(char1, char2);
    team.addAll(char1, char2, char3);
    expect(team.toArray()).toEqual(
      expect.arrayContaining([char1, char2, char3])
    );
  });

  test("метод toArray возвращает массив", () => {
    team.add(char1);
    expect(Array.isArray(team.toArray())).toBe(true);
    expect(team.toArray()).toEqual([char1]);
  });
});
