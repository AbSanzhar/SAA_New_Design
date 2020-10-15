import {Component, OnInit} from '@angular/core';
import {Packer} from 'docx';
import {ScienceListGenerator} from '../../teacher/ScienceListGenerator';
import {ApiService} from '../../../api/api.service';
import {saveAs} from 'file-saver';
import * as jwt_decode from 'jwt-decode';
import {TeacherComponent} from '../../teacher/teacher.component';
import {MatDialog} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
    selector: 'app-my-publications',
    templateUrl: './my-publications.component.html',
    styleUrls: ['./my-publications.component.css']
})
export class MyPublicationsComponent implements OnInit {

    isMobile;
    isDesktop;
    isTablet;

    lang: any;
    from: any = 1900;
    to: any = 2021;
    public s = this.getDecodedAccessToken(localStorage.getItem('token'));
    public tokenId = this.s.jti;
    public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
    public IdToken = this.DecodedToken.jti;
    PubTypeCounts;
    UserDegreeCounts;
    publishCount;
    courceCount;
    disMembersCount;
    exhibitionCount;
    private name: any;
    TeacherPublications: any[] = [];
    displayedColumnsPublication = ['pubId', 'Title', 'pubType', 'Collaborators', 'Year', 'City', 'Publisher', 'Page', 'Url', 'Doi', 'pubStatus', 'File'];
    paginator = {
        length: 0,
        size: 1,
        page: 0,
    };
    language;
    public currentUser;
    public userDepts = [];
    public roles = [];
    DepUsers: any[] = [];


    getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

    constructor(private translateService: TranslateService,
                // tslint:disable-next-line:variable-name
                private _api: ApiService,
                // tslint:disable-next-line:variable-name
                private _dialog: MatDialog,
                private deviceDetectorService: DeviceDetectorService) {
    }

    ngOnInit(): void {
        this.detectDevice();
        this._api.getPubTypeCount().subscribe(
            res => {
                console.log(res);
                this.PubTypeCounts = res;
            },
            err => {
                console.log(err);
            });

        this._api.getUserDegreeCount().subscribe(
            res => {
                console.log(res);
                this.UserDegreeCounts = res;
            },
            err => {
                console.log(err);
            }
        );
        this._api.getPublishCount().subscribe(
            res => {
                console.log(res);
                this.publishCount = res;
            },
            err => {
                console.log(err);
            }
        );
        this._api.getCourseCount().subscribe(
            res => {
                console.log(res);
                this.courceCount = res;
            }, err => {
                console.log(err);
            }
        );
        this._api.getDisMembersCount().subscribe(
            res => {
                console.log(res);
                this.disMembersCount = res;
            }, err => {
                console.log(err);
            }
        );
        this._api.getExhibitionCount().subscribe(
            res => {
                this.exhibitionCount = res;
            }
        );
        this.lang = this.translateService.currentLang;
        this.getTeacherPublications(this.lang);
        this.language = this.lang;
        this._api.getUserById(this.IdToken).subscribe(
            res => {
                console.log(res);
                if (res.patronymic != null) {
                    this.name = res.firstName.charAt(0) + '.' + res.patronymic.charAt(0) + '.' + res.lastName;
                } else {
                    this.name = res.firstName.charAt(0) + '.' + res.lastName;
                }
                // tslint:disable-next-line:prefer-for-of
            },
            err => {
                console.log(err);
            }
        );
        this._api.getUserById(this.tokenId).subscribe(
            res => {
                this.currentUser = res;
                this.userDepts = res.usersDepts;
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < res.roles.length; i++) {
                    this.roles.push(res.roles[i].roleName);
                    if (res.roles[i].roleName === 'Teacher') {
                        this.getTeacherPublications(this.language);
                    } else if (res.roles[i].roleName === 'Head_Of_Dept') {
                        this.getDepUsers(this.userDepts[0].deptId);
                    }
                }
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }

    detectDevice() {
        this.isMobile = this.deviceDetectorService.isMobile();
        this.isTablet = this.deviceDetectorService.isTablet();
        this.isDesktop = this.deviceDetectorService.isDesktop();
    }

    getTeacherPublications(lang) {
        const query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;
        this._api.getPublicationsPage(query, lang).subscribe(res => {
            this.TeacherPublications = res;
            console.log(res);
            for (let i = 0; i < res.length; i++) {
                this.TeacherPublications[i].pubYear = new Date(res[i].pubYear).getFullYear();
            }
            // tslint:disable-next-line:only-arrow-functions
            this.TeacherPublications.sort(function(a, b) {
                if (a.pubId > b.pubId) {
                    return -1;
                }
                if (b.pubId > a.pubId) {
                    return 1;
                }
                return 0;
            });
            this.TeacherPublications = res;
        }, err => {
            console.log(err);
        });
    }

    // public download(): void {
    //   const documentCreator = new DocumentCreator();
    //   // tslint:disable-next-line:max-line-length
    //   const doc = DocumentCreator.create(this.PubTypeCounts, this.UserDegreeCounts, this.publishCount, this.courceCount, this.disMembersCount, this.exhibitionCount);
    //
    //   Packer.toBlob(doc).then(blob => {
    //     console.log(blob);
    //     saveAs(blob, 'Рейтинг лист.docx');
    //     console.log('Document created successfully');
    //   });
    // }

    public download2(): void {
        console.log(this.TeacherPublications);
        const documentCreator = new ScienceListGenerator();
        const doc = documentCreator.create(this.name, this.TeacherPublications);
        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, 'Список научных трудов.docx');
            console.log('Document created successfully');
        });
    }

    getDepUsers(id) {
        this._api.getDepUsers(id).subscribe(
            res => {
                console.log(res);
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < res.usersDeptsEntities.length; i++) {
                    const tempUser = {
                        userId: res.usersDeptsEntities[i].primaryKey.userEntity.userId,
                        firstName: res.usersDeptsEntities[i].primaryKey.userEntity.firstName,
                        lastName: res.usersDeptsEntities[i].primaryKey.userEntity.lastName,
                        email: res.usersDeptsEntities[i].primaryKey.userEntity.email,
                        description: res.usersDeptsEntities[i].primaryKey.userEntity.description,
                        userType: res.usersDeptsEntities[i].userType
                    };
                    this.DepUsers.push(tempUser);
                }
            }, err => {
                console.log(err);
            }
        );
    }

    create(tab: string) {
        this._dialog.open(TeacherComponent, {
            width: '75%',
            data: tab
        }).afterClosed().subscribe(res => {
            if (typeof res !== 'undefined' && res !== 'false') {
                if (tab === 'pub') {
                    this._api.uploadPub(res).subscribe(result => {
                        console.log(result);
                        this.getTeacherPublications(this.language);
                    }, err => {
                        console.log(err);
                        this.getTeacherPublications(this.language);
                    });
                }
            }
        });
    }

    changeTableList(event) {
        console.log('asda');
        this.paginator.page = event.pageIndex;
        this.paginator.size = event.pageSize;
        this.getTeacherPublications(this.language);
    }

}
