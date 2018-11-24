(function () {
  const x = document.querySelectorAll('.tablinks');
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', (event) => {
      event.preventDefault();

      const y = document.querySelectorAll('[data-content]');
      for (let j = 0; j < y.length; j++) {
        if (y[j].dataset.content === x[i].dataset.button) {
          y[j].classList.add('display');
        } else {
          y[j].classList.remove('display');
        }
      }
    });
  }
}());
