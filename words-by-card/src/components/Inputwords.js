let wordsmass = [];
fetch("http://itgirlschool.justmakeit.ru/api/words")
  .then((response) => response.json())
  .then((allwords) => {
    console.log(allwords);
    wordsmass = allwords.map((item) => item);
    console.log(wordsmass);
  })
  .catch((error) => console.log(error));
console.log(wordsmass);
