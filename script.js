// Get elements
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');

// Function to send a message
sendBtn.addEventListener('click', function() {
  const message = messageInput.value.trim();
  
  if (message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    messageInput.value = '';  // Clear input
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll to bottom
  }
});
