import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() cateName: string = '';
  @Input() cateId: number = 0;
  @Input() subCateName: string = '';

  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickedCate(e: number) {
    const data = {
      'type': 'cate',
      'id': e
    };
    this.clicked.emit(data);
  }

}
