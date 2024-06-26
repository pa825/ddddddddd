(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      var greeting;

      if (firstLetter === 'j') {
          greeting = "Good Bye " + names[i];
      } else {
          greeting = "Hello " + names[i];
      }

      // Create a new paragraph element
      var paragraph = document.createElement("p");

      // Set the text content of the paragraph to the greeting
      paragraph.textContent = greeting;

      // Append the paragraph to the body of the HTML document
      document.body.appendChild(paragraph);
  }
})();
