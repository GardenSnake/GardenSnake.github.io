const message = document.getElementById('chat-msg');
const button = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-room');
const sendMsg = () => {
    const textMsg = message.value;
    if (textMsg) {
        chatBox.innerHTML = chatBox.innerHTML + `<br>${textMsg}`;
        message.value = '';
    }
};
button.addEventListener('click', sendMsg);
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) 
        sendMsg();
    }
);
