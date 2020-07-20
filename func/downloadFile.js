const getImg = function() {
  const imgList = [].slice.call(document.querySelectorAll('img')).map(item => item.src);
  return imgList;
};
