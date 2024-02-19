import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { ReportData, ReportDetail } from '../../models/doctor.model';
import { PatientDetails } from '../../models/doctor.model';
import { EchoPrediction } from '../../models/doctor.model';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {
  public patientID: string | null='';
  public reportData?: ReportDetail;
  public patientDetails?: PatientDetails;
  public isLoading: boolean = false;
  public anyobj: any;
  public tableHeadings = ['Field', 'Normal Range', 'Actual Result'];
  public patientImage: string | ArrayBuffer | null = null;
  public reportId?: string;
  public echoPredictionResponse?: EchoPrediction;
  public why = [
    'Early Disease Detection',
    'Personalized Medicine',
    'Risk Stratification',
    'Resource Optimization',
    'Improved Decision-Making',
    'Reduced Healthcare Costs',
    'Support for Clinicians'
  ];
  public test:string = 'jslkdfjlskjf';
  public isPredictionModalVisible: boolean = false;
  public predictionDataTree: TreeNode[] = [];
  public isEcgModalVisible: boolean = false;
  public doctorID?: string | null;

  @Input() reportDataById: any;
  @Input() patientInfo: any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private docService: DoctorService
  ) {

  }

  ngOnInit(): void {
    this.doctorID = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.queryParams.subscribe(data => {
      this.patientID = data['reportId'];
    })
    this.getReportById();
    this.getpatientDetailById();
    this.getEchoPrediction();
  }

  public getReportById(): void {
    this.isLoading = true;
    console.log(this.patientID);
    this.docService.getReportDetailsById(this.patientID!)
      .subscribe(res => {
        if (res) {
          this.isLoading = false;
          this.reportData = res;
          console.log('Report Data',this.reportData.patientReport);
        }
      }, err => {
        console.error(err);
        this.isLoading = false;
      });
  }

  public getpatientDetailById(): void {
    this.isLoading = true;
    this.docService.getPatientDetail(this.patientID!)
      .subscribe(res => {
        if(res) {
          this.patientDetails = res;
          this.patientImage = 'data:image/jpeg;base64,' + this.patientDetails.patientImage;
          console.log(this.patientDetails);
          this.isLoading = false;
        }
      }, err => {
        console.error(err);
        this.isLoading = false;
      })
  }

  public getEchoPrediction(): void {
    this.isLoading = true;
    let payLoad = {
      "age": this.reportData?.patientReport?.age,
      "sex": this.reportData?.patientReport?.sex,
      "cp": this.reportData?.patientReport.cp,
      "trestbps": this.reportData?.patientReport.trestbps,
      "chol": this.reportData?.patientReport.chol,
      "fbs": this.reportData?.patientReport.fbs,
      "restecg": this.reportData?.patientReport.restecg,
      "thalach": this.reportData?.patientReport.thalach,
      "exang": this.reportData?.patientReport.exang,
      "oldpeak": this.reportData?.patientReport.oldpeak,
      "slope": this.reportData?.patientReport.slope,
      "ca": this.reportData?.patientReport.ca,
      "thal": this.reportData?.patientReport.thal
    }
    this.docService.getEchoPrediction(payLoad)
      .subscribe(res => {
        this.isLoading = false;
        this.echoPredictionResponse = res;
        console.log(this.echoPredictionResponse);
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
  }

  public showPredictionModal(): void {
    this.isPredictionModalVisible = true;
    this.predictionDataTree = [
      {
        label: 'Heart Disease',
        expanded: true,
        children: [
            {
                label: this.echoPredictionResponse?.result[0]===1 ? 'Disease is probable': 'Slim Chance',
                expanded: this.echoPredictionResponse?.result[0]===1,
                children: [
                    {
                        label: 'Chance of having disease: ' + (this.echoPredictionResponse?.classOneProbability! * 100) + '%'
                    },
                    {
                        label: 'Chance of not having disease: ' + (this.echoPredictionResponse?.classZeroProbability! * 100) + '%'
                    }
                ]
            },
            {
                label: this.echoPredictionResponse?.result[0]===0 ? 'Disease is improbable' : 'Slim Chance',
                expanded: true,
                children: [
                    {
                      label: 'Chance of having disease: ' + (this.echoPredictionResponse?.classOneProbability! * 100) + '%'
                    },
                    {
                      label: 'Chance of not having disease: ' + (this.echoPredictionResponse?.classZeroProbability! * 100) + '%'
                    }
                ]
            }
        ]
      }
    ];
  }

  public hidePredictionModal(): void {
    this.isPredictionModalVisible = false;
  }

  public showECGModal = (): void => {
    this.isEcgModalVisible = true;
    console.log('this is working')
  }
}
