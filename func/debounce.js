const debounce = function(fn) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
};

const inputKW = function() {
  console.log('debounce');
};

const dom = document.getElementById('content');
dom.addEventListener('input', debounce(inputKW));
