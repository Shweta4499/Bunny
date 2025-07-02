document.getElementById("sendMessage").addEventListener("click", function () {
    const userInputField = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    const userInput = userInputField.value.toLowerCase().trim();
  
    const bunnySpeech = document.getElementById("bunnySpeech");
    const bunnyText = document.getElementById("bunnyText");
  
    if (!userInput) return;
  
    // Show user's message in chatbox
    const userMessage = document.createElement("div");
    userMessage.className = "chat-message user";
    userMessage.textContent = userInputField.value;
    chatbox.appendChild(userMessage);
  
    let response = "";
  
    // Bunny's reply logic
    if (userInput.includes("hard day") || userInput.includes("bad") || userInput.includes("tough")) {
      response = "Aww, I’m sorry it’s tough! 🐰💖 You're doing amazing!";
    } else if (userInput.includes("good") || userInput.includes("great") || userInput.includes("happy")) {
      response = "Yay, that’s awesome! 🌟 Keep shining bright!";
    } else if (userInput.includes("hello") || userInput.includes("hi")) {
      response = "Hello there! 👋 I'm here to cheer you on!";
    } else {
      response = "I’m here to listen and cheer you up anytime! 🐇💫";
    }
  
    // Show bunny's reply in chatbox
    const bunnyReply = document.createElement("div");
    bunnyReply.className = "chat-message bunny";
    bunnyReply.textContent = response;
    chatbox.appendChild(bunnyReply);
  
    // Show bunny's speech bubble
    bunnyText.textContent = response;
    bunnySpeech.style.display = "block";
  
    // Auto-hide the bunny speech after 5 seconds
    setTimeout(() => {
      bunnySpeech.style.display = "none";
    }, 5000);
  
    userInputField.value = ""; // Clear input
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to latest
  });
  