import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public title: string;
  public text: string ;
  public images: string[];
  public index: number;
  public presentation: boolean;
  public isClose: boolean;

  constructor() {
    this.initData();
  }

  public initData(){
    this.title = 'Presentación';
    this.text = 'Posiciona tu cedula de forma horizontal claramente en el recuadro';
    this.index = 0;
    this.presentation = true;
    this.isClose = false;
    this.images = [];
  }

  public changeStep(event: number){
    this.index = event;
    if(this.index === 1){
      this.title = 'Respaldo de tu cédula';
    }
  }

  public next(){
    this.presentation = false;
    this.title = 'Frente de tu cédula';
  }

  public getImages(event: string[]){
    this.images = event;
    this.title = 'Lista de capturas';
  }

  public changeState(event): void{
    this.isClose = event;
  }

  public setTransparency(): string{
    return this.presentation || this.index >= 2 || this.isClose ? '' : 'transparent';
  }

}
