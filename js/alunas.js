var dropMenu = document.getElementById('drop-menu');
dropMenu.addEventListener('change', carregaProgramadoras);

var dropTurma = document.getElementById('drop-turma');
dropTurma.addEventListener('change', carregaTurma);

window.onload = carregaMenu();



function carregaMenu() {
  var nome = document.createElement('option');
  nome.innerHTML = 'Selecione sede';
  nome.value = 'none';
  dropMenu.appendChild(nome);
  for (sede in data) {
    var itemMenu = document.createElement('option');
    itemMenu.value = sede;
    itemMenu.innerHTML = sede;
    dropMenu.appendChild(itemMenu);

  }
};

function carregaMenuTurma(turmas){
  var nome = document.createElement('option');
  dropTurma.appendChild(nome);
  dropTurma.innerHTML = '';
  nome.innerHTML = 'Selecione turma';
  nome.value = 'none';
  dropTurma.appendChild(nome);
  for (turma in turmas) {
    var itemMenu = document.createElement('option');
    itemMenu.value = turma;
    itemMenu.innerHTML = turma;
    dropTurma.appendChild(itemMenu);
  }
};

function carregaProgramadoras() {
  var sede = dropMenu.value;
  var listaProgramadoras = document.getElementById('exibe-programadoras');
  listaProgramadoras.innerHTML = '';
  for (turma in data[dropMenu.value]) {
    for (i in data[dropMenu.value][turma]['students']) {
      var img = document.createElement('img');
      img.src = data[dropMenu.value][turma]['students'][i]['photo'];
      listaProgramadoras.appendChild(img);
    }
  }
  carregaMenuTurma(data[dropMenu.value]);
}

function carregaTurma() {
  var sede = dropMenu.value;
  var turma = dropTurma.value;
  var listaProgramadoras = document.getElementById('exibe-programadoras');
  listaProgramadoras.innerHTML = '';
if(turma === 'none') {
  carregaProgramadoras();
} else{
  for(i in data[sede][turma]['students']){
    var geração = document.createElement('img');
    geração.src = data[sede][turma]['students'][i]['photo'];
    listaProgramadoras.appendChild(geração);
  }
}
    
}