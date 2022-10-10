const executeMethod = (obj, keys, method, params) => {
  let targetKey = obj;
  let keyArray = [];

  if(keys.length <= 1){
    keyArray.push(keys)
  }else{
    keyArray = keys.split('.');
  }

  for(let i = 0; i < keyArray.length; i++){
    if(!targetKey.hasOwnProperty(keyArray[i])){return null}
    
    targetKey = targetKey[keyArray[i]]
  }


  let paramsList = '';

  for(let  i = 0; i < params.length; i++){
    paramsList += ', `' + params[i] + '`'
  };

  return(eval(`${JSON.stringify(targetKey)}.${method}(${paramsList.substring(1)})`))
};

module.exports = executeMethod;