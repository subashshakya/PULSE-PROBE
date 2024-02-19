export interface HealthCareCenter {
  healthCareCenterId: number;
  healthCareCenterName: string;
  licsenceNumber: number;
  panNumber: string;
  address: string;
  state: string;
  district: string;
  phoneNumber: number;
  description: string;
  email: string;
  healthCenterImage: string;
  laltitude: number;
  longitude: string;
  type: string;
}

export interface Doctor {
  doctorId: number;
  firstName: string;
  lastName: string;
  nmcNumber: number;
  degree: string;
  address: string;
  email: string;
  phoneNumber: number;
  speciality: string;
  qualification: string;
  gender: string;
  description: string;
  doctorImage: string;
}

export interface Patient {
  patientId: number;
  patientFirstName: number;
  patientMiddleName: string;
  patientLastName: string;
  age: number;
  gender: string;
  address: string;
  state: string;
  district: string;
  phoneNumber: number;
  municiplaity: string;
  wardNo: number;
  email: string;
  birthDate: number;
  patientImage: string;
}