import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buscardor',
  templateUrl: './buscardor.component.html'
})
export class BuscardorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['termino'])
    })
  }

}
