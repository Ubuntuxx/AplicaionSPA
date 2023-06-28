import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesServices} from "../../servicios/heroes.services";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesServices) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroe(params['id'])
    })
  }
}
