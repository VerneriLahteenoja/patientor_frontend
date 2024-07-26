import { useState } from 'react';
import patientService from '../services/patients';
import { Patient } from '../types';
import axios from 'axios';

// Render patient info of given id
const PatientPage = async (id: string) => {
  const [patient, setPatient] = useState<Patient | null>(null);
  try {
    const patientFound = await patientService.getById(id);
    if (patientFound) {
      setPatient(patientFound);
    }
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      if (e?.response?.data && typeof e?.response?.data === "string") {
        const message = e.response.data.replace('Something went wrong. Error: ', '');
        console.error(message);
      } else {
        console.error("Unrecognized axios error");
      }
    } else {
      console.error("Unknown error", e);
    }
  }
  if (!patient) {
    return (
    <div>
      Error: Patient by id: {id} not found...
    </div>
    );
  }
  //TODO: add routing to home button
  return (
    <div>
      <h1>Patientor</h1>
      <button type="button">Home</button>
      <div>
        <h3>{patient.name}</h3>
        <br />
        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
      </div>
    </div>
  );
};

export default PatientPage;