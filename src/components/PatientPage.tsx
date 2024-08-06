import { useEffect, useState } from 'react';
import patientService from '../services/patients';
import { DiagnosesProps, Patient } from '../types';
import { useParams } from 'react-router-dom';

// Render patient info of given id
const PatientPage = (props: DiagnosesProps) => {
  const [patient, setPatient] = useState<Patient | null>(null);

  const id = useParams().id;

  useEffect(() => {
    const getPatientById = async () => {
      const patientFound = await patientService.getById(String(id));
      if (patientFound) {
        setPatient(patientFound);
      } 
    };
    getPatientById();
  }, [id]);

  if (!patient) {
    return (
    <div>
      Error: Patient by id: {id} not found...
    </div>
    );
  }
  console.log(patient);
  return (
    <div>
      <h1>Patientor</h1>
      <div>
        <h3>{patient.name}</h3>
        <p>
          ssn: {patient.ssn}
          <br />
          occupation: {patient.occupation}
        </p>
      </div>
      {patient.entries.length > 0 && <div>
        <h4>entries</h4>
        <div>
          {patient.entries.map(entry => 
            <div key={entry.id}>
              <p>{entry.date} {entry.description}</p>
              <ul>
                {entry.diagnosisCodes?.map(code => <li key={code}>{code} {props.diagnoses.find(d => d.code === code)?.name}</li>)}
              </ul>
            </div>)}
        </div>
      </div>}
    </div>
  );
};

export default PatientPage;