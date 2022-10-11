const executeMethod = (obj, keys, method, params) => {
  let targetKey = obj;
  let keyArray = keys.split('.');

  for(let i = 0; i < keyArray.length; i++){
    if(!targetKey.hasOwnProperty(keyArray[i])){return null}
    
    targetKey = targetKey[keyArray[i]]
  }

  return targetKey[method](...params)
};

module.exports = executeMethod;