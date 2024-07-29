import { useEffect, useState } from 'react';
import patientService from '../services/patients';
import { Patient } from '../types';
import { useParams } from 'react-router-dom';

// Render patient info of given id
const PatientPage = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const id = useParams().id

  useEffect(() => {
    const getPatientById = async () => {
      const patientFound = await patientService.getById(String(id));
      if (patientFound) {
        setPatient(patientFound);
      } 
    };
    getPatientById();
  }, []);

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