import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import patientService from '../../services/patients';
import { DiagnosesProps, Patient } from '../../types';
import EntryDetails from './entryDetails';
import EntryForm from './entryForm';


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
  console.log(props.diagnoses);
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
      <EntryForm />
      {patient.entries.length > 0 && <div>
        <h4>entries</h4>
        <div>
          {patient.entries.map(entry => 
            <div key={entry.id}>
              <EntryDetails entry={entry} />        
            </div>)}
        </div>
      </div>}
    </div>
  );
};

export default PatientPage;