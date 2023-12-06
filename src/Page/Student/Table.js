function Table({ students, setSelectedStudent, selectedStudent }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB');
    };

    const handleRadioChange = (studentIndex) => {
        console.log(studentIndex);
        setSelectedStudent(studentIndex);
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
                            <th>Chọn</th>
                        </tr>
                        {students.map((student, index) => (
                            <tr key={student.id}>
                                <td>{index + 1}</td>
                                <td>{student.personal.firstName}</td>
                                <td>{student.personal.lastName}</td>
                                <td>{formatDate(student.personal.dateOfBirth)}</td>
                                <td>{student.personal.address}</td>
                                <td>{student.personal.email}</td>
                                <td>{student.personal.phone}</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="selectedStudent"
                                        checked={selectedStudent === student.id}
                                        onChange={() => handleRadioChange(student.id)}
                                    />
                                </td>
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
