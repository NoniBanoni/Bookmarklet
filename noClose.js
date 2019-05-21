(function f() {
  window.onbeforeunload = function() {
    window.open(window.location.href).eval(`(${f})()`);
    return "";
  }
})()
