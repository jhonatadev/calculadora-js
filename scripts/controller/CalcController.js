class CalcController {
    
    constructor(){
        this._displayCalc = "0";
        this._dataAtual; 
    }

    get displayCalc(){
        return this._displayCalc;
    }
    set displayCalc(){
        this._displayCalc = valor;
    }

    get _dataAtual(){
        return this._dataAtual;
    }
    set dataAtual(valor){
         this._dataAtual = valor;
    }

}