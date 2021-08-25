import { Component } from '@angular/core';
import { Filmes } from './Models/Filmes';
import { JsonService } from './Service/JSONService';
import { faEye, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmes: Filmes[];
  filmeSelecionado: Filmes;
  faEye = faEye;
  faFileAlt = faFileAlt;

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

  selecionarFilme(indexSelecionado: number){
    this.filmeSelecionado  = this.filmes[indexSelecionado];
  }
}
