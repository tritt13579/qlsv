import { useEffect, useState } from 'react';

function Table(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/data')
            .then((response) => response.json())
            .then((res) => {
                const responseStudent = res;
                setStudents(responseStudent);
            })
            .catch((error) => console.error(error));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB');
    };

    return (
        <div>
            {students ? (
                <table border={1}>
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Họ</th>
                            <th>Tên</th>
                            <th>Ngày sinh</th>
                            <th>Địa chỉ</th>
                            <th>email</th>
                            <th>sđt</th>
                        </tr>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{student.personal.firstName}</td>
                                <td>{student.personal.lastName}</td>
                                <td>{formatDate(student.personal.dateOfBirth)}</td>
                                <td>{student.personal.address}</td>
                                <td>{student.personal.email}</td>
                                <td>{student.personal.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Table;
