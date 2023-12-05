import styles from './Studen.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserMinus, faPen } from '@fortawesome/free-solid-svg-icons';
import Table from './Table';
import Form from '~/components/Layout/DefaultLayout/Form';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Student = () => {
    const [showForm, setShowForm] = useState(false);

    const handleAddButtonClick = () => {
        setShowForm(true);
    };

    const handleCancelButtonClick = () => {
        setShowForm(false);
    };

    const handleSubmit = (formData) => {
        console.log('Form submitted:', formData);
        // Logic to handle form submission (e.g., sending data to an API, updating state, etc.)
        // Remember to define your logic for form submission here
        // This function will be passed as onSubmit prop to the Form component

        // After handling submission, you can close the form
        handleCancelButtonClick();
    };

    return (
        <div className={cx('wrapper')}>
            <Table></Table>
            <div className={cx('wrap-btn')}>
                <button onClick={handleAddButtonClick}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    <p>Thêm</p>
                </button>
                <button>
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
