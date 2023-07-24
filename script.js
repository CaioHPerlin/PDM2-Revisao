//Exercicio 1
const updateSubject = () => {
    title = document.getElementById("subject-input").value;
    document.getElementById("subject-title").innerHTML = title;
} 

//Exercicio 2
const resultSum = document.createElement('p');
document.getElementById("e2").appendChild(resultSum)
const sum = () => {
    const sum1 = parseFloat(document.getElementById("sum1").value)
    const sum2 = parseFloat(document.getElementById("sum2").value)
    resultSum.innerHTML = sum1 + sum2
}

//Exercicio 3
const resultApprobation = document.createElement('p');
document.getElementById("e3").appendChild(resultApprobation);
const approbation = () => {
    const grade1 = parseFloat(document.getElementById("grade1").value)
    const grade2 = parseFloat(document.getElementById("grade2").value)
    const grade3 = parseFloat(document.getElementById("grade3").value)
    const grade4 = parseFloat(document.getElementById("grade4").value)
    const avg = (grade1 + grade2 + grade3 + grade4)/4

    let result = "Reprovado";
    if(avg >= 7){
         result = "Aprovado";
    }

    resultApprobation.innerHTML = `${result} | Média ${avg}`;
}

//Exercicio 5
const multiplicationTable = () => {
    
}