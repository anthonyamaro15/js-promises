const promise1 = new Promise((resolve, reject) => {
   const timeout = Math.random() * 500;
   setTimeout(() => resolve('Promise 1 resolved after ', + timeout), timeout);
});

const promise2 = new Promise((resolve, reject) => {
   const timeout = Math.random() * 500;
   setTimeout(() => resolve("Promise 2 resolved after" + timeout), timeout);

   // catch from promise.all block will catch this error
   setTimeout(() => reject("promise 2 fail"), 100);
});

const promise3 = new Promise((resolve, reject) => {
   const timeout = Math.random() * 500;
   setTimeout(() => resolve("Promise 3 resolved after ", + timeout), timeout);
});

const promise4 = new Promise((resolve, reject) => {
   return resolve("not timeer");
});

// had use this in the pass with backend code.
Promise.all([promise1, promise2, promise3, promise4])
   .then((result) => console.log(result))
   .catch(error => console.log(error));
