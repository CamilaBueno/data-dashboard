


var total = data.AQP["2016-2"].students.length;
 console.log(total);
 function mostraAtiva(){
  
  var actives = [];
  for(var i = 0; i< data.AQP["2016-2"].students.length; i++){
  actives.push(data.AQP["2016-2"].students[i].active);
  }
  return actives;
}
var total = data.AQP["2017-1"].students.length;
console.log(total);
function mostraAtiva(){
 
 var actives = [];
 for(var i = 0; i< data.AQP["2017-1"].students.length; i++){
 actives.push(data.AQP["2017-1"].students[i].active);
 }
 return actives;
}
var total = data.CDM["2017-1"].students.length;
console.log(total);
function mostraAtiva(){
 
 var actives = [];
 for(var i = 0; i< data.CDM["2017-2"].students.length; i++){
 actives.push(data.CDM["2017-2"].students[i].active);
 }
 return actives;
}
var total = data.CDM["2017-2"].students.length;
console.log(total);
function mostraAtiva(){
 
 var actives = [];
 for(var i = 0; i< data.CDM["2017-2"].students.length; i++){
 actives.push(data.CDM["2017-2"].students[i].active);
 }
 return actives;
}
var total = data.LIM["2016-2"].students.length;
 console.log(total);
 function mostraAtiva(){
  
  var actives = [];
  for(var i = 0; i< data.LIM["2016-2"].students.length; i++){
  actives.push(data.LIM["2016-2"].students[i].active);
  }
  return actives;
}
var total = data.LIM["2017-1"].students.length;
console.log(total);
function mostraAtiva(){
 
 var actives = [];
 for(var i = 0; i< data.LIM["2017-1"].students.length; i++){
 actives.push(data.LIM["2017-1"].students[i].active);
 }
 return actives;
}
var total = data.LIM["2017-2"].students.length;
console.log(total);
function mostraAtiva(){
 
 var actives = [];
 for(var i = 0; i< data.LIM["2017-2"].students.length; i++){
 actives.push(data.LIM["2017-2"].students[i].active);
 }
 return actives;
}
 
 
 
 
 var total = data.SCL["2016-2"].students.length;
 console.log(total);
 function mostraAtiva(){
  
  var actives = [];
  for(var i = 0; i< data.SCL["2016-2"].students.length; i++){
  actives.push(data.SCL["2016-2"].students[i].active);
  }
  return actives;
}
var total = data.SCL["2017-1"].students.length;
 console.log(total);
 function mostraAtiva(){
  
  var actives = [];
  for(var i = 0; i< data.SCL["2017-1"].students.length; i++){
  actives.push(data.SCL["2017-1"].students[i].active);
  }
  return actives;
}
var total = data.SCL["2017-2"].students.length;
 console.log(total);
 function mostraAtiva(){
  
  var actives = [];
  for(var i = 0; i< data.SCL["2017-2"].students.length; i++){
  actives.push(data.SCL["2017-2"].students[i].active);
  }
  return actives;
}
 console.log(mostraAtiva());

 function mostraInativa(total, actives){
  var inatives = total - actives;
  return inatives;
 }
 console.log(mostraInativa(11,3));

 function calculaMedia(){
  var mediaJedi = [];

  for(var i = 0; i < data.AQP['2016-2'].ratings.length; i++){
    mediaJedi.push(data.AQP['2016-2'].ratings[i].jedi);

  }
  var somaJedi = mediaJedi.reduce(function(acumulator, valorAtual){
    return acumulator + valorAtual;
  });
var resultMediaJedi = somaJedi / mediaJedi.length;
var porcentagenJedi = Math.round(resultMediaJedi * 100)/ 5;
return porcentagenJedi;
 }
 
  
  console.log(calculaMedia());

  function calculaMediaTeachers(){
    var mediaTeachers = [];
  
    for(var i = 0; i < data.AQP['2016-2'].ratings.length; i++){
      mediaTeachers.push(data.AQP['2016-2'].ratings[i].teacher);
  
    }
    var somaTeachers = mediaTeachers.reduce(function(acumulator, valorAtual){
      return acumulator + valorAtual;
    });
  var resultMediaTeachers = somaTeachers / mediaTeachers.length;
  var porcentagenTeachers = Math.round(resultMediaTeachers * 100)/ 5;
  return porcentagenTeachers;
   }
   
    
    console.log(calculaMediaTeachers());
    function calculaMediaNps(){
      var mediaNps = [];
    
      for(var i = 0; i < data.AQP['2016-2'].nps.promoters.length; i++){
        mediaNps.push(data.AQP['2016-2'].nps[i].promoters);
    
      }
      var somaNps = mediaNps.reduce(function(acumulator, valorAtual){
        return acumulator + valorAtual;
      });
    var resultMediaNps = somaNps * 100;
    var porcentagenNps = Math.round(resultMediaNps * 100)/ 5;
    return porcentagenNps;
     }
     function calculaMediaNps(){
      var mediaNps = [];
    
      for(var i = 0; i < data.SCL['2016-2'].nps.promoters.length; i++){
        mediaNps.push(data.SCL['2016-2'].nps[i].promoters);
    
      }
      var somaNps = mediaNps.reduce(function(acumulator, valorAtual){
        return acumulator + valorAtual;
      });
    var resultMediaNps = somaNps * 100;
    var porcentagenNps = Math.round(resultMediaNps * 100)/ 5;
    return porcentagenNps;
     }
     console.log(calculaMediaNps());
     