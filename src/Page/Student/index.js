import styles from './Studen.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus, faPen } from '@fortawesome/free-solid-svg-icons';
import Table from './Table';
import Form from '~/components/Layout/DefaultLayout/Form';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const Student = () => {
    const [showForm, setShowForm] = useState(false);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleAddButtonClick = () => {
        setShowForm(true);
    };

    const handleCancelButtonClick = () => {
        setShowForm(false);
    };

    useEffect(() => {
        fetch('http://localhost:3001/data')
            .then((response) => response.json())
            .then((res) => {
                const responseStudent = res;
                setStudents(responseStudent);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleSubmit = (formData) => {
        console.log('Form submitted:', formData);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        };

        fetch('http://localhost:3001/data', options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setStudents([...students, data]);
            })
            .catch((error) => console.error(error));

        handleCancelButtonClick();
    };

    const handleDeleteButtonClick = () => {
        if (selectedStudent !== null) {
            const studentToDelete = students.find((student) => student.id === selectedStudent);

            fetch(`http://localhost:3001/data/${studentToDelete.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const updatedStudents = students.filter((student) => student.id !== selectedStudent);
                    setStudents(updatedStudents);
                    setSelectedStudent(null);
                    // console.log('Sinh viên đã được xóa:', studentToDelete);
                })
                .catch((error) => {
                    console.error('Xóa lỗi', error);
                });
        } else {
            alert('Vui lòng chọn một sinh viên để xóa.');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Table
                students={students}
                setSelectedStudent={setSelectedStudent}
                selectedStudent={selectedStudent}
            ></Table>
            <div className={cx('wrap-btn')}>
                <button onClick={handleAddButtonClick}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    <p>Thêm</p>
                </button>
                <button onClick={handleDeleteButtonClick}>
                    <FontAwesomeIcon icon={faUserMinus} />
                    <p>Xóa</p>
                </button>
                <button>
                    <FontAwesomeIcon icon={faPen} />
                    <p>Sửa</p>
                </button>
            </div>
            {showForm && (
                <div className={cx('overlay', { show: showForm })} onClick={handleCancelButtonClick}>
                    <div className={cx('modal-content', { show: showForm })}>
                        <Form onCancelClick={handleCancelButtonClick} onSubmit={handleSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Student;
