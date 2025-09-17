import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: { 'Content-Type': 'application/json' }
    })

    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'CREATE_WORKOUT', payload: json })
      setTitle('')
      setLoad('')
      setReps('')
    }
  }

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <h4>Add New Workout</h4>

      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control mb-2" />

      <label>Load (kg):</label>
      <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} className="form-control mb-2" />

      <label>Reps:</label>
      <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} className="form-control mb-2" />

      <button type="submit" className="btn btn-primary mt-2">Add Workout</button>
    </form>
  )
}

export default WorkoutForm
