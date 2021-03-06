1. Subscribe.

  public dataSubject: ReplaySubject<MyClass> = new ReplaySubject<MyClass>(1);

  export class MyService {

  public GetData() {
    this.http.post()
      .subscribe((data) => {
        this.dataSubject.next(
            new MyClass(
                data.OneDataClass.map((one) => new MySubClass(one.ID, one.text))
                ,data.SecondDataClass.map((second) => new MySubClass(second.ID, second.text))
            )
        )
      );
    },
    (error) => {
        console.log(error);
    });
  }


1.1 Subscribe Subject in other component

    private myClass: MyClass;

    constructor(private myService: MyService) {    }

    ngOnInit() {
        this.myService.dataSubject.subscribe(data => {
            this.myClass = data
        });
    }
    
2. Map.

  public GetNotification(): Observable<MyClass> {
    this.http.post()
    .map((data) => 
           return   new MyClass(
                data.OneDataClass.map((one) => new MySubClass(one.ID, one.text))
                ,data.SecondDataClass.map((second) => new MySubClass(second.ID, second.text))
              )
          )
    .catch((error) => {
              return new Observable(error);
          });
  }
  
  1.1 Call subscribe in other component

    private myClass: MyClass;

    constructor(private myService: MyService) {    }

    ngOnInit() {
        this.myService.subscribe(data => {
            this.myClass = data
        });
    }

 == General Classes ==

export class MySubClass {
    id: string;
    title: string;

     constructor (id: string, title: string)
     {
        this.id = id;
        this.title = title;         
     }
}

export class MyClass {
    one: MySubClass[];
    second: MySubClass[];

     constructor (one: MySubClass[], second: MySubClass[])
     {
        this.one = one;
        this.second = second;         
     }
}
