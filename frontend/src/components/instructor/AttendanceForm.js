import React, { useState } from 'react';
import axios from 'axios';
import './AttendanceForm.css';  // Import the CSS file

const AttendanceForm = () => {
    const students = ['saiteja', 'vinay', 'vishwas', 'sukruthi', 'sai', 'charan'];
    const initialAttendanceData = students.map(student => ({ name: student, status: 'Present' }));
    
    const [attendanceData, setAttendanceData] = useState(initialAttendanceData);
    const [date, setDate] = useState('');
    const [allSelected, setAllSelected] = useState(true);

    const handleStatusChange = (index) => {
        const newAttendanceData = [...attendanceData];
        newAttendanceData[index].status = newAttendanceData[index].status === 'Present' ? 'Absent' : 'Present';
        setAttendanceData(newAttendanceData);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const toggleAll = () => {
        const newStatus = allSelected ? 'Absent' : 'Present';
        const newAttendanceData = attendanceData.map(student => ({ ...student, status: newStatus }));
        setAttendanceData(newAttendanceData);
        setAllSelected(!allSelected);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/attendance', { date, attendanceData });
            alert(response.data.message);
        } catch (error) {
            alert('Attendance submission failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="attendance-form">
            <h1>Attendance Tracker</h1>
            <div>
                <label>Date:</label>
                <input type="date" name="date" value={date} onChange={handleDateChange} required />
            </div>
            {attendanceData.map((student, index) => (
                <div key={index} className="student-attendance">
                    <label>{student.name}:</label>
                    <input
                        type="checkbox"
                        name={`status-${index}`}
                        checked={student.status === 'Present'}
                        onChange={() => handleStatusChange(index)}
                    />
                </div>
            ))}
            <button type="button" onClick={toggleAll}>
                {allSelected ? 'Unselect All' : 'Select All'}
            </button>
            <button type="submit">Submit Attendance</button>
        </form>
    );
};

export default AttendanceForm;

