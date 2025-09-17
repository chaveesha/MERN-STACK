
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Welcome to Workout Buddy</h1>
          <p className="lead">
            Track your workouts, monitor your progress, and stay motivated with our easy-to-use platform.
          </p>
          <Link to="/workout" className="btn btn-primary btn-lg me-2">
            Get Started
          </Link>
          <Link to="/menu" className="btn btn-outline-primary btn-lg">
            View Menu
          </Link>
        </div>
        <div className="col-md-6">
          <img 
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffitness%2F&psig=AOvVaw21ha1PgHWUXPuAAzzElbcT&ust=1758211024091000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODT4s2U4I8DFQAAAAAdAAAAABAE" 
            alt="Workout Buddy Hero" 
            className="img-fluid rounded shadow-sm"
        />

        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-5">
        <h2 className="mb-4">Why Use Workout Buddy?</h2>
        <p className="lead">We help you stay organized and motivated.</p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Track Progress</h5>
              <p className="card-text">
                Keep a record of all your workouts and improvements over time.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Easy Navigation</h5>
              <p className="card-text">
                Quick links to your workout, profile, and reports pages.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Stay Motivated</h5>
              <p className="card-text">
                Set goals and celebrate achievements to stay on track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
