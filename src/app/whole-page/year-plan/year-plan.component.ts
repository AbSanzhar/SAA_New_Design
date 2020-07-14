import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../api/api.service';

@Component({
    selector: 'app-year-plan',
    templateUrl: './year-plan.component.html',
    styleUrls: ['./year-plan.scss']
})
export class YearPlanComponent implements OnInit {
    paginator = {
        length: 0,
        size: 1,
        page: 0
    };
    data = [];
    public AcadMetForm: FormGroup;
    public AcadMetAct: FormArray;

    public budgetLength;
    public budgets: FormGroup;
    public orgs: FormGroup;
    public edusLength;
    public edus: FormGroup;
    public planPerfomLength;
    public planPerfom: FormGroup;
    public Research: FormGroup;

    lectures: FormControl;
    practiceStudies: FormControl;
    labs: FormControl;
    practicesMasters: FormControl;
    supervisDiplomas: FormControl;
    stateAttestComm: FormControl;
    tsis: FormControl;
    midEndTerm: FormControl;
    writtenPaper: FormControl;
    umkd: FormControl;
    translations: FormControl;
    advisor: FormControl;
    created: Date;
    updated: Date;

    lectures2: FormControl;
    practiceStudies2: FormControl;
    labs2: FormControl;
    practicesMasters2: FormControl;
    supervisDiplomas2: FormControl;
    stateAttestComm2: FormControl;
    tsis2: FormControl;
    midEndTerm2: FormControl;
    writtenPaper2: FormControl;
    umkd2: FormControl;
    translations2: FormControl;
    advisor2: FormControl;

    lectures3: FormControl;
    practiceStudies3: FormControl;
    labs3: FormControl;
    practicesMasters3: FormControl;
    supervisDiplomas3: FormControl;
    stateAttestComm3: FormControl;
    tsis3: FormControl;
    midEndTerm3: FormControl;
    writtenPaper3: FormControl;
    umkd3: FormControl;
    translations3: FormControl;
    advisor3: FormControl;


    plan1 = {};

    plan2 = {};

    plan3 = {};
    selectPlan: number = 4;
    private url: string;

    // Объект для сообщения пользователя, type error, success
    message = {
        type: '',
        text: '',
        hide: false
    };
    private planId1: number;
    private planId2: number;
    private planId3: number;
    gettedResearch = [];

    length = 0;
    size = 5;
    page = 0;
    gettedActs = [];
    displayedColumns: string[] = ['acId', 'activities', 'timeFrame', 'implementation'];
    displayedColumns2: string[] = ['eduId', 'eduAct', 'eduImpl'];
    dataSource: any[];

    constructor(private api: ApiService, private fb: FormBuilder) {
    }


    changeTableList(event) {
        console.log('asda');
        this.paginator.page = event.pageIndex;
        this.paginator.size = event.pageSize;
        this.getData();
    }


    getData() {
        this.api.getEdu().subscribe(res => {
            this.length = res.length;
        });
    }

    initAcadMetForm(): FormGroup {
        return this.fb.group({
            acId: [null, Validators.required],
            activities: [null, Validators.required],
            timeFrame: [null, Validators.required],
            implementation: [null, Validators.required],
            created: [new Date()],
            updated: [new Date()]
        });
    }


    initAcadMetFormParam(id, activity, timeFrame, implementation): FormGroup {
        return this.fb.group({
            acId: [id, Validators.required],
            activities: [activity, Validators.required],
            timeFrame: [timeFrame, Validators.required],
            implementation: [implementation, Validators.required],
            created: [new Date()],
            updated: [new Date()]
        });
    }

    addAcadMetForm() {
        this.AcadMetAct = this.AcadMetForm.get('AcadMetAct') as FormArray;
        this.AcadMetAct.push(this.initAcadMetForm());
    }

    addAcadMetFormParam(id, activity, timeFrame, implementation) {
        this.AcadMetAct = this.AcadMetForm.get('AcadMetAct') as FormArray;
        this.AcadMetAct.push(this.initAcadMetFormParam(id, activity, timeFrame, implementation));
    }

