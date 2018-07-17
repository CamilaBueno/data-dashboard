
 var total = data.SCL["2016-2"].students.length;
 console.log(total);
 function mostraAtiva(){
  
  var actives = [];
  for(var i = 0; i< data.SCL["2016-2"].students.length; i++){
  actives.push(data.SCL["2016-2"].students[i].active);
 
  }
  return actives;
}
 console.log(mostraAtiva());
 function mostraInativa(total, actives){
  var inatives = total - actives;
  return inatives;
 }
 console.log(mostraInativa(11,3));

 
  