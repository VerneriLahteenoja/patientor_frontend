import { Entry, HospitalEntryDetailsProps, OccupationalHealthcareEntryDetailsProps, HealthCheckEntryDetailsProps } from "../../types";


const assertNever = (value: never) => {
  throw new Error(`Error: ${value}`);
};

// Case components

// Healthcheck
const HospitalEntryDetails = ({ entry }: HospitalEntryDetailsProps) => {
  return (
    <div>
      {entry.type}
    </div>
  );
};

// OccupationalHealthcare
const OccupationalHealthcareEntryDetails = ({ entry }: OccupationalHealthcareEntryDetailsProps) => {
  return (
    <div>
      {entry.type}
    </div>
  );
};

// Hospital
const HealthCheckEntryDetails = ({ entry }: HealthCheckEntryDetailsProps) => {
  return (
    <div>
      {entry.type}
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