import { useState } from "react";


const EntryForm = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [healthCheckRating, setHealthCheckRating] = useState('');

  const onSubmit = () => {
    //TODO: implement form submit
    console.log('submit');
  }
  const onCancel = () => {
    setDescription('');
    setDate('');
    setSpecialist('');
    setHealthCheckRating('');
  }
  //TODO: style form
  return (
    <div>
      <h1>New HealthCheck entry</h1>
      <form>
        <div>
          <label>description</label>
          <input type="text" />
        </div>
        <div>
          <label>date</label>
          <input type="text" />
        </div>
        <div>
          <label>specialist</label>
          <input type="text" />
        </div>
        <div>
          <label>healthCheckRating</label>
          <input type="text" />
        </div>
        <button type="submit">Add</button>
        <button type="button">Cancel</button> 
      </form>
    </div>
  )
};

export default EntryForm;