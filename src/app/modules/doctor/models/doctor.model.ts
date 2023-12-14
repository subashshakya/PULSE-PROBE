export interface DoctorReport {
  patientId: number;
  reportId: number;
  doctorId: 2;
  patientFirstName: string;
  patientLastName: string;
  age: number;
  gender: string;
  healthCareCenterName: string;
  address: string;
  email: string;
}

export interface ReportData {
  aarticRoot: string;
  age: number;
  ca: number;
  chol: number;
  cp: number;
  diastole: string;
  exang: 0;
  fbs: number;
  healthCareCenterId: number;
  ivs: string;
  leftAtrium: string;
  leftVentrical: string;
  lvef: string;
  lvpw: string;
  oldpeak: string;
  owner: string;
  patientId: number;
  reportId: number;
  restecg: number;
  rightVentrical: string;
  sex: number;
  slope: number;
  sonographer: string;
  systole: string;
  thal: number;
  thalach: number;
  trestbps: number;
}

export interface ReportDetail {
  email: string;
  healthCareCenterName: string;
  patientFirstName: string;
  patientLastName: string;
  patientReport: {
    aarticRoot: string;
    age: number;
    ca: number;
    chol: number;
    cp: number;
    diastole: string;
    exang: 0;
    fbs: number;
    healthCareCenterId: number;
    ivs: string;
    leftAtrium: string;
    leftVentrical: string;
    lvef: string;
    lvpw: string;
    oldpeak: string;
    owner: string;
    patientId: number;
    reportId: number;
    restecg: number;
    rightVentrical: string;
    sex: number;
    slope: number;
    sonographer: string;
    systole: string;
    thal: number;
    thalach: number;
    trestbps: number;
  }
}

export interface PatientDetails {
  address: string;
  age: number;
  birthDate: string;
  district: string;
  email: string;
  gender: string;
  municiplaity: string;
  patientFirstName: string;
  patientId: string;
  patientImage: string;
  patientLastName: string;
  patientMiddleName: string;
  phoneNumber: number;
  state: string;
  wardNo: number;
}

export interface EchoPrediction {
  result: number[];
  classOneProbability: number;
  classZeroProbability: number;
}