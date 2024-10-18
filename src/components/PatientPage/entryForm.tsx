import { Button, TextField } from "@mui/material";
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
          <TextField 
            label="description"
            fullWidth
            value={description}
            onChange={({target}) => setDescription(target.value)}
          />
          <TextField 
            label="date"
            fullWidth
            value={date}
            onChange={({target}) => setDate(target.value)}
          />
          <TextField 
            label="specialist"
            fullWidth
            value={specialist}
            onChange={({target}) => setSpecialist(target.value)}
          />
          <TextField 
            label="healthCheckRating"
            fullWidth
            value={healthCheckRating}
            onChange={({target}) => setHealthCheckRating(target.value)}
          />
          <Button 
            type="submit"
            style={{ float: "left" }}
            variant="contained"          
          >
            Add
          </Button>
          <Button 
            type="button"
            style={{ float: "right" }}
            variant="contained"
            onClick={onCancel}
          >
            Cancel
          </Button>
      </form>
    </div>
    
  );
};

export default EntryForm;