import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})

export class ValidateComponent implements OnInit {
   param1='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.param1 = this.route.snapshot.queryParams["param1"];
    console.log(this.param1);
  }

}
