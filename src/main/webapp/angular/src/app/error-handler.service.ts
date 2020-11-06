import {ErrorHandler,Injectable} from '@angular/core';

@Injectable()
export class ErrorHandlerService extends ErrorHandler{


    constructor(){
        super();
    }
    
    handleError(error:ErrorHandler){
        console.log(error);
    }
}