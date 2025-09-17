import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// Components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm' // optional, if you want to add new workouts

const Workout = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">My Workouts</h2>

      <div className="row">
        {/* Left: Workout Form */}
        <div className="col-md-4">
          <WorkoutForm /> {/* Optional: form to add new workout */}
        </div>

        {/* Right: Workout List */}
        <div className="col-md-8">
          {workouts && workouts.length > 0 ? (
            workouts.map(workout => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))
          ) : (
            <p>No workouts yet. Add your first workout!</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Workout
