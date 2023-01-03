import { Fragment } from 'react';
import classes from './Layout.module.css';
import ManinNavigation from './MainNavigation';

const Layout =(props)=>{
 return<Fragment>
    <ManinNavigation />
    <main className={classes.main}>{props.children}</main>
 </Fragment>
};
export default Layout;