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
