import { AdsDTO } from './../../models/ads.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Event, Router } from '@angular/router';

@Component({
  selector: 'app-list-ads',
  templateUrl: './list-ads.component.html',
  styleUrls: ['./list-ads.component.css']
})
export class ListAdsComponent implements OnInit {

  isShowingList: boolean = null;
  listAds: AdsDTO[] = [];
  categoryName: string = null;
  categoryId: number = null;
  subCategoryName:  string = null;

  countResults: number = null;
  keyWord: string = null;

  constructor(private route: ActivatedRoute, router: Router) {

    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes(`/list-ads`)) {
          console.log(event);
          this.init();
        }
      }
    });
  }

  ngOnInit() {
    this.countResults = 0;
    this.isShowingList =  false;
    // this.init();
  }

  init() {
    const cateId = this.route.queryParams['value'].cateId ? this.route.queryParams['value'].cateId : null;
    const subCateId = this.route.queryParams['value'].subCateId ? this.route.queryParams['value'].subCateId : null;
    const key = this.route.queryParams['value'].key ? this.route.queryParams['value'].key : null;
    const regionId = this.route.queryParams['value'].regionId ? this.route.queryParams['value'].regionId : null;
    const areaId = this.route.queryParams['value'].areaId ? this.route.queryParams['value'].areaId : null;
    console.log('cateId', cateId);
    console.log('subCateId', subCateId);
    console.log('key', key);
    console.log('regionId', regionId);
    console.log('areaId', areaId);
    if (cateId) {
      this.keyWord = '';
      // console.log('cate', cateId);
      this.getAdsByCateId(cateId);
    } else if (subCateId) {
      this.keyWord = '';
      // console.log('sub', subCateId);
      this.getAdsBySubCateId(subCateId);
    } else if (key || regionId || areaId) {
      this.keyWord = key;
      this.categoryName = `Hiển thị kết quả tìm kiếm`;
      this.subCategoryName =  '';
      // console.log('key', key);
      // console.log('regionId', regionId);
      // console.log('areaId', areaId);
      this.searchAds(key, regionId, areaId);
    }
  }

  switchStyleShowing(type: string) {
    if (type === `list`) {
      this.isShowingList = true;
    } else if (type === `grid`) {
      this.isShowingList = false;
    }
  }

  getAdsByCateId(id: number) {
    const BASE_URL = `http://localhost:5000/getAdsByCategory?cateId=${id}`;
    fetch(`${BASE_URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.listAds = res;
        this.categoryName = this.listAds[0].categoryName;
        // this.keyWord = this.listAds[0].categoryName;
        this.categoryId = this.listAds[0].categoryId;
        this.subCategoryName = '';
      })
      .catch(error => console.error('Error:', error));
  }

  getAdsBySubCateId(id: number) {
    const BASE_URL = `http://localhost:5000/getAdsBySubCategory?subCateId=${id}`;
    fetch(`${BASE_URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.listAds = res;
        this.categoryName = this.listAds[0].categoryName;
        this.categoryId = this.listAds[0].categoryId;
        this.subCategoryName = this.listAds[0].subCategoryName;
        // this.keyWord = this.listAds[0].subCategoryName;
      })
      .catch(error => console.error('Error:', error));
  }

  reloadPage(e: Object) {
    console.log('recieve', e);
    // if (e['type'] === 'cate') {
    //   this.getAdsByCateId(e['id']);
    // } else {
    //   this.getAdsBySubCateId(e['id']);
    // }
  }

  searchAds(key: string, regionId: number, areaId: number) {
    const BASE_URL = `http://localhost:5000/searchAds?key=${key}&regionId=${regionId}&areaId=${areaId}`;
    fetch(`${BASE_URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        this.countResults = res.response && res.response.numFound ? res.response.numFound : 0;
        const rs = res.response && res.response.docs ? res.response.docs : [];
        rs.forEach(item => {
          Object.keys(item).forEach((key, ind) => {
            if (key !== `imagesLink`) {
              item[key] = item[key][0];
            }
          });
        });
        console.log(rs);
        this.listAds = rs;
      })
      .catch(error => console.error('Error:', error));
  }

}
