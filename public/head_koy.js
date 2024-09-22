var loah = 0
var history_win = 0
var history_lose = 0
function result_head ()
{
    var head_koy = Math.floor(Math.random() * 10)
    if (head_koy <= 5)
    {
        var result = "หัว"
    }
    else
    {
        var result = "ก้อย"
    }
    if ("หัว" == result){
        var final_result = "You win"
        history_win = (history_win += 1)
    }
    else{
        var final_result =  "You lose"
        history_lose = (history_lose += 1)
    }
    document.getElementById ("result").innerHTML += "round " + (loah+=1) + " : " + final_result +"<br>"
    document.getElementById ("history").innerHTML = "ประวัติการเล่น ชนะ : " + history_win + (" เเพ้ : ") + history_lose
    if ((history_lose - 10) == history_win){
        alert("โคตรกาก")
    }
}
function result_koy ()
{
    var head_koy = Math.floor(Math.random() * 10)
    if (head_koy <= 5)
    {
        var result = "หัว"
    }
    else
    {
        var result = "ก้อย"
    }
    if ("ก้อย" == result){
        var final_result = "You win"
        history_win = (history_win + 1)
    }
    else{
        var final_result =  "You lose"
        history_lose = (history_lose + 1)
    }
    document.getElementById ("result").innerHTML += "round " + (loah+=1) + " : " + final_result +"<br>"
    document.getElementById ("history").innerHTML = "ประวัติการเล่น ชนะ : " + history_win + (" เเพ้ : ") + history_lose
    if ((history_lose - 10) == history_win){
        alert("โคตรกาก")
    }
}  
document.getElementById ("history").innerHTML = "ประวัติการเล่น ชนะ : " + history_win + (" เเพ้ : ") + history_lose
