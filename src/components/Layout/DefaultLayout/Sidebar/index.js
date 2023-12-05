import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';

import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} />
                <MenuItem title="Student" to={config.routes.student} />
                <MenuItem title="Teacher" to={config.routes.teacher} />
                <MenuItem title="Class" to={config.routes.class} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
