export {}

declare global {
    interface Object {
    calcObject(my: any): any;
    }
}

if (!Object.prototype.hasOwnProperty('calcObject')) {
    Object.prototype.calcObject = function (my: any): any {
      return my;
    };
}


or 


export {}

declare global {
    interface String {
    calcWidth(): number;
    }
}

if (!String.prototype.hasOwnProperty('calcWidth')) {
    String.prototype.calcWidth = function (): number {
      return this.length;
    };
}


----- Add 
import './extension.ts';
----- to main.ts
