(function (window) {
  var byeSpeaker = {};

  // Function to print "Goodbye Name"
  byeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };

  // Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;
})(window);
