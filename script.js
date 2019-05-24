function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var buttonDelete = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
        function buttonDel() {
            socket.emit("karam jnjem?");
            while(chatDiv.lastElementChild.innerHTML != 'Delete'){
                chatDiv.removeChild(chatDiv.lastElementChild)
            }
        //    while(chatDiv.lastChild!=)
       
    }
    buttonDelete.onclick = buttonDel;
    socket.on('display message', handleMessage);
    //socket.on("de jnjeq dzer messagenery!", deleteMessages);
} // main closing bracket

window.onload = main;