    get budId() {
        return this.budgets.get('budId') as FormArray;
    }

    get activitiess() {
        return this.budgets.get('activitiess') as FormArray;
    }

    get plan() {
        return this.budgets.get('plan') as FormArray;
    }

    get implmentation() {
        return this.budgets.get('implementation') as FormArray;
    }

    get orgId() {
        return this.orgs.get('orgId') as FormArray;
    }

    get acts() {
        return this.orgs.get('acts') as FormArray;
    }

    get orgPlan() {
        return this.orgs.get('plan') as FormArray;
    }

    get orgImpl() {
        return this.orgs.get('implementation') as FormArray;
    }

    get eduId() {
        return this.edus.get('eduId') as FormArray;
    }

    get eduAct() {
        return this.edus.get('activities') as FormArray;
    }

    get eduImpl() {
        return this.edus.get('implementation') as FormArray;
    }

    get PlanPerId() {
        return this.planPerfom.get('id') as FormArray;
    }

    get PlanPerAct() {
        return this.planPerfom.get('activities') as FormArray;
    }

    get PlanPerImpl() {
        return this.planPerfom.get('implementation') as FormArray;
    }

    get comId() {
        return this.Research.get('comId') as FormArray;
    }

    get resAct() {
        return this.Research.get('activities') as FormArray;
    }

    get output() {
        return this.Research.get('output') as FormArray;
    }

    get resPlan() {
        return this.Research.get('plan') as FormArray;
    }

    get resImpl() {
        return this.Research.get('implementation') as FormArray;
    }

    addNewBudId() {
        if (this.budgetLength === 0) {
            this.budId.push(this.fb.control(1));
        } else {
            this.budId.push(this.fb.control(this.budgetLength + 1));
        }
        this.activitiess.push(this.fb.control(''));
        this.plan.push(this.fb.control(''));
        this.implmentation.push(this.fb.control(''));
        this.budgetLength++;
    }


    addNewOrgId() {
        this.orgId.push(this.fb.control(''));
        this.acts.push(this.fb.control(''));
        this.orgPlan.push(this.fb.control(''));
        this.orgImpl.push(this.fb.control(''));
    }

    addNewEduId() {
        if (this.edusLength === 0) {
            this.eduId.push(this.fb.control(1));
        } else {
            this.eduId.push(this.fb.control(this.edusLength + 1));
        }
        this.eduAct.push(this.fb.control(''));
        this.eduImpl.push(this.fb.control(''));
        this.edusLength++;
    }

    addNewPPid() {
        if (this.planPerfomLength == 0) {
            this.PlanPerId.push(this.fb.control(1));
        } else {
            this.PlanPerId.push(this.fb.control(this.planPerfomLength + 1));
        }
        this.PlanPerAct.push(this.fb.control(''));
        this.PlanPerImpl.push(this.fb.control(''));
        this.planPerfomLength++;
    }

    addResId() {
        this.comId.push(this.fb.control(''));
        this.resAct.push(this.fb.control(''));
        this.output.push(this.fb.control(''));
        this.resPlan.push(this.fb.control(''));
        this.resImpl.push(this.fb.control(''));
    }

