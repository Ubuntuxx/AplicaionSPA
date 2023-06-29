import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesServices} from "../../servicios/heroes.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html'
})
export class BuscardorComponent implements OnInit {
  heroes:any[] = []
  termino:string = '';

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesServices,
               private router:Router) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    });

  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx])
  }
}
