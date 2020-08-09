import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-all-publications',
  templateUrl: './all-publications.component.html',
  styleUrls: ['./all-publications.component.css']
})
export class AllPublicationsComponent implements OnInit {
  isMobile;
  isDesktop;
  isTablet;
  dataSource: any[];
  displayedColumns = ['index', 'author', 'titlePublication', 'type', 'jointAuthors', 'year', 'city', 'publisher', 'Page', 'Url', 'Doi', 'fileName', 'checkedUser', 'actions'];
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


  constructor(private http: DataControlService,
              private service: ApiService,
              private deviceDetectorService: DeviceDetectorService) {
    this.detectDevice();
  }

  ngOnInit(): void {
    this.detectDevice();
    this.getAllPublications();
  }

  getAllPublications() {
    this.service.getAllPublications().subscribe(res => {
      // console.log(res);
      this.dataSource = res;
      for (let i = 0; i < res.length; i++) {
        this.dataSource[i].pubYear = new Date(res[i].pubYear).getFullYear();
      }

      // tslint:disable-next-line:only-arrow-functions
      this.dataSource.sort(function(a, b) {
        if (a.pubId > b.pubId) {
          return -1;
        }
        if ( b.pubId > a.pubId) {
          return 1;
        }
        return 0;
      });
    });
  }

  updatePublicationStatus(publicationID, status) {
    const publicationStatus = {
      pubId: publicationID,
      pubCheckedUserId: this.tokenId,
      pubStatusId: status
    };
    this.service.updatePublicationStatus(publicationStatus).subscribe(
        res => {
          console.log(res);
          this.getAllPublications();
        }, err => {
          console.log(err);
          this.getAllPublications();
        }
    );
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }
}
