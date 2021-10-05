const counter = document.querySelector('#counter');
const buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.contains('prevBtn') ? count-- : count++;
    counter.textContent = count.toString();
    if (count > 0) {
      counter.classList.remove('red');
      counter.classList.add('green');
    } else if (count < 0) {
      counter.classList.remove('green');
      counter.classList.add('red');
    } else {
      counter.classList.remove('green');
      counter.classList.remove('red');
    }
  });
});

/* const subCount = () => {
   initCountValue--;
   counter.textContent = initCountValue.toString();
   return initCountValue;
 };
 const addCount = () => {
   initCountValue++;
   counter.textContent = initCountValue.toString();
   return initCountValue;
 };

 subBtn.addEventListener('click', subCount);
 addBtn.addEventListener('click', addCount);

 console.log(counter);

*/
