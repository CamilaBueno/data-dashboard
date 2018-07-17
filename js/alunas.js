var dropMenu = document.getElementById("drop-menu");
dropMenu.addEventListener("change", carregaProgramadoras);

var dropTurma = document.getElementById("drop-turma");
dropTurma.addEventListener("change", carregaTurma);

window.onload = carregaMenu();



function carregaMenu() {
  var nome = document.createElement("option");
  nome.innerHTML = "Selecione sede";
  nome.value = "none";
  dropMenu.appendChild(nome);
  for (sede in data) {
    var itemMenu = document.createElement("option");
    itemMenu.value = sede;
    itemMenu.innerHTML = sede;
    dropMenu.appendChild(itemMenu);

  }
};

function carregaProgramadoras() {
  var sede = dropMenu.value;
  var listaProgramadoras = document.getElementById("exibe-programadoras");
  listaProgramadoras.innerHTML = "";
  for (turma in data[dropMenu.value]) {
    for (i in data[dropMenu.value][turma]["students"]) {
      var img = document.createElement("img");
      img.src = data[dropMenu.value][turma]["students"][i]["photo"];
      listaProgramadoras.appendChild(img);
    }
  }
}
function carregaTurma() {
  var sede = dropMenu.value;
  var turma = dropTurma.value;
  var listaTurma = document.getElementById("exibe-turma");
  listaTurma.innerHTML = "";
  for(turma in data[dropMenu.value]) {
    for(i in data[dropMenu.value][dropTurma.value]["students"]){
      var geração = document.createElement("geração");
      geração.src = data[dropMenu.value][dropTurma.value]["students"][i]["photo"];
      listaTurma.appendChild(geração);
    }
  }
}