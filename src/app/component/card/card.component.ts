import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public personagens: Personagem[] = [];

  constructor(private _service: ServiceService) { }

  ngOnInit(): void {
    // this._service.getPersonagens().subscribe(retorno => {console.log(retorno)})
    this._service.getPersonagens()
      .subscribe(
        retorno => {
          console.log(retorno);
          this.personagens = retorno.map(func =>{
            return new Personagem(
              func.id,
              func.nome,
              func.habilidade,
              func.planeta,
              func.armas,
              func.avatar
            )
          })
          console.log(this.personagens)
        }
      )

  }

}

export class Personagem {
  id: string;
  nome: string;
  habilidade: string;
  planeta: string;
  armas: string;
  avatar: string

  constructor(id: string, nome: string, habilidade: string, planeta: string, armas: string, avatar: string) {
    this.id = id;
    this.nome = nome;
    this.habilidade = habilidade;
    this.planeta = planeta;
    this.armas = armas;
    this.avatar = avatar;
  }

}
