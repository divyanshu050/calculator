function display(val){
    document.getElementById("idjs").value+=val;
}

function solve(){
    let x = document.getElementById("idjs").value;
    let y = eval(x);
    document.getElementById("idjs").value = y;

}

function clr(){
    document.getElementById("idjs").value = " ";
}