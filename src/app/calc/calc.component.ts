import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  espressione: string = ''

  constructor() { }

  ngOnInit() {
  }

  add(numero){
    var lastChar: string = this.espressione.substr(this.espressione.length - 1, this.espressione.length);

    if(this.operatore(numero) && this.operatore(lastChar)){
      numero = ''
    }
    this.espressione += numero;
  }

  cancella(){
    this.espressione = ""
  }

  somma(){
    this.espressione = eval(this.espressione);
  }

  meno(){
    this.espressione = this.espressione.substr(0, this.espressione.length -1);
  }

  inversione(){
    this.espressione = '-' + this.espressione;
  }

  operatore(char: string){
    return char == '+' || char == '/' || char == '*' || char == '-' ? true : false;
  }

}