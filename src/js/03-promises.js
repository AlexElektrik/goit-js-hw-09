import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', valuePromise);

function valuePromise(e) {
  e.preventDefault();
  const {
    elements:  {delay, step, amount}
  } = e.currentTarget;

  const firstDelay = Number(delay.value);
  const time = Number(delay.value) + Number(step.value) * Number(amount.value);
  const stepDelay = Number(step.value);

  let position = 1;
  for (let delays = firstDelay; delays <= time; delays = delays + stepDelay){
   
        setTimeout(() => {
        createPromise(position, delays)
          .then(({ position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
          position = position + 1;
         },delays);
     };
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
  });
  };
