import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src="https://sinhvien.ntu.edu.vn/templates/ntu/images/banner.png" alt="logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;
