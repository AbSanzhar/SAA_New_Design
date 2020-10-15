import {Component, OnInit} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {TeacherComponent} from '../../teacher/teacher.component';
import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: 'app-my-science-proj',
    templateUrl: './my-science-proj.component.html',
    styleUrls: ['./my-science-proj.component.css']
})
export class MyScienceProjComponent implements OnInit {
    from: any = 1900;
    to: any = 2021;
    paginator = {
        length: 0,
        size: 1,
        page: 0,
    };
    public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
    public IdToken = this.DecodedToken.jti;
    private name: any;
    PubTypeCounts;
    UserDegreeCounts;
    publishCount;
    courceCount;
    disMembersCount;
    TeacherPublications: any[] = [];
    TeacherEvents: any[] = [];
    TeacherDisSovet: any[] = [];
    TeacherPatents: any[] = [];
    DepUsers: any[] = [];
    TeacherScienceProjects: any[] = [];
    TeacherCourses: any[] = [];

    displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];

    public s = this.getDecodedAccessToken(localStorage.getItem('token'));
    public tokenId = this.s.jti;
    public currentUser;
    public userDepts = [];
    public roles = [];

    public whichTable = 0;
    pageOfItems: Array<any>;
    language;

    getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

    constructor(private http: DataControlService,
                // tslint:disable-next-line:variable-name
                private _api: ApiService,
                // tslint:disable-next-line:variable-name
                private _dialog: MatDialog,
                private translateService: TranslateService) {
    }

    onChangePage(pageOfItems: Array<any>) {
        this.pageOfItems = pageOfItems;
    }

    ngOnInit(): void {
        this.language = this.translateService.currentLang;
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
        this._api.getUserById(this.IdToken).subscribe(
            res => {
                console.log(res);
                if (res.patronymic != null) {
                    this.name = res.firstName.charAt(0) + '.' + res.patronymic.charAt(0) + '.' + res.lastName;
                } else {
                    this.name = res.firstName.charAt(0) + '.' + res.lastName;
                }
            },
            err => {
                console.log(err);
            }
        );
        this.getTeacherScienceProjects();
        this._api.getUserById(this.tokenId).subscribe(
            res => {
                this.currentUser = res;
                this.userDepts = res.usersDepts;
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < res.roles.length; i++) {
                    this.roles.push(res.roles[i].roleName);
                    if (res.roles[i].roleName === 'Teacher') {
                        this.getTeacherScienceProjects();
                    } else if (res.roles[i].roleName === 'Head_Of_Dept') {
                    }
                }
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }


    changeTableList(event) {
        console.log('asda');
        this.paginator.page = event.pageIndex;
        this.paginator.size = event.pageSize;
    }


    getTeacherScienceProjects() {
        this._api.getOneScienceProject(14, 'en').subscribe(
            res => console.log(res)
        );
        this._api.getScienceProject().subscribe(
            res => {
                console.log(res);
                this.TeacherScienceProjects = res;
                // tslint:disable-next-line:only-arrow-functions
                this.TeacherScienceProjects.sort(function(a, b) {
                    if (a.scId > b.scId) {
                        return -1;
                    }
                    if (b.scId > a.scId) {
                        return 1;
                    }
                    return 0;
                });
            },
            error1 => {
                console.log(error1);
            }
        );
    }

    create(tab: string) {
        this._dialog.open(TeacherComponent, {
            width: '70%',
            data: tab
        }).afterClosed().subscribe(res => {
            if (typeof res !== 'undefined' && res !== 'false') {
                this._api.addProject(res).subscribe(
                    result => {
                        console.log(result);
                        this.getTeacherScienceProjects();
                    }, err => {
                        console.log(err);
                        this.getTeacherScienceProjects();
                    }
                );
            }
        });
    }


}
