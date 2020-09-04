import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../api/api.service';
import * as $ from 'jquery';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {

  updateProfilePhoto;
  public selectedProfilePhotoFile: File = null;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  userId = this.DecodedToken.jti;

  constructor(private service: ApiService) { }

  ngOnInit(): void {

  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  onProfilePhotoSelected(event) {
    this.selectedProfilePhotoFile = event.target.files[0] as File;
    console.log(this.selectedProfilePhotoFile);
  }

  uploadProfilePhoto() {
    const formData = new FormData();
    let ProfilePhotoLink;
    formData.append('file', this.selectedProfilePhotoFile);
    $.ajax({
      url: 'https://nir.iitu.kz:8443/saa-uploader/profilePhoto',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      async: false,
      // tslint:disable-next-line:only-arrow-functions
    }).done(function(data) {
      const obj = JSON.parse(data);
      console.log(obj);
      ProfilePhotoLink = obj.filePath;
    });
    this.updateProfilePhoto = {
      photo : ProfilePhotoLink
    };
    console.log(ProfilePhotoLink);
    this.service.uploadProfilePhoto(this.userId, this.updateProfilePhoto).subscribe(res => {
      console.log(res);
    }, err => console.log(err));
  }

}
