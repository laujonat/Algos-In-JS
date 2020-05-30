const debounce = function(fn, time) {
  let timeout;
  return function() {
    const _fn = () => {
      return fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(_fn, time);
  };
};

function memoize(method) {
  let cache = {};

  return async function() {
    let args = JSON.stringify(arguments);
    cache[args] = cache[args] || method.apply(this, arguments);
    return cache[args];
  };
}

module.exports = {
  debounce,
  memoize,
};
