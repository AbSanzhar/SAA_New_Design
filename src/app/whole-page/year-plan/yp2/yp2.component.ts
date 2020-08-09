import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {AddYearPlanOneTableComponent} from '../add-year-plan-one-table/add-year-plan-one-table.component';
import {EditYearPlanOneTableComponent} from '../edit-year-plan-one-table/edit-year-plan-one-table.component';
import {DeleteYearPlanOneTableComponent} from '../delete-year-plan-one-table/delete-year-plan-one-table.component';
import {DocumentCreator} from '../year-plan-generator';
import {Packer} from 'docx';
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-yp2',
  templateUrl: './yp2.component.html',
  styleUrls: ['./yp2.component.css']
})
export class Yp2Component implements OnInit {
  paginator = {
    length: 0,
    size: 1,
    page: 0
  };
  data = [];

  public Research: FormGroup;

  gettedActs = [];
  gettedResearch = [];
  gettedBudgets = [];
  gettedOrgMetActs = [];
  gettedEduSocials = [];
  gettedPlamPerfomances = [];


  length = 0;
  size = 5;
  page = 0;
  displayedColumns: string[] = ['acId', 'activities', 'timeFrame', 'implementation', 'actions'];
  displayedColumns1: string[] = ['commId', 'activities', 'output', 'plan', 'implementation', 'actions'];
  displayedColumns2: string[] = ['budId', 'activities', 'plan', 'implementation', 'actions'];
  displayedColumns3: string[] = ['orgId', 'activities', 'plan', 'implementation', 'actions'];
  displayedColumns4: string[] = ['eduId', 'activities', 'implementation', 'actions'];
  displayedColumns5: string[] = ['ppId', 'activities', 'implementation', 'actions'];

  dataSource: any[];

  constructor(private api: ApiService,
              private fb: FormBuilder,
              // tslint:disable-next-line:variable-name
              private _dialog: MatDialog) {
  }


  // changeTableList(event) {
  //     console.log('asda');
  //     this.paginator.page = event.pageIndex;
  //     this.paginator.size = event.pageSize;
  //     this.getData();
  // }

  addTableRow(table) {
    this._dialog.open(AddYearPlanOneTableComponent, {
      data: table
    }).afterClosed().subscribe(
        res => {
          if (typeof res !== 'undefined' && res !== 'false') {
            if (table === 'Acad-Meth') {
              this.api.uploadActivity(res).subscribe(
                  result => {
                    console.log(result);
                    this.getAcadMethod();
                  }, err => {
                    console.log(err);
                    this.getAcadMethod();
                  });
            } else if (table === 'Research') {
              this.api.uploadResearch(res).subscribe(
                  result => {
                    console.log(result);
                    this.getResearch();
                  }, err => {
                    console.log(err);
                    this.getResearch();
                  });
            } else if (table === 'Budget') {
              this.api.uploadBudget(res).subscribe(
                  result => {
                    console.log(result);
                    this.getBudget();
                  }, err => {
                    console.log(err);
                    this.getBudget();
                  });
            } else if (table === 'OrgMetAct') {
              this.api.uploadOrg(res).subscribe(
                  result => {
                    console.log(result);
                    this.getOrgMetActs();
                  }, err => {
                    console.log(err);
                    this.getOrgMetActs();
                  });
            } else if (table === 'EduSocial') {
              this.api.uploadEdu(res).subscribe(
                  result => {
                    console.log(result);
                    this.getEduSocials();
                  }, err => {
                    console.log(err);
                    this.getEduSocials();
                  });
            } else if (table === 'PP') {
              this.api.uploadPlanPerfomace(res).subscribe(
                  result => {
                    console.log(result);
                    this.getPP();
                  }, err => {
                    console.log(err);
                    this.getPP();
                  });
            }
          }
        }
    );
  }

  editTableRow(tableData) {
    this._dialog.open(EditYearPlanOneTableComponent, {
      data: tableData,
    }).afterClosed().subscribe(res => {
      if (typeof res !== 'undefined' && res !== 'false') {
        if (tableData.table === 'Acad-Meth') {
          this.api.updateActivity(res.acId, res).subscribe(
              result => {
                console.log(result);
                this.getAcadMethod();
              }, err => {
                console.log(err);
                this.getAcadMethod();
              }
          );
        } else if (tableData.table === 'Research') {
          this.api.updateResearch(res.commId, res).subscribe(
              result => {
                console.log(result);
                this.getResearch();
              }, err => {
                console.log(err);
                this.getResearch();
              });
        } else if (tableData.table === 'Budget') {
          this.api.updateBudget(res.budId, res).subscribe(
              result => {
                console.log(result);
                this.getBudget();
              }, err => {
                console.log(err);
                this.getBudget();
              });
        } else if (tableData.table === 'OrgMetAct') {
          this.api.updateOrg(res.orgId, res).subscribe(
              result => {
                console.log(result);
                this.getOrgMetActs();
              }, err => {
                console.log(err);
                this.getOrgMetActs();
              });
        } else if (tableData.table === 'EduSocial') {
          this.api.updateEdu(res.eduId, res).subscribe(
              result => {
                console.log(result);
                this.getEduSocials();
              }, err => {
                console.log(err);
                this.getEduSocials();
              });
        } else if (tableData.table === 'PP') {
          this.api.updatePlanPerfomance(res.ppId, res).subscribe(
              result => {
                console.log(result);
                this.getPP();
              }, err => {
                console.log(err);
                this.getPP();
              });
        }
      }
    });
  }

