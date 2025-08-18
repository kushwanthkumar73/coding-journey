let chatbotMsgList = [
    "Hi 👋",
    "Hey there!",
    "Good Morning ☀️",
    "Good Evening 🌇",
    "How can I help you?",
    "Thank you!",
    "I’m here to chat 😊"
];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatbot() {
    let userMsg = userInputEl.value.trim();
    if (userMsg === "") return;

    // User message
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");

    msgContainerEl.appendChild(userMsgEl);
    chatContainerEl.appendChild(msgContainerEl);
    chatContainerEl.scrollTop = chatContainerEl.scrollHeight;

    userInputEl.value = "";

    // Delay bot reply
    setTimeout(getReplyFromChatbot, 500);
}

function getReplyFromChatbot() {
    let chatbotMsg = chatbotMsgList[Math.floor(Math.random() * chatbotMsgList.length)];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");

    msgContainerEl.appendChild(chatbotMsgEl);
    chatContainerEl.appendChild(msgContainerEl);
    chatContainerEl.scrollTop = chatContainerEl.scrollHeight;
}