//beepInput = '1';
//boopInput = '2';
//neighborInput = '3';

function checkForMatch(number) {
  let numberArray = [];
  for (let i = 0; number >= i; i++) {
    function checkForMatch(number) {
      let numberArray = [];
      for (let i = 0; number >= i; i++) {
        const element = i.toString();
        if (element.includes('3')) {
          numberArray.push("Won't you be my neighbor?");
        } else if (element.includes('2')) {
          numberArray.push('Boop!');
        } else if (element.includes('1')) {
          numberArray.push('Beep!');
        } else {
          numberArray.push(element);
        }
      }
      return numberArray;
    }
  }
}