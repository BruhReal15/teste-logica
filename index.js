const alunos = [ 
    "Maria",
    "João"
];

const frutas = [
    "Pêra",
    "Maçã",
    "Nenhuma Fruta"
];
   
let mes = []; // vetor de Objetos umDia

// Preencherá a tabela aleatoriamente
function completarTabela() { 
    for (let i = 0; i < 30; i++) {
      let umDia = {
        frutas: [2, 2, 2], // cada posição representará uma fruta na qual a professora levará para casa.
        // fica convencionado que 0:pera, e 1:maçã, por fim 2:nenhuma fruta
      }
      
      umDia.pera = parseInt(Math.random() * 4); // sorteia numeros entre 0 e 4, onde o 4 não está incluso.
      umDia.maca = parseInt(Math.random() * 4);
      umDia.aluno = parseInt(Math.random() * 2);
      if (umDia.aluno == 0) { //maria foi a melhor aluna
        let qtdM = umDia.pera,
            qtdJ = umDia.maca;

        let n = 0;

//Preenche o vetor de frutas que a professora levou para casa
        for (; n < qtdM; n++)
            umDia.frutas[n] = 0;

        for (; n < 3 && qtdJ > 0; n++, qtdJ--)
            umDia.frutas[n] = 1;
      }
      else{ // joao foi o melhor aluno
        let qtdM = umDia.pera,
            qtdJ = umDia.maca;

        let n = 0;
        for(; n < qtdJ; n++)
            umDia.frutas[n] = 1;

        for (; n < 3 && qtdM > 0; n++, qtdJ--)
            umDia.frutas[n] = 0;

      }
      mes.push(umDia);
    }
}
   
//Preenchimento da tabela que será visivel no HTML   
function preencheTabela() {
    for (let i = 0; i < 30; i++) {
      let linhaAtual = document.createElement("tr"); // cria uma tag tr
      linhaAtual.appendChild(document.createElement("td")).innerText = i + 1; // i começa em zero, então para não aparecer dia 0 somamos 1 no valor de i
      linhaAtual.appendChild(document.createElement("td")).innerText = mes[i].pera; // inclui dentro da tag tr, uma tag td
      linhaAtual.appendChild(document.createElement("td")).innerText = mes[i].maca;
      linhaAtual.appendChild(document.createElement("td")).innerText = alunos[mes[i].aluno];
      linhaAtual.appendChild(document.createElement("td")).innerText = frutas[mes[i].frutas[0]];
      linhaAtual.appendChild(document.createElement("td")).innerText = frutas[mes[i].frutas[1]];
      linhaAtual.appendChild(document.createElement("td")).innerText = frutas[mes[i].frutas[2]];

      document.getElementById("Info").appendChild(linhaAtual); // inclui no elemento que possui ID = Info, a linha atual
                                                               // da tabela.    
    }
   }
   
   
//Calcular a quantidade de pêras e de maças que a professora levou no mês
function qtdFrutas(){
    let qtdPera = 0,
        qtdMaca = 0;

    for(let i = 0; i < 30; i++) // percorre os elementos do vetor mes
        for(let n = 0; n < 3; n++)
            if(mes[i].frutas[n] == 0) // percorre os elementos do vetor frutas de cada objeto dia
                qtdPera++;
            else if(mes[i].frutas[n] == 1)
                qtdMaca++;
        
// atribui o valor da variavel ao input do respectivo ID.
    document.getElementById("peras").value = qtdPera; 
    document.getElementById("macas").value = qtdMaca;
}

// chamada das funções
completarTabela();
preencheTabela();
qtdFrutas();