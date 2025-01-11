(function (window) {
  var helloSpeaker = {};

  // Function to print "Hello Name"
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };

  // Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;
})(window);
