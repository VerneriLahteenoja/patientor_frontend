import { SyntheticEvent, useState } from "react";


const EntryForm = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [healthCheckRating, setHealthCheckRating] = useState('');

  const onSubmit = (event: SyntheticEvent) => {
    //TODO: implement form submit
    event.preventDefault();
    console.log('submit');
  };
  const onCancel = () => {
    setDescription('');
    setDate('');
    setSpecialist('');
    setHealthCheckRating('');
  };
  //TODO: style form
  return (
    <div>
      <h1>New HealthCheck entry</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>description</label>
          <input type="text" value={description} onChange={({target}) => setDescription(target.value)} />
        </div>
        <div>
          <label>date</label>
          <input type="text" value={date} onChange={({target}) => setDate(target.value)} />
        </div>
        <div>
          <label>specialist</label>
          <input type="text" value={specialist} onChange={({target}) => setSpecialist(target.value)} />
        </div>
        <div>
          <label>healthCheckRating</label>
          <input type="text" value={healthCheckRating} onChange={({target}) => setHealthCheckRating(target.value)} />
        </div>
        <button type="submit">Add</button>
        <button type="button" onClick={() => oncancel}>Cancel</button> 
      </form>
    </div>
  );
};

export default EntryForm;