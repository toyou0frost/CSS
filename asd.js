let i = 0;

function plus(){
    i++
    document.getElementById("false").value = i;
}

function clac(){
    const FQ = document.getElementById("false").value;
    const Q = document.getElementById("getQ").value;
    const TQ = Q - FQ;
    const QP = TQ/Q * 100;
    document.getElementById("QP").value = Math.round(QP)+"%";
}

function resetI(){
    i = 0;
}