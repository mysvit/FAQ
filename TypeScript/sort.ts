// ---------------------------method simple ASC

sortArray(obj: any, orderField: string): any {
    obj.sort(function(a, b) {
      if (a[orderField] < b[orderField]) return -1;
      if (a[orderField] > b[orderField]) return 1;
      return 0;
    });
    return obj;
  }
  
// ----------------------------Pipe complicate
@Pipe({name: 'orderBy'})

export class orderBy implements PipeTransform {
    transform(obj: any, orderFields: string): any {
        orderFields.forEach(function(currentField) {
            var orderType = 'ASC';

            if (currentField[0] === '-') {
                currentField = currentField.substring(1);
                orderType = 'DESC';
            }

            obj.sort(function(a, b) {
                if (orderType === 'ASC') {
                    if (a[currentField] < b[currentField]) return -1;
                    if (a[currentField] > b[currentField]) return 1;
                    return 0;
                } else {
                    if (a[currentField] < b[currentField]) return 1;
                    if (a[currentField] > b[currentField]) return -1;
                    return 0;
                }
            });

        });
        return obj;
    }
}
