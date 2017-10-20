var list = [2,4,6,6,4,6,3];

function numberSorter(list){
    list.sort(function(a, b){
  return b - a;         
});
return list;
}

console.log( numberSorter(list));
