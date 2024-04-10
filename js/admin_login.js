const texts = [
    "Welcome to Admin Login Portal.",
    "Please log in with your creditials.",
    "For further queries",
    "Please contact the Hostel  Office.",
    "Thank you!"
  ];

  const delay = 100;
  let textIndex = 0; 

  function typeWriter(text, i, typingElement) {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      setTimeout(function() {
        typeWriter(text, i + 1, typingElement);
      }, delay);
    } else {

      setTimeout(function() {
        typingElement.innerHTML = '';
        textIndex = (textIndex + 1) % texts.length; 
        typeWriter(texts[textIndex], 0, typingElement); 
      }, delay * 5);
    }
  }

  window.onload = function() {
    const typingElement = document.getElementById('typing-text');
    typeWriter(texts[textIndex], 0, typingElement);
  };