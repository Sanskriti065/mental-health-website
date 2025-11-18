// Quotes for Motivation Page
const quotes = [
    "You are stronger than you think.",
    "Every day is a second chance.",
    "It’s okay to not be okay.",
    "You matter. Your feelings matter.",
    "Slow down. Breathe. You’re doing your best.",
    "Healing takes time — and that is okay."
];

function newQuote() {
    let q = document.getElementById("quoteBox");
    if(q){
        q.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }
}

// Chatbot response
function botReply(msg){
    msg = msg.toLowerCase();

    if(msg.includes("sad")) return "I’m sorry you're feeling this way. Want to talk about it?";
    if(msg.includes("stress")) return "Stress can be overwhelming. Take a deep breath with me.";
    if(msg.includes("alone")) return "You’re not alone. I'm here for you.";
    if(msg.includes("happy")) return "That’s wonderful! What made you feel happy today?";

    return "I'm listening... tell me more.";
}

function sendMessage(){
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if(text === "") return;

    const chatBox = document.getElementById("chatBox");

    const userMsg = document.createElement("div");
    userMsg.className = "msg user";
    userMsg.innerHTML = text;
    chatBox.appendChild(userMsg);

    setTimeout(()=>{
        const botMsg = document.createElement("div");
        botMsg.className = "msg bot";
        botMsg.innerHTML = botReply(text);
        chatBox.appendChild(botMsg);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
