const Schedule = () => {
  return (
    <div className="schedule-container">
      {/* needs a logo to go above the schedule */}
      <div className="schedule-header">
        <h1>San Diego BMX Racing Schedule</h1>
      </div>
      <div className="bmx-schedule">
        <h2>BMX Schedule</h2>
        <h3>Monday BMX Class</h3>
        <table>
          <thead>
            <tr>
              <th>Tyler Brown BMX Speed Clinic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BMX Beginner Class</td>
              <td>5:00-6:00pm</td>
            </tr>
            <tr>
              <td>BMX Intermediate Class</td>
              <td>6:00-7:00pm</td>
            </tr>
            <tr>
              <td>BMX Expert Class</td>
              <td>7:00-8:00pm</td>
            </tr>
            <tr>
              <td>Cost $20 for each BMX Class</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule
