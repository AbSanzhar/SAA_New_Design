import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../../services/data-control.service';
import {ApiService} from '../../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {MatDialog} from '@angular/material/dialog';
import {TeacherComponent} from '../teacher/teacher.component';
import {DocumentCreator} from '../teacher/rate-list-generator';
import {Packer} from 'docx';
import {ScienceListGenerator} from '../teacher/ScienceListGenerator';
import {saveAs} from 'file-saver';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-my-activities',
    templateUrl: './my-activities.component.html',
    styleUrls: ['./my-activities.component.css']
})
export class MyActivitiesComponent implements OnInit {

    config: any;
    p = 1;
    collection = { count: 60, data: [] };

    TeacherEvents: any[] = [];


    from: any = 1900;
    to: any = 2021;
    isHeadOfDept: boolean;
    lang: any;
    public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
    public IdToken = this.DecodedToken.jti;
    private name: any;


    PubTypeCounts;
    UserDegreeCounts;
    publishCount;
    courceCount;
    disMembersCount;
    exhibitionCount;
    awardCount;
    activityCount;
    activityRoleCount;

    TeacherPublications: any[] = [];
    // TeacherEvents: any[] = [];
    TeacherDisSovet: any[] = [];
    TeacherPatents: any[] = [];
    DepUsers: any[] = [];
    TeacherScienceProjects: any[] = [];
    TeacherCourses: any[] = [];
    TeacherExhibitions: any[] = [];
    TeacherAwards: any[] = [];
    StaffActivity: any[] = [];
    Activity1: any[] = [];
    Activity2: any[] = [];
    Activity3: any[] = [];
    Activity4: any[] = [];