    ngOnInit() {
        this.getEdus();
        this.message.hide = true;
        this.AcadMetForm = this.fb.group({
            AcadMetAct: this.fb.array([this.initAcadMetForm()])
        });

        this.api.getActivity().subscribe(
            res => {

                this.gettedActs = res;
            },
            err => {
                console.log(err);
            }
        );
        this.lectures = new FormControl(Validators.required);
        this.practiceStudies = new FormControl();
        this.labs = new FormControl(Validators.required);
        this.practicesMasters = new FormControl(Validators.required);
        this.supervisDiplomas = new FormControl(Validators.required);
        this.stateAttestComm = new FormControl(Validators.required);
        this.tsis = new FormControl(Validators.required);
        this.midEndTerm = new FormControl(Validators.required);
        this.writtenPaper = new FormControl(Validators.required);
        this.umkd = new FormControl(Validators.required);
        this.translations = new FormControl(Validators.required);
        this.advisor = new FormControl(Validators.required);

        this.lectures2 = new FormControl();
        this.practiceStudies2 = new FormControl();
        this.labs2 = new FormControl();
        this.practicesMasters2 = new FormControl();
        this.supervisDiplomas2 = new FormControl();
        this.stateAttestComm2 = new FormControl();
        this.tsis2 = new FormControl();
        this.midEndTerm2 = new FormControl();
        this.writtenPaper2 = new FormControl();
        this.umkd2 = new FormControl();
        this.translations2 = new FormControl();
        this.advisor2 = new FormControl();

        this.lectures3 = new FormControl(this.lectures.value + this.lectures2.value);
        this.practiceStudies3 = new FormControl(this.practiceStudies.value + this.practiceStudies2.value);
        this.labs3 = new FormControl(this.labs.value + this.labs2.value);
        this.practicesMasters3 = new FormControl(this.practicesMasters.value + this.practicesMasters2.value);
        this.supervisDiplomas3 = new FormControl(this.supervisDiplomas.value + this.supervisDiplomas2.value);
        this.stateAttestComm3 = new FormControl(this.stateAttestComm.value + this.stateAttestComm2.value);
        this.tsis3 = new FormControl(this.tsis.value + this.tsis2.value);
        this.midEndTerm3 = new FormControl(this.midEndTerm.value + this.midEndTerm2.value);
        this.writtenPaper3 = new FormControl(this.writtenPaper.value + this.writtenPaper2.value);
        this.umkd3 = new FormControl(this.umkd.value + this.umkd2.value);
        this.translations3 = new FormControl(this.translations.value + this.translations2.value);
        this.advisor3 = new FormControl(this.advisor.value + this.advisor2.value);

        this.budgets = this.fb.group({
            budId: this.fb.array([]),
            activitiess: this.fb.array([]),
            plan: this.fb.array([]),
            implementation: this.fb.array([])
        });

        this.orgs = this.fb.group({
            orgId: this.fb.array([]),
            acts: this.fb.array([]),
            plan: this.fb.array([]),
            implementation: this.fb.array([])
        });
        this.edus = this.fb.group({
            eduId: this.fb.array([]),
            activities: this.fb.array([]),
            implementation: this.fb.array([])
        });
        this.planPerfom = this.fb.group({
            id: this.fb.array([]),
            activities: this.fb.array([]),
            implementation: this.fb.array([])
        });
        this.Research = this.fb.group({
            comId: this.fb.array([]),
            activities: this.fb.array([]),
            output: this.fb.array([]),
            plan: this.fb.array([]),
            implementation: this.fb.array([])
        });
        this.api.getActivity().subscribe(
            res => {
                console.log(res);
                this.gettedActs = res;
            },
            err => {
                console.log(err);
            }
        );

        this.api.getReasearch().subscribe(
            res => {
                this.gettedResearch = res;
            },
            error1 => {
                console.log(error1);
            }
        );
        this.api.getBudget().subscribe(
            res => {
                var i = 0;
                this.budgetLength = res.length;
                for (; i < res.length; i++) {
                    this.budId.push(this.fb.control(res[i].budId));
                    this.activitiess.push(this.fb.control(res[i].activities));
                    this.plan.push(this.fb.control(res[i].plan));
                    this.implmentation.push(this.fb.control(res[i].implementation));
                }
                console.log(res);
            },
            error1 => {
                console.log(error1);
            }
        );

        this.api.getOrg().subscribe(
            res => {
                var i = 0;
                for (; i < res.length; i++) {
                    this.orgId.push(this.fb.control(res[i].orgId));
                    this.acts.push(this.fb.control(res[i].activities));
                    this.orgPlan.push(this.fb.control(res[i].plan));
                    this.orgImpl.push(this.fb.control(res[i].implementation));
                }
            },
            err => {
                console.log(err);
            }
        );
        this.api.getEdu().subscribe(
            res => {
                var i = 0;
                this.edusLength = res.length;
                for (; i < res.length; i++) {
                    this.eduId.push(this.fb.control(res[i].eduId));
                    this.eduAct.push(this.fb.control(res[i].activities));
                    this.eduImpl.push(this.fb.control(res[i].implementation));
                }
            },
            err => {
                console.log(err);
            }
        );
        this.api.getPlanPerfomance().subscribe(
            res => {
                var i = 0;
                this.planPerfomLength = res.length;
                for (; i < res.length; i++) {
                    this.PlanPerId.push(this.fb.control(res[i].id));
                    this.PlanPerAct.push(this.fb.control(res[i].activities));
                    this.PlanPerImpl.push(this.fb.control(res[i].implementation));
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    sendPlan() {
        this.plan1 = {
            planName: 'План на первое полугодие',
            lectures: this.lectures.value,
            practiceStudies: this.practiceStudies.value,
            labs: this.labs.value,
            practicesMasters: this.practicesMasters.value,
            supervisDiplomas: this.supervisDiplomas.value,
            stateAttestComm: this.stateAttestComm.value,
            tsis: this.tsis.value,
            midEndTerm: this.midEndTerm.value,
            writtenPaper: this.writtenPaper.value,
            umkd: this.umkd.value,
            translations: this.translations.value,
            advisor: this.advisor.value,
            updated: new Date()
        };

        this.plan2 = {
            planName: 'План на второе полугодие',
            lectures: this.lectures2.value,
            practiceStudies: this.practiceStudies2.value,
            labs: this.labs2.value,
            practicesMasters: this.practicesMasters2.value,
            supervisDiplomas: this.supervisDiplomas2.value,
            stateAttestComm: this.stateAttestComm2.value,
            tsis: this.tsis2.value,
            midEndTerm: this.midEndTerm2.value,
            writtenPaper: this.writtenPaper2.value,
            umkd: this.umkd2.value,
            translations: this.translations2.value,
            advisor: this.advisor2.value
        };

        this.plan3 = {
            planName: 'План на год',
            lectures: this.lectures3.value,
            practiceStudies: this.practiceStudies3.value,
            labs: this.labs3.value,
            practicesMasters: this.practicesMasters3.value,
            supervisDiplomas: this.supervisDiplomas3.value,
            stateAttestComm: this.stateAttestComm3.value,
            tsis: this.tsis3.value,
            midEndTerm: this.midEndTerm3.value,
            writtenPaper: this.writtenPaper3.value,
            umkd: this.umkd3.value,
            translations: this.translations3.value,
            advisor: this.advisor3.value
        };
        if (this.selectPlan === 1) {
            if (this.plan1 !== undefined && this.planId1 !== undefined) {
                console.log(this.plan1);
            } else {
                this.plan1 = {
                    planName: 'План на первое полугодие',
                    lectures: this.lectures.value,
                    labs: this.labs.value,
                    practicesMasters: this.practicesMasters.value,
                    supervisDiplomas: this.supervisDiplomas.value,
                    stateAttestComm: this.stateAttestComm.value,
                    tsis: this.tsis.value,
                    midEndTerm: this.midEndTerm.value,
                    writtenPaper: this.writtenPaper.value,
                    umkd: this.umkd.value,
                    translations: this.translations.value,
                    advisor: this.advisor.value,
                    created: new Date(),
                    updated: new Date()
                };
            }
        }
        setTimeout(() => {
            this.message.type = 'success';
            this.message.text = 'План успешно сохранен';
            this.message.hide = false;
            setTimeout(() => {
                this.message.hide = true;
            }, 2000);
        }, 2000);

        for (var i = 1; i <= this.gettedActs.length; i++) {
            this.gettedActs[i - 1].updated = new Date();
            this.api.updateActivity(i, this.gettedActs[i - 1]).subscribe(res => {
                    console.log(res);
                },
                err => {
                    console.log(err);
                });
        }
        var i = 0;
        for (; i < this.budgets.get('budId').value.length; i++) {
            // tslint:disable-next-line:prefer-const no-shadowed-variable
            let tempBudget = {
                budId: this.budgets.get('budId').value[i],
                activities: this.budgets.get('activitiess').value[i],
                plan: this.budgets.get('plan').value[i],
                implementation: this.budgets.get('implementation').value[i]
            };
            this.api.uploadBudget(tempBudget).subscribe(
                res => {
                    console.log(res);
                },
                error1 => {
                    console.log(error1);
                }
            );
        }

        var i = 0;
        for (; i < this.orgs.get('orgId').value.length; i++) {
            // tslint:disable-next-line:prefer-const no-shadowed-variable
            let tempBudget = {
                orgId: this.orgs.get('orgId').value[i],
                activities: this.orgs.get('acts').value[i],
                plan: this.orgs.get('plan').value[i],
                implementation: this.orgs.get('implementation').value[i]
            };
            console.log(tempBudget);
            this.api.uploadOrg(tempBudget).subscribe(
                res => {
                    console.log(res);
                },
                error1 => {
                    console.log(error1);
                }
            );
            console.log('Iteration ' + i);
        }
        console.log(this.orgs.get('orgId').value.length);

        var i = 0;
        for (; i < this.edus.get('eduId').value.length; i++) {
            // tslint:disable-next-line:prefer-const no-shadowed-variable
            let tempBudget = {
                eduId: this.edus.get('eduId').value[i],
                activities: this.edus.get('activities').value[i],
                implementation: this.edus.get('implementation').value[i]
            };
            console.log(tempBudget);
            this.api.uploadEdu(tempBudget).subscribe(
                res => {
                    console.log(res);
                },
                error1 => {
                    console.log(error1);
                }
            );
        }

        var i = 0;
        for (; i < this.planPerfom.get('id').value.length; i++) {
            // tslint:disable-next-line:prefer-const no-shadowed-variable
            let tempBudget = {
                id: this.planPerfom.get('id').value[i],
                activities: this.planPerfom.get('activities').value[i],
                implementation: this.planPerfom.get('implementation').value[i]
            };
            console.log(tempBudget);
            this.api.uploadPlanPerfomace(tempBudget).subscribe(
                res => {
                    console.log(res);
                },
                error1 => {
                    console.log(error1);
                }
            );
        }

        var i = 0;
        for (; i < this.Research.get('comId').value.length; i++) {
            // tslint:disable-next-line:prefer-const no-shadowed-variable
            let tempBudget = {
                comId: this.Research.get('comId').value[i],
                activities: this.Research.get('activities').value[i],
                output: this.Research.get('output').value[i],
                plan: this.Research.get('plan').value[i],
                implementation: this.Research.get('implementation').value[i]
            };
            console.log(tempBudget);
            this.api.uploadResearch(tempBudget).subscribe(
                res => {
                    console.log(res);
                },
                error1 => {
                    console.log(error1);
                }
            );
        }

    }

    downloadPlan() {
        this.api.downloadYourPlan().subscribe(
            res => {
                this.url = window.URL.createObjectURL(res);
                window.open(this.url);
            },
            error1 => {
                console.log('Error was happend!');
                console.log(error1);
            }
        );
    }

    somethingChanged() {
        this.message.type = 'error';
        this.message.text = 'Нажмите "Отправить план", что бы сохранить изменения';
        this.message.hide = false;
    }

    getEdus() {
        let query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;
        this.api.getAllEduPage(query).subscribe(
            res => {
            let i = 0;
            this.edusLength = res.length;
            for (; i < res.length; i++) {
                this.eduId.push(this.fb.control(res[i].eduId));
                this.eduAct.push(this.fb.control(res[i].activities));
                this.eduImpl.push(this.fb.control(res[i].implementation));
            }
            this.dataSource = res;
        },
            err => {
                console.log(err);
            }
            );
        // this.api.getEdu().subscribe(
        //     res => {
        //         let i = 0;
        //         this.edusLength = res.length;
        //         for (; i < res.length; i++) {
        //             this.eduId.push(this.fb.control(res[i].eduId));
        //             this.eduAct.push(this.fb.control(res[i].activities));
        //             this.eduImpl.push(this.fb.control(res[i].implementation));
        //         }
        //         this.dataSource = res;
        //     },
        //     err => {
        //         console.log(err);
        //     }
        // );
    }

    onSubmit() {
    }
}
