export interface HealthCareCenter {
  healthCareCenterId: number;
  healthCareCenterName: string;
  licsenceNumber: number,
  panNumber: string;
  address: string;
  state: string;
  district: string;
  phoneNumber: number;
  description: string;
  email: string;
  healthCenterImage: string;
  latitude: number;
  longitude: number;
  type: string;
}


export interface Booking {
  bookingId: number;
  patientId: number;
  patient: {
    patientId: number;
    patientFirstName: string;
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
    birthDate: string;
    patientImage: string;
  };
  doctorId: number;
  doctor: {
    firstName: string,
    lastName: string,
    nmcNumber: string,
    degree: string,
    address: string,
    email: string,
    phoneNumber: number,
    speciality: string,
    qualification: string,
    gender: string,
    description: string,
    doctorImage: string
  };
  clinicId: number;
  clinic: {
    healthCareCenterId: number,
    healthCareCenterName: string,
    licsenceNumber: number,
    panNumber: string,
    address: string,
    state: string,
    district: string,
    phoneNumber: number,
    description: string,
    email: string,
    healthCenterImage: string,
    laltitude: number,
    longitude: number,
    type: string
  };
  time: string;
  bookedDate: string;
  title: string;
  description: string;
}

export interface PatientDetail {
  patientId: number;
  patientFirstName: string;
  patientMiddleName: string;
  patientLastName: string
  age: number;
  gender: string;
  address: string;
  state: string;
  district: string;
  phoneNumber: number;
  municiplaity: string;
  wardNo: number;
  email: string;
  birthDate: string;
  patientImage: string;
}