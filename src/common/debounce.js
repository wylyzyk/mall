/**
 * 
 * @param {function} callback 回调函数 
 * @param {number} delay 延迟时间
 */

export function debounce (callback, delay) {
  let timer = null;

  return function (...args) {
    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  }
}