import { Component } from '@angular/core';
import { Filmes } from './Models/Filmes';
import { JsonService } from './Service/JSONService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmes: Filmes[];

  constructor(
    private jsonService: JsonService,
  ){}

  ngOnInit(){
    this.buscarDadosJson();
  }

  buscarDadosJson(){
    this.jsonService.getJSON().subscribe(
      element => {
        this.filmes = element;
      }
    );
  }
}
