recursiveSearch(data: any, keyObj:any ):any
{
  var p, key, val, tRet;
  var arr = [];

  for (p in keyObj) {
    if (keyObj.hasOwnProperty(p)) {
      key = p;
      val = keyObj[p];
    }
  }

  for (p in data) {
    if (p == key) {
      if (data[p] == val) {
        arr.push(data); // console.log("found");
      }
    } else if (data[p] instanceof Object) {
      if (data.hasOwnProperty(p)) {
        tRet = this.recursiveSearch(data[p], keyObj);
        if (tRet) {
          for (var i = 0; i < tRet.length; i++)
            arr.push(tRet[i]);
        }
      }
    }
  }

  if (arr.length > 0)
    return arr;
  else
    return false;
}



public recursiveSearch(keyObj: any):any  {
  var o, key, val, res;
  var arr = [];

  for (o in keyObj) {
    if (keyObj.hasOwnProperty(o)) {
      key = o;
      val = keyObj[o];
    }
  }

  for (o in this) {
    if (o == key) {
      if (this[o] == val) {
        arr.push(this);
      }
    } else if (this[o] instanceof Object) {
      if (this.hasOwnProperty(o)) {
        res = this.recursiveSearch(keyObj);
        if (res) {
          for (var i = 0; i < res.length; i++)
            arr.push(res[i]);
        }
      }
    }
  }

  if (arr.length > 0)
    return arr;
  else
    return false;
}


