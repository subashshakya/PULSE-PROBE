import { Component, OnInit } from '@angular/core';
import { LabService } from '../../services/lab.service';
import { finalize } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {
  public isLoading: boolean = false;
  public patientList: any[] = [];
  public selectedPatientId: any;
  public reportForm: FormGroup;
  public showModal: boolean = true;
  public errorModal: boolean = false;

  constructor(
    private service: LabService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.reportForm = this.formBuilder.group(
      {
        reportId: ['', [Validators.required]],
        patientId: ['', Validators.required],
        healthCareCenterName: ['', Validators.required],
        age: ['', [Validators.required]],
        sex: ['', Validators.required],
        cp: ['', Validators.required],
        tRestBps: ['', Validators.required],
        chol: ['', Validators.required],
        fbs: ['', Validators.required],
        restecg: ['', Validators.required],
        thalach: ['', Validators.required],
        exang: ['', Validators.required],
        oldPeak: ['', Validators.required],
        slope: ['', Validators.required],
        ca: ['', Validators.required],
        thal: ['', Validators.required],
        sonographer: ['', Validators.required],
        aarticRoot: ['', Validators.required],
        leftVentrical: ['', Validators.required],
        rightVentrical: ['', Validators.required],
        diastole: ['', Validators.required],
        systole: ['', Validators.required],
        lvpw: ['', Validators.required],
        lvef: ['', Validators.required],
        leftAtrium: ['', Validators.required],
        ivs: ['', Validators.required],
        owner: ['', Validators.required],
      }
    )
  }

  ngOnInit(): void {
    this.getPatientList();
  }

  public getPatientList = (): void => {
    this.isLoading = true;
    this.service.getPatientList()
      .pipe(finalize(() => { this.isLoading = false }))
      .subscribe(res => {
        this.patientList = res;
        console.log(this.patientList)
      })
  }

  public submitReport = (): void => {
    console.log(this.reportForm.valid);
    debugger
    this.isLoading = true;
    let report = {
      "reportId": this.reportForm.get('reportId')?.value,
      "patientId": this.reportForm.get('patientId')?.value,
      "healthCareCenterId": this.reportForm.get('healthCareCenterName')?.value,
      "age": this.reportForm.get('age')?.value,
      "sex": this.reportForm.get('sex')?.value,
      "cp": this.reportForm.get('cp')?.value,
      "trestbps": this.reportForm.get('tRestBps')?.value,
      "chol": this.reportForm.get('chol')?.value,
      "fbs": this.reportForm.get('fbs')?.value,
      "restecg": this.reportForm.get('restecg')?.value,
      "thalach": this.reportForm.get('thalach')?.value,
      "exang": this.reportForm.get('exang')?.value,
      "oldpeak": this.reportForm.get('oldPeak')?.value,
      "slope": this.reportForm.get('slope')?.value,
      "ca": this.reportForm.get('ca')?.value,
      "thal": this.reportForm.get('thal')?.value,
      "sonographer": this.reportForm.get('sonographer')?.value,
      "aarticRoot": this.reportForm.get('aarticRoot')?.value,
      "leftVentrical": this.reportForm.get('leftVentrical')?.value,
      "rightVentrical": this.reportForm.get('rightVentrical')?.value,
      "diastole": this.reportForm.get('diastole')?.value,
      "systole": this.reportForm.get('systole')?.value,
      "lvpw": this.reportForm.get('lvpw')?.value,
      "lvef": this.reportForm.get('lvef')?.value,
      "leftAtrium": this.reportForm.get('leftAtrium')?.value,
      "ivs": this.reportForm.get('ivs')?.value,
      "owner": this.reportForm.get('owner')?.value
    }
    console.log(report)
    this.service.createReport(report)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        this.messageService.add({severity:'success', summary:'Successfully Created Report', detail:`For report id: ${report.patientId}`});
      }, err => {
        this.messageService.add({severity:'error', summary:'Could Not Created Report', detail:`For report id: ${report.patientId}`});
      })
  }
}
