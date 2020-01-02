import { CategoryDTO } from './../../Models/category.model';
import { RegionDTO, AreaDTO } from './../../models/region.model';
import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryList: CategoryDTO[] = [];
  regionList: RegionDTO[] = [];
  areaList: AreaDTO[] = [];

  @Output() search = new EventEmitter();

  subCategoryId: number = null;
  regionId: number = null;
  areaId: number = null;
  keyWord: string = null;
  isShow: Boolean = false;

  loadingArea: Boolean = true;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    // this.getCategory();
    // this.getArea();
    this.getRegion();
    // console.log(this.areaList);
  }

  getRegion() {
    const BASE_URL = 'http://localhost:5000/region/getAll';
    fetch(`${BASE_URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        // console.log(res);
        this.regionList = res.region;
      })
      .catch(error => console.error('Error:', error));
  }

  // getArea() {
  //   const BASE_URL = 'http://localhost:5000/area/getAll';
  //   fetch(`${BASE_URL}`, { method: 'GET' })
  //     .then(response => response.json())
  //     .then(res => {
  //       // console.log(res);
  //       this.areaList = res.area;
  //     })
  //     .catch(error => console.error('Error:', error));
  // }

  // getCategory() {
  //   const BASE_URL = 'http://localhost:5000/category/getAll';
  //   fetch(`${BASE_URL}`, { method: 'GET' })
  //     .then(response => response.json())
  //     .then(res => {
  //       // console.log(res);
  //       this.categoryList = res.category;
  //     })
  //     .catch(error => console.error('Error:', error));
  // }

  selectRegion(e: any) {
    console.log(e.target.value);
    if (e.target.value !== `null`) {
      this.regionId = e.target.value;
      this.loadingArea = false;
      this.regionList.forEach(item => {
        if (item.regionId === this.regionId) {
          this.areaList = item.area;
          this.loadingArea = false;
          this.areaId = null;
          this.ref.detectChanges();
        }
      });
    } else {
      this.loadingArea = true;
      this.areaList = [];
      this.regionId = null;
      this.areaId = null;
    }
  }

  selectArea(e: any) {
    if (e.target.value !== `null`) {
      this.areaId = e.target.value;
    } else {
      this.areaId = null;
    }

  }

  selectSubCategory(e: any) {
    this.subCategoryId = e.target.value;
  }

  onKeyEnter(event) {
    if (event.key === 'Enter') {
      console.log(event);
    }
  }

  onShow() {
    this.isShow = !this.isShow;
  }

  // searchAds() {
    // const data = {key: this.keyWord, regionId: this.regionId, areaId: this.areaId};
    // this.search.emit(data);
    // console.log('txt-', this.keyWord);
    // console.log('sub-', this.subCategoryId);
    // console.log('region-', this.regionId);
    // console.log('area-', this.areaId);
    // const BASE_URL = `http://localhost:5000/searchAds?key=${this.keyWord}&regionId=${this.regionId}&areaId=${this.areaId}`;
    // fetch(`${BASE_URL}`, { method: 'GET' })
    //   .then(response => response.json())
    //   .then(res => {
    //     // console.log(res);
    //     this.categoryList = res.category;
    //   })
    //   .catch(error => console.error('Error:', error));
  // }
}
