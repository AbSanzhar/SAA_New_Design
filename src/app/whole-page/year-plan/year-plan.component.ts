import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../api/api.service';
import {DocumentCreator} from './year-plan-generator';
import {Packer} from 'docx';
import {saveAs} from 'file-saver';
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
    AcadMetForm = this.fb.group({
        AcadMetAct: this.fb.array([])
    });

    public budgetLength;
    public budgets: FormGroup;
    public orgs: FormGroup;
    public edusLength;
    public edus: FormGroup;
    public planPerfomLength;
    public planPerfom: FormGroup;
    public Research: FormGroup;
    updated: Date;

    private url: string;

    // Объект для сообщения пользователя, type error, success
    message = {
        type: '',
        text: '',
        hide: false
    };
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
        const control = this.AcadMetForm.get('AcadMetAct') as FormArray;
        const newAcadMetForm = this.initAcadMetForm();
        control.push(newAcadMetForm);
    }

    addAcadMetFormParam(id, activity, timeFrame, implementation) {
        const control = this.AcadMetForm.controls.AcadMetAct as FormArray;
        const newAcadMet = this.initAcadMetFormParam(id, activity, timeFrame, implementation);
        control.push(newAcadMet);
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
        // tslint:disable-next-line:triple-equals
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

        this.api.getAcadMethod().subscribe(
            res => {
                console.log(res);
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < res.length; i++) {
                    this.addAcadMetFormParam(res[i].acId, res[i].activities, res[i].timeFrame, res[i].implementation);
                }
                this.gettedActs = res;
            },
            err => {
                console.log(err);
            }
        );

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
                let i = 0;
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
                let i = 0;
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
                let i = 0;
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
                let i = 0;
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
        setTimeout(() => {
            this.message.type = 'success';
            this.message.text = 'План успешно сохранен';
            this.message.hide = false;
            setTimeout(() => {
                this.message.hide = true;
            }, 2000);
        }, 2000);

        // tslint:disable-next-line:no-shadowed-variable
        for (let i = 1; i <= this.gettedActs.length; i++) {
            this.gettedActs[i - 1].updated = new Date();
            this.api.updateActivity(i, this.gettedActs[i - 1]).subscribe(res => {
                    console.log(res);
                },
                err => {
                    console.log(err);
                });
        }

        // tslint:disable-next-line:no-shadowed-variable
        for (let i = 0; i < this.budgets.get('budId').value.length; i++) {
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

        // tslint:disable-next-line:no-shadowed-variable
        for (let i = 0; i < this.orgs.get('orgId').value.length; i++) {
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

        // tslint:disable-next-line:no-shadowed-variable
        for (let i = 0; i < this.edus.get('eduId').value.length; i++) {
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

        // tslint:disable-next-line:no-shadowed-variable
        for (let i = 0; i < this.planPerfom.get('id').value.length; i++) {
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

        let i = 0;
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
        console.log(this.gettedActs);
        const documentCreator = new DocumentCreator();
        const doc = documentCreator.create(this.gettedActs);

        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, 'Индивидуальный план преподавателя.docx');
            console.log('Document created successfully');
        });
    }

    somethingChanged() {
        this.message.type = 'error';
        this.message.text = 'Нажмите "Отправить план", что бы сохранить изменения';
        this.message.hide = false;
    }

    getEdus() {
        const query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;
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
    }

    onSubmit() {
    }
}