    paginator = {
        length: 100,
        size: 1,
        page: 0,
    };

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
        for (var i = 0; i < this.collection.count; i++) {
            this.collection.data.push(
                {
                    id: i + 1,
                    value: 'items number ' + (i + 1)
                }
            );
        }
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.TeacherEvents.length
        };
    }

    pageChanged(event){
        this.config.currentPage = event;
    }

    onChangePage(pageOfItems: Array<any>) {
        this.pageOfItems = pageOfItems;
    }

    ngOnInit(): void {
        this.getTeacherExhibitions(this.IdToken);
        this.getTeacherAwards(this.IdToken);
        this.getTeacherActivities(this.IdToken);
        this.lang = this.translateService.store.currentLang;
        this.translateService.onLangChange.subscribe(
            lang => {
                this.lang = lang.lang;
                this.getTeacherPublications(this.lang);
                this.getTeacherEvents(this.lang);
                this.getTeacherPatents(this.lang);
                this.getTeacherCourses(this.lang);
                this.getTeacherExhibitions(this.IdToken);
                this.language = this.lang;
                this.getTeacherExhibitions(this.IdToken);
                this.getTeacherAwards(this.IdToken);
                this.getTeacherActivities(this.IdToken);
            }
        );
        this._api.getPubTypeCount().subscribe(
            res => {
                this.PubTypeCounts = res;
            },
            err => {
                console.log(err);
            });

        this._api.getUserDegreeCount().subscribe(
            res => {
                this.UserDegreeCounts = res;
            },
            err => {
                console.log(err);
            }
        );
        this._api.getPublishCount().subscribe(
            res => {
                this.publishCount = res;
            },
            err => {
                console.log(err);
            }
        );
        this._api.getCourseCount().subscribe(
            res => {
                this.courceCount = res;
            }, err => {
                console.log(err);
            }
        );
        this._api.getDisMembersCount().subscribe(
            res => {
                this.disMembersCount = res;
            }, err => {
                console.log(err);
            }
        );
        this._api.getExhibitionCount().subscribe(
            res => {
                this.exhibitionCount = res;
            }, err => {
                console.log(err);
            }
        );
        this._api.getRatingListAwardsCount().subscribe(
            res => {
                this.awardCount = res;
            }
        );
        this._api.getRatingListActivities().subscribe(
            res => {
                this.activityCount = res;
            }
        );
        this._api.getRatingListActivityRoles().subscribe(
            res => {
                this.activityRoleCount = res;
            }
        );
        this._api.getUserById(this.IdToken).subscribe(
            res => {
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
                        this.getTeacherPublications(this.lang);
                        this.getTeacherEvents(this.lang);
                        this.getTeacherDisSovet(this.lang);
                        this.getTeacherPatents(this.lang);
                        this.getTeacherScienceProjects();
                        this.getTeacherCourses(this.lang);
                    } else if (res.roles[i].roleName === 'Head_Of_Dept') {
                        this.getDepUsers(this.userDepts[0].deptId);
                        this.isHeadOfDept = true;
                    }
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    getTeacherPublications(lang) {
        const query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;
        this._api.getPublicationsPage(query, lang).subscribe(res => {
            this.TeacherPublications = res;
            for (let i = 0; i < res.length; i++) {
                this.TeacherPublications[i].pubYear = new Date(res[i].pubYear).getFullYear();
            }
            // this._api.getPublications().subscribe(res2 => {
            //   this.paginator.length = res2.length;
            // });
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

        // this._api.getPublications().subscribe(res => {
        //   console.log(res);
        //   this.TeacherPublications = res;
        // }, err => {
        //   console.log(err);
        // });
    }

    getTeacherEvents(lang) {
        this._api.getEvent(lang).subscribe(res => {
            this.TeacherEvents = res;
            for (let i = 0; i < res.length; i++) {
                const year = new Date(res[i].eventDate).getFullYear();
                // tslint:disable-next-line:max-line-length
                const month = (new Date(res[i].eventDate).getMonth() + 1) < 10 ? '0' + (new Date(res[i].eventDate).getMonth() + 1) : (new Date(res[i].eventDate).getMonth() + 1);
                // tslint:disable-next-line:max-line-length
                const day = new Date(res[i].eventDate).getDate() < 10 ? '0' + new Date(res[i].eventDate).getDate() : new Date(res[i].eventDate).getDate();
                this.TeacherEvents[i].eventDate = day + '/' + month + '/' + year;
            }
            // tslint:disable-next-line:only-arrow-functions
            this.TeacherEvents.sort(function(a, b) {
                if (a.eventId > b.eventId) {
                    return -1;
                }
                if (b.eventId > a.eventId) {
                    return 1;
                }
                return 0;
            });
        }, err => {
            console.log(err);
        });
    }

    getTeacherDisSovet(lang) {
        this._api.getAllMyDisSovets(this.tokenId, lang).subscribe(
            res => {
                this.TeacherDisSovet = res;
            }, err => {
                console.log(err);
            }
        );
    }

    getTeacherPatents(lang) {
        this._api.getPatent(lang).subscribe(
            res => {
                this.TeacherPatents = res;
                for (let i = 0; i < res.length; i++) {
                    const year = new Date(res[i].ptntInsertedDate).getFullYear();
                    // tslint:disable-next-line:max-line-length
                    const month = (new Date(res[i].ptntInsertedDate).getMonth() + 1) < 10 ? '0' + (new Date(res[i].ptntInsertedDate).getMonth() + 1) : (new Date(res[i].ptntInsertedDate).getMonth() + 1);
                    // tslint:disable-next-line:max-line-length
                    const day = new Date(res[i].ptntInsertedDate).getDate() < 10 ? '0' + new Date(res[i].ptntInsertedDate).getDate() : new Date(res[i].ptntInsertedDate).getDate();
                    this.TeacherPatents[i].ptntInsertedDate = day + '/' + month + '/' + year;

                    const year2 = new Date(res[i].ptntIssueDate).getFullYear();
                    // tslint:disable-next-line:max-line-length
                    const month2 = (new Date(res[i].ptntIssueDate).getMonth() + 1) < 10 ? '0' + (new Date(res[i].ptntIssueDate).getMonth() + 1) : (new Date(res[i].ptntIssueDate).getMonth() + 1);
                    // tslint:disable-next-line:max-line-length
                    const day2 = new Date(res[i].ptntIssueDate).getDate() < 10 ? '0' + new Date(res[i].ptntIssueDate).getDate() : new Date(res[i].ptntIssueDate).getDate();
                    this.TeacherPatents[i].ptntIssueDate = day2 + '/' + month2 + '/' + year2;
                }

                // tslint:disable-next-line:only-arrow-functions
                this.TeacherPatents.sort(function(a, b) {
                    if (a.ptntId > b.ptntId) {
                        return -1;
                    }
                    if (b.ptntId > a.ptntId) {
                        return 1;
                    }
                    return 0;
                });
            }, err => {
                console.log(err);
            }
        );
    }

    getDepUsers(id) {
        this._api.getDepUsers(id).subscribe(
            res => {
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

    getTeacherScienceProjects() {
        // this._api.getOneScienceProject(this.tokenId, this.translateService.currentLang).subscribe(res => {
        //     console.log(res);
        //     this.TeacherScienceProjects = res;
        //     this.TeacherScienceProjects.sort(function(a, b) {
        //         if (a.scId > b.scId) {
        //             return -1;
        //         }
        //         if (b.scId > a.scId) {
        //             return 1;
        //         }
        //         return 0;
        //     });
        // });
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

    getTeacherCourses(lang) {
        this._api.getCourses(lang).subscribe(
            res => {
                this.TeacherCourses = res;
                for (let i = 0; i < res.length; i++) {
                    const startYear = new Date(res[i].startdate).getFullYear();
                    const startmMonth = new Date(res[i].startdate).getMonth() < 0 ? '0'
                        + (new Date(res[i].startdate).getMonth()
                            + 1) : (new Date(res[i].startdate).getMonth() + 1);
                    const startDay = new Date(res[i].startdate).getDate() < 0 ? '0'
                        + new Date(res[i].startdate).getDate() : new Date(res[i].startdate).getDate();
                    this.TeacherCourses[i].startdate = startDay + '/' + startmMonth + '/' + startYear;

                    const endYear = new Date(res[i].enddate).getFullYear();
                    const endMonth = new Date(res[i].enddate).getMonth() < 0 ? '0'
                        + (new Date(res[i].enddate).getMonth() + 1) : (new Date(res[i].enddate).getMonth()
                        + 1);
                    const endDay = new Date(res[i].enddate).getDate() < 0 ? '0'
                        + new Date(res[i].enddate).getDate() : new Date(res[i].enddate).getDate();
                    this.TeacherCourses[i].enddate = endDay + '/' + endMonth + '/' + endYear;
                }
                // tslint:disable-next-line:only-arrow-functions
                this.TeacherCourses.sort(function(a, b) {
                    if (a.courseId > b.courseId) {
                        return -1;
                    }
                    if (b.courseId > a.courseId) {
                        return 1;
                    }
                    return 0;
                });
            }, err => {
                console.log(err);
            }
        );
    }

    getTeacherExhibitions(userId) {
        this._api.getExhibitions(userId).subscribe(
            res => {
                this.TeacherExhibitions = res;
                for (let i = 0; i < res.length; i++) {
                    const langRoleSelector = 'exRole' + String(this.translateService.currentLang[0]).toUpperCase() + this.translateService.currentLang[1];
                    const langTypeSelector = 'exType' + String(this.translateService.currentLang[0]).toUpperCase() + this.translateService.currentLang[1];
                    const langLevelSelector = 'exLevel' + String(this.translateService.currentLang[0]).toUpperCase() + this.translateService.currentLang[1];
                    this.TeacherExhibitions[i].exRole = res[i].exRoleId[langRoleSelector];
                    this.TeacherExhibitions[i].exType = res[i].exTypeId[langTypeSelector];
                    this.TeacherExhibitions[i].exLevel = res[i].exLevelId[langLevelSelector];
                }
            },
            err =>
                console.log(err),
        );
    }

    getTeacherAwards(userId) {
        this._api.getTeacherAwards(userId).subscribe(
            res => {
                this.TeacherAwards = res;
                for (let i = 0; i < res.length; i++) {
                    let langTypeSelector;
                    if (this.lang === 'ru') {
                        langTypeSelector = 'awardTypeName';
                    } else {
                        langTypeSelector = 'awardTypeName' + String(this.translateService.currentLang[0]).toUpperCase() + this.translateService.currentLang[1];
                    }
                    this.TeacherAwards[i].awardType = res[i].awardTypeEntity[langTypeSelector];
                }
            }, err => console.log(err)
        );
    }

    getTeacherActivities(userId) {
        this._api.getTeacherActivities(userId).subscribe(
            res => {
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < res.length; i++) {
                    if (res[i].activityTypeId.activityTypeId === 1) {
                        this.Activity1.push(res[i]);
                    } else if (res[i].activityTypeId.activityTypeId === 2) {
                        this.Activity2.push(res[i]);
                    } else if (res[i].activityTypeId.activityTypeId === 3) {
                        this.Activity3.push(res[i]);
                    } else if (res[i].activityTypeId.activityTypeId === 4) {
                        this.Activity4.push(res[i]);
                    }

                }

            }, err => console.log(err)
        );
    }

    // tslint:disable-next-line:variable-name
    setWhichTable(number: number) {
        if (number !== this.whichTable) {
            this.whichTable = number;
        }
    }

    create(tab: string) {
        this._dialog.open(TeacherComponent, {
            width: '50%',
            data: tab
        }).afterClosed().subscribe(res => {
            if (typeof res !== 'undefined' && res !== 'false') {
                if (tab === 'pub') {
                    this._api.uploadPub(res).subscribe(result => {
                        this.getTeacherPublications(this.lang);
                    }, err => {
                        console.log(err);
                        this.getTeacherPublications(this.lang);
                    });
                }
                if (tab === 'event') {
                    this._api.uploadEvent(res).subscribe(result => {
                        this.getTeacherEvents(this.lang);
                    }, err => {
                        console.log(err);
                        this.getTeacherEvents(this.lang);
                    });
                }
                if (tab === 'patent') {
                    this._api.addPatent(res).subscribe(result => {
                        this.getTeacherPatents(this.lang);
                    }, error1 => {
                        console.log(error1);
                        this.getTeacherPatents(this.lang);
                    });
                }
                if (tab === 'science') {
                    this._api.addProject(res).subscribe(
                        result => {
                            // console.log(result);
                            this.getTeacherScienceProjects();
                        }, err => {
                            console.log(err);
                            this.getTeacherScienceProjects();
                        }
                    );
                }
                if (tab === 'course') {
                    this._api.uploadCourse(res).subscribe(
                        result => {
                            this.getTeacherCourses(this.lang);
                        }, err => {
                            console.log(err);
                            this.getTeacherCourses(this.lang);
                        }
                    );
                }
                if (tab === 'exhibition') {
                    this._api.uploadExhibition(res).subscribe(
                        result => {
                            this.getTeacherExhibitions(this.IdToken);
                        }, err => {
                            console.log(err);
                            this.getTeacherExhibitions(this.IdToken);
                        }
                    );
                }
                if (tab === 'award') {
                    this._api.uploadTeacherAward(res).subscribe(
                        result => {
                            this.getTeacherAwards(this.IdToken);
                        }, err => {
                            console.log(err);
                            this.getTeacherAwards(this.IdToken);
                        }
                    );
                }
                if (tab === 'activity1' || tab === 'activity2' || tab === 'activity3' || tab === 'activity4') {
                    this._api.uploadTeacherActivity(res).subscribe(
                        result => {
                            this.getTeacherActivities(this.IdToken);
                        }, err => {
                            console.log(err);
                            this.getTeacherActivities(this.IdToken);
                        }
                    );
                }
            }
        });
    }

    public download(): void {
        const documentCreator = new DocumentCreator();
        // tslint:disable-next-line:max-line-length
        const doc = DocumentCreator.create(this.PubTypeCounts, this.UserDegreeCounts, this.publishCount, this.courceCount, this.disMembersCount, this.exhibitionCount, this.awardCount, this.activityCount, this.activityRoleCount);

        Packer.toBlob(doc).then(blob => {
            saveAs(blob, 'Рейтинг лист.docx');
        });
    }

    public download2(): void {
        const documentCreator = new ScienceListGenerator();
        console.log(this.TeacherPublications);
        const doc = documentCreator.create(this.name, this.TeacherPublications);
        Packer.toBlob(doc).then(blob => {
            saveAs(blob, 'Список научных трудов.docx');
        });
    }

    deletePub(pubId) {
        this._api.deletePublication(pubId).subscribe(res => {
            this.getTeacherPublications(this.translateService.store.currentLang);
        }, err => this.getTeacherPublications(this.translateService.store.currentLang));
    }

}
