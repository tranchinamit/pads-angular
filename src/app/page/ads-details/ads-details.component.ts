
import { AdsDTO } from './../../models/ads.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileDTO } from './../../models/profile.model';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.css']
})
export class AdsDetailsComponent implements OnInit {

  ads: AdsDTO;
  profile: ProfileDTO;
  cateId: number = 0;
  cateName: string = '';
  subCateName: string = '';
  noAvatar: string = `https://static.chotot.com.vn/imaginary/f3828794a0c27a238ad00e80153801d6790e57d0/profile_avatar/e8f2cfa6986a75b52ee81a75eee12469a0ad1532/thumbnail?width=160`;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route.queryParams['value'].id);
    const id = this.route.queryParams['value'].id;
    this.getAdsDetails(id);
  }

  getAdsDetails(id: number) {
    const BASE_URL = `http://localhost:5000/getAds?id=${id}`;
    fetch(`${BASE_URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.ads = res;
        const createdAt = new Date(this.ads.createdAt);
        const date = createdAt.getDate();
        const month = createdAt.getMonth();
        const year = createdAt.getFullYear();
        const hour = createdAt.getHours();
        const minute = createdAt.getMinutes();
        const second = createdAt.getSeconds();
        this.ads.createdAtDate = `${hour}:${minute}:${second} ${date}-${month}-${year}`;
        this.cateId = this.ads.categoryId;
        this.cateName = this.ads.categoryName;
        this.subCateName = this.ads.subCategoryName;
        this.getProfile(res.accountId);
      })
      .catch(error => console.error('Error:', error));
  }

  getProfile(id: number) {
    const BASE_URL = `http://localhost:5000/getProfile?id=${id}`;
    fetch(`${BASE_URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.profile = res;
        this.profile.avatar = this.profile.avatar !== null ? this.profile.avatar : this.noAvatar;
      })
      .catch(error => console.error('Error:', error));
  }
}
