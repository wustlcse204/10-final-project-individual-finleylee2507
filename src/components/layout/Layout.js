import React from 'react'
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
    return (
        <div>
             <MainNavigation></MainNavigation>
             <main className={classes.main}>
                {props.children}
                 {/* where the main content goes */}
             </main>
        </div>
    )
}

export default Layout
