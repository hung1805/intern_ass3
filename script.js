const vatTax = 0.1;
const startPeriod = document.querySelector('#start-period');
const endPeriod = document.querySelector('#end-period');
const numberOfLetters = document.querySelector('#num-of-letter');
const total = document.querySelector('#total');
const clearBtn = document.querySelector('#clear-btn');
const calBtn = document.querySelector('#cal-btn');
const caculateAmount = () => {
  const starPer = startPeriod.value;
  const endPer = endPeriod.value;
  const numOfLet = endPer - starPer;

  if (starPer === '') return alert('Please enter start period');
  if (typeof starPer == 'number') return alert('Please enter start period in numberic');
  if (endPer === '') return alert('Please enter end period');
  if (typeof endPer == 'number') return alert('Please enter end period in numberic');

  if (endPer < starPer) return alert('Please enter end period greater than start period');

  let amount = 0;
  if (numOfLet > 0 && numOfLet <= 50) {
    amount = numOfLet * 1.48;
  }
  if (numOfLet > 50 && numOfLet <= 100) {
    amount = numOfLet * 1.5;
  }
  if (numOfLet > 100) {
    amount = numOfLet * 1.8;
  }
  final = ((amount += amount * 0.1) * 1000).toFixed(2);
  numberOfLetters.value = numOfLet;
  total.value = final;
};
const clearInput = () => {
  startPeriod.value = '';
  endPeriod.value = '';
  numberOfLetters.value = '';
  total.value = '';
};

clearBtn.addEventListener('click', clearInput);
calBtn.addEventListener('click', caculateAmount);
