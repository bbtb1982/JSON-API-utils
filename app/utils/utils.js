var parse_model = function(query){
    var result = {}
    var trigger = 0;
    var model = query.split('').map(function(c, idx){
      if(c === "["){ trigger = 1 }
      if(c === "]"){ trigger = 0 }
      return trigger;
    })
    .map(function(x, idx){ return (x === 1)? query[idx]:'' })
    .join('')
    .slice(1)

    return model;
}

var parse_model_1= function(query){
  var qArr    = query.split('');
  return query.slice(qArr.indexOf('[') + 1, qArr.indexOf(']'))
}

var parse_values = function(query){
  return query.split('=')[1].split(',').map(function(i){ return parseInt(i) });
}

var parse_filters = function(query){
  var filters = query.split('&')
  var result = {};

  filters.forEach(function(q){ result[`${parse_model(q)}`] = parse_values(q); });
  return result
}
export { parse_model, parse_model_1, parse_values,  parse_filters }
