(function () {
  // Array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop through the names array
  for (var i = 0; i < names.length; i++) {
    // Get the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Check if the first letter is 'j'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // Call byeSpeaker
    } else {
      helloSpeaker.speak(names[i]); // Call helloSpeaker
    }
  }
})();
