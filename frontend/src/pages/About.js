//import heroImage from '../assets/hero.jpg'; // Optional: use the same hero image or another

const About = () => {
  return (
    <div className="container mt-5">
      
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">About Workout Buddy</h1>
          <p className="lead">
            Workout Buddy is designed to help you track your workouts, monitor progress, and stay motivated. Our mission is to make fitness simple, accessible, and enjoyable for everyone.
          </p>
          <p>
            With Workout Buddy, you can create and manage your workouts, track your achievements, and stay consistent. Whether you are a beginner or an experienced athlete, our app supports your fitness journey.
          </p>
        </div>
        <div className="col-md-6">
         
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-5">
        <h2 className="mb-4">Key Features</h2>
      </div>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm p-3">
            <h5 className="card-title">Track Workouts</h5>
            <p className="card-text">Keep a record of all your workouts and see your progress over time.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm p-3">
            <h5 className="card-title">Stay Motivated</h5>
            <p className="card-text">Set goals, monitor achievements, and celebrate milestones to stay on track.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm p-3">
            <h5 className="card-title">Easy to Use</h5>
            <p className="card-text">User-friendly interface ensures that managing your workouts is quick and simple.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
