  getRecursiveCall(valueID: Muid): Observable<any> {
  
    let callAndMap = (id) =>
      this.http.locate(IApiActFlowService).GetApiFlowAction(id)
      .map(res => {
          return {id: res.id, data: res}
      });  // map, and save the page number for recursion later.


    let res = callAndMap(valueID)
      .expand(obj => (
          (obj.id.value == Muid.empty.value) ? Observable.empty() : callAndMap(obj.id)
      ))
      .map(obj => obj);

      return Observable.create(observer => {
        let arr = [];
        res
          .finally(() => {
              observer.next(arr);
              observer.complete();
          })
          .subscribe((data) => {
              arr.push(data);
          })
      });
      
  }
