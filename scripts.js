// napisz funkcje, ktora przyjmie 2 argumenty a nastepnie wypisze w consoli typ przekazanych danych

const userName = "John Wick";
const isImmortal = true;

const checkType = (val1, val2) => {
  console.log(
    `pierwsza wartość jest typu danych: ${typeof val1}, a druga ${typeof val2}`
  );
};
checkType(userName, isImmortal);
checkType(isImmortal, userName);
checkType(1, 2);
checkType([1, 2, 3], { name: "John Wick" });

// napisz funkcje, któr wylosuje liczbą z zakresu przekazanego przez użytkownika, a następnie
// zwróci jej wynik

// będziemy losować liczbą od X do Y, od 1 do 49

const drawNumber = (min, max) => {
  // tutaj bedzie losowanie liczby
};
drawNumber(1, 10);

// Math floor - zaokrąglenie w dół
// Math.random - losuje liczbę z przedziału od 0 do 1

console.log(Math.floor(Math.random() * 100 + 1));
