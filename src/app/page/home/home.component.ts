import { CategoryDTO } from './../../models/category.model';
import { AdsDTO } from './../../models/ads.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listAds: AdsDTO[] = [];
  listCate: CategoryDTO[] = [];
  options = {
    limit: 12,
    skip: 0
  };

  constructor() {}

  ngOnInit() {
    const urlAds = `http://localhost:5000/getLatestPost?limit=${this.options.limit}&skip=${this.options.skip}`;
    fetch(`${urlAds}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.listAds = res;
      })
      .catch(error => console.error('Error:', error));

    const urlCate = 'http://localhost:5000/category/getAll';
    fetch(`${urlCate}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        this.listCate = res.category;
      })
      .catch(error => console.error('Error:', error));
  }
}
