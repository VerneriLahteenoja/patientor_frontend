import { Entry, HospitalEntryDetailsProps, OccupationalHealthcareEntryDetailsProps, HealthCheckEntryDetailsProps } from "../../types";

//TODO: Add some styling (borders?) to entries
const assertNever = (value: never) => {
  throw new Error(`Error: ${value}`);
};

// Case components

// Healthcheck
const HospitalEntryDetails = ({ entry }: HospitalEntryDetailsProps) => {
  return (
    <div>
      <p>{entry.date} {entry.description}</p>
      Entry type: {entry.type}
      <br />
      Discharge: {entry.discharge.date} {entry.discharge.criteria}
      <br />
      Specialist: {entry.specialist}
    </div>
  );
};

// OccupationalHealthcare
const OccupationalHealthcareEntryDetails = ({ entry }: OccupationalHealthcareEntryDetailsProps) => {
  return (
    <div>
      <p>{entry.date} {entry.description}</p>
      Entry type: {entry.type}
      <br />
      Employer: {entry.employerName}
      <br />
      {entry.sickLeave && <div>Sickleave: {entry.sickLeave.startDate} - {entry.sickLeave.endDate}</div>}
    </div>
  );
};

// Hospital
const HealthCheckEntryDetails = ({ entry }: HealthCheckEntryDetailsProps) => {
  return (
    <div>
      <p>{entry.date} {entry.description}</p>
      Entry type: {entry.type}
      <br />
      Health rating: {entry.healthCheckRating}
    </div>
  );
};


const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntryDetails entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntryDetails entry={entry} />;
    case "HealthCheck":
      return <HealthCheckEntryDetails entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;