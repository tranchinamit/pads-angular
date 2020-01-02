import { AdsDTO } from './../../models/ads.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileDTO } from './../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: ProfileDTO;
  listPost: AdsDTO[] = [];
  noAvatar = `../../../assets/images/no-avatar.png`;
  countPost: number = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.queryParams['value'].id;
    this.getProfile(id);
    this.getListPost(id);
    this.countPost = 0;
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

  getListPost(id: number) {
    const BASE_URL = `http://localhost:5000/getListPost?id=${id}`;
    fetch(`${BASE_URL}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        const rs = res;
        rs.forEach((item, index) => {
          const createdAt = new Date(item.createdAt);
          const date = createdAt.getDate();
          const month = createdAt.getMonth();
          const year = createdAt.getFullYear();
          // const hour = createdAt.getHours();
          // const minute = createdAt.getMinutes();
          // const second = createdAt.getSeconds();
          rs[index].createdAtDate = `${date}-${month}-${year}`;
        });
        this.listPost = rs;
        this.countPost = rs.length;
      })
      .catch(error => console.error('Error:', error));
  }

}
