function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  function  filterOutOdds() {
      return [...nums].filter(num => num % 2 === 0)
  }

  function findMin() {
      return Math.min([...nums])
  }

  function mergeObjects(obj1, obj2) {
      return {...obj1, ...obj2}
  }
 
  function doubleAndReturnArgs(arr, x, y) {
      return [...arr, (2*x), (2*y)]
  }

  function update(obj, key, val) {
      return {...obj, [key]: val}
  }

  function combine(obj1,obj2) {
      return {...obj1, ...obj2}
  }

  function extend(array1, array2) {
      return [...array1, ...array2]
  }

  function addKeyVal( obj, key, val) {
      const newObj = {...obj};
      newObj[key] = val;
      return newObj
  }

  function removeKey(obj, key){
      const newObj = {...obj}
      delete newObj[key]
      return newObj
      
  }

  function removeRandom(...items) {
    let indx = Math.floor(Math.random()*items.length)
    return [...items .slice(0,indx), ...items.slice(indx + 1)]
  }