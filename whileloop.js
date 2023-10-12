let count=0;

function updatecount(){
    document.getElementById("count").textContent=count;
}

function increment(){
    count++
    updatecount()
}

function decrement(){
    count--
    updatecount()
}
function reset(){
    count=0
    updatecount()
}
updatecount()