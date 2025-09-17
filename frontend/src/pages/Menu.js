// src/pages/Menu.js
const Menu = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Menu Page</h2>
      <p className="lead text-center">
        Here you can explore all the available features or items.
      </p>

      {/* Example Bootstrap cards for menu items */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Workout</h5>
              <p className="card-text">View and add your daily workouts.</p>
              <a href="/workout" className="btn btn-primary">
                Go to Workout
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">Manage your user profile and settings.</p>
              <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fgym%2F&psig=AOvVaw0hNBPoWtCgqT9rp2s0ZSoN&ust=1758210532372000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCJx-aS4I8DFQAAAAAdAAAAABAE" className="btn btn-primary">
                Go to Profile
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">Check your progress and statistics.</p>
              <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fgym%2F&psig=AOvVaw0hNBPoWtCgqT9rp2s0ZSoN&ust=1758210532372000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCJx-aS4I8DFQAAAAAdAAAAABAE" className="btn btn-primary">
                View Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
