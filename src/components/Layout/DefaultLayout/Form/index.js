import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Form = ({ onCancelClick, onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setdateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 1000) + 1,
            personal: {
                id: Math.floor(Math.random() * 1000) + 1,
                firstName,
                lastName,
                dateOfBirth,
                address,
                email,
                phone,
            },
        });

        setFirstName('');
        setLastName('');
        setdateOfBirth('');
        setAddress('');
        setEmail('');
        setPhone('');

        onCancelClick();
    };

    const handleSubmitButtonClick = () => {
        onSubmit({
            id: Math.floor(Math.random() * 1000) + 1,
            personal: {
                id: Math.floor(Math.random() * 1000) + 1,
                firstName,
                lastName,
                dateOfBirth,
                address,
                email,
                phone,
            },
        });

        setFirstName('');
        setLastName('');
        setdateOfBirth('');
        setAddress('');
        setEmail('');
        setPhone('');

        onCancelClick();
    };

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div onClick={handleFormClick} className={cx('form-container')}>
            <form className={cx('student-form')} onSubmit={handleSubmit}>
                <div className={cx('form-group')}>
                    <label htmlFor="first-name">Họ:</label>
                    <input
                        type="text"
                        className={cx('first-name')}
                        name="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="last-name">Tên:</label>
                    <input
                        type="text"
                        className={cx('last-name')}
                        name="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="dob">Ngày sinh:</label>
                    <input
                        type="date"
                        className={cx('dob')}
                        name="dob"
                        value={dateOfBirth}
                        onChange={(e) => setdateOfBirth(e.target.value)}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="address">Địa chỉ:</label>
                    <input
                        type="text"
                        className={cx('address')}
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className={cx('email')}
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                        type="tel"
                        className={cx('phone')}
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <div className={cx('form-group btn-container')}>
                    <button onClick={handleSubmitButtonClick} type="submit" className={cx('btn-submit')}>
                        Xác nhận
                    </button>
                    <button onClick={onCancelClick} type="button" className={cx('btn-cancel')}>
                        Hủy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
