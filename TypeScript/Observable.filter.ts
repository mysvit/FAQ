Observable.from

or

Observable.of({field: {id: 0}}, {field: {id: 0}}, {field: {id: 1}})
                .filter((x: any) => {
                    // console.log(x);
                    let res = false;
                    let o = Observable.create(observer => {
                        console.log('next: ' + (x.field.id === 0));
                        observer.next(x.field.id === 0);
                        observer.complete();
                    });
                    o.subscribe((r) => {
                        console.log('sub: ' + r);
                        res = r;
                    });
                    console.log('result: ' + res);
                    return res;
                })
                .subscribe(data => console.log(data));
