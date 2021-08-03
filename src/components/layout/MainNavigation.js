import classes from './MainNavigation.module.css';
import {NavLink} from 'react-router-dom';

const MainNavigation = () => {
    return <section className={classes.header}>
        <h1 className={classes.logo}>Great Quotes</h1>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to='/quotes'>All Quotes</NavLink></li>
                <li><NavLink to='/new-quote'>Add a Quote</NavLink></li>
            </ul>
        </nav>
    </section>
}

export default MainNavigation;