  deleteTableRow(tableData) {
    this._dialog.open(DeleteYearPlanOneTableComponent, {
      data: tableData
    }).afterClosed().subscribe(
        res => {
          if (typeof res !== 'undefined' && res !== 'false') {
            if (tableData.table === 'Acad-Meth') {
              this.api.deleteActivity(res.acId).subscribe(
                  result => {
                    console.log(result);
                    this.getAcadMethod();
                  }, err => {
                    console.log(err);
                    this.getAcadMethod();
                  });
            } else if (tableData.table === 'Research') {
              this.api.deleteResearch(res.commId).subscribe(
                  result => {
                    console.log(result);
                    this.getResearch();
                  }, err => {
                    console.log(err);
                    this.getResearch();
                  });
            } else if (tableData.table === 'Budget') {
              this.api.deleteBudget(res.budId).subscribe(
                  result => {
                    console.log(result);
                    this.getBudget();
                  }, err => {
                    console.log(err);
                    this.getBudget();
                  });
            } else if (tableData.table === 'OrgMetAct') {
              this.api.deleteOrg(res.orgId).subscribe(
                  result => {
                    console.log(result);
                    this.getOrgMetActs();
                  }, err => {
                    console.log(err);
                    this.getOrgMetActs();
                  });
            } else if (tableData.table === 'EduSocial') {
              this.api.deleteEdu(res.eduId).subscribe(
                  result => {
                    console.log(result);
                    this.getEduSocials();
                  }, err => {
                    console.log(err);
                    this.getEduSocials();
                  });
            } else if (tableData.table === 'PP') {
              this.api.deletePlanPerfomance(res.ppId).subscribe(
                  result => {
                    console.log(result);
                    this.getPP();
                  }, err => {
                    console.log(err);
                    this.getPP();
                  });
            }
          }
        }
    );
  }


  // getData() {
  //     this.api.getEdu().subscribe(res => {
  //         this.length = res.length;
  //     });
  // }


  getAcadMethod() {
    this.api.getAcadMethod().subscribe(
        res => {
          console.log(res);
          this.gettedActs = res;
        }, err => {
          console.log(err);
        }
    );
  }

  getResearch() {
    this.api.getReasearch().subscribe(
        res => {
          console.log(res);
          this.gettedResearch = res;
        }, err => {
          console.log(err);
        });
  }

  getBudget() {
    this.api.getBudget().subscribe(
        res => {
          console.log(res);
          this.gettedBudgets = res;
        }, err => {
          console.log(err);
        }
    );
  }

  getOrgMetActs() {
    this.api.getOrg().subscribe(
        res => {
          console.log(res);
          this.gettedOrgMetActs = res;
        }, err => {
          console.log(err);
        }
    );
  }

  getEduSocials() {
    this.api.getEdu().subscribe(
        res => {
          console.log(res);
          this.gettedEduSocials = res;
        }, err => {
          console.log(err);
        }
    );
  }

  getPP() {
    this.api.getPlanPerfomance().subscribe(
        res => {
          console.log(res);
          this.gettedPlamPerfomances = res;
        }, err => {
          console.log(err);
        }
    );
  }

  getAllIPP() {
    this.getAcadMethod();
    this.getResearch();
    this.getBudget();
    this.getOrgMetActs();
    this.getEduSocials();
    this.getPP();
  }

  ngOnInit() {
    this.getAllIPP();
  }

  downloadPlan() {
    this.getAllIPP();
    const documentCreator = new DocumentCreator();
    // tslint:disable-next-line:max-line-length
    const doc = documentCreator.create(this.gettedActs, this.gettedResearch, this.gettedBudgets, this.gettedOrgMetActs, this.gettedEduSocials, this.gettedPlamPerfomances);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, 'Индивидуальный план преподавателя.docx');
      console.log('Document created successfully');
    });
  }
}
