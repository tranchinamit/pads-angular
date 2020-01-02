import { CategoryDTO, SubCategoryDTO } from '../../models/category.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  categoryList: CategoryDTO[] = [];

  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {
    const BASE_URL = 'http://localhost:5000/category/getAll';
    fetch(`${BASE_URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        // console.log(res);
        this.categoryList = res.category;
      })
      .catch(error => console.error('Error:', error));
  }

  onClickCate(e: number) {
    const data = {
      'type': 'cate',
      'id': e
    };
    this.clicked.emit(data);
  }
  onClickSubCate(e: number) {
    const data = {
      'type': 'subCate',
      'id': e
    };
    this.clicked.emit(data);
  }
}
