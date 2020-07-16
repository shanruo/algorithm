const throttle = function(fn) {
  let canRun = true;
  return function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, 500);
  };
};

const resize = function() {
  console.log('resize');
};

window.addEventListener('resize', throttle(resize));
