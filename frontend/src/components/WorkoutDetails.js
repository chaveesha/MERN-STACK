import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body position-relative">
        <h5 className="card-title">{workout.title}</h5>
        <p className="card-text"><strong>Load (kg): </strong>{workout.load}</p>
        <p className="card-text"><strong>Reps: </strong>{workout.reps}</p>
        <p className="card-text text-muted">
          {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
        </p>
        <span
          className="material-symbols-outlined text-danger position-absolute"
          style={{ top: '10px', right: '10px', cursor: 'pointer' }}
          onClick={handleClick}
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default WorkoutDetails;
