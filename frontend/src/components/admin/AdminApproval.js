import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './AdminApproval.css'; // Custom styles

const AdminApproval = () => {
  const students = ['Student 1', 'Student 2', 'Student 3', 'Student 4'];
  const volunteers = ['Volunteer 1', 'Volunteer 2', 'Volunteer 3', 'Volunteer 4'];

  return (
    <div className="admin-container">
      <div className="admin-login-container">
        <h2 className="text-center mb-4">Admin</h2>
        <form className="admin-example">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
        <div className="admin-form-group">
          <label htmlFor="studentApproval">Student Approval</label>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {students.map((student, index) => (
              <li key={index}>
                {student}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn admin-btn-approve me-md-2" type="button">Approve</button>
                  <button className="btn admin-btn-reject" type="button">Reject</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="admin-form-group">
          <label htmlFor="volunteerApproval">Volunteer Approval</label>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {volunteers.map((volunteer, index) => (
              <li key={index}>
                {volunteer}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn admin-btn-approve me-md-2" type="button">Approve</button>
                  <button className="btn admin-btn-reject" type="button">Reject</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminApproval;
