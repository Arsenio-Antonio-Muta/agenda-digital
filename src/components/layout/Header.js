import { Link } from "react-router-dom"

import styles from "../layout/Header.module.css"
import React from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

const Header = () => {
  const global = React.useContext(GlobalContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <ul className={styles.ul}>
          {global.authenticated ? (
            <>
              <Link className={styles.login} to="myagenda">
                Agendar
              </Link>
              <Link className={styles.register} to="login">
                Sair
              </Link>
            </>
          ) : (
            <>
              <Link className={styles.login} to="login">
                Login
              </Link>
              <Link className={styles.register} to="register">
                Register
              </Link>
            </>
          )

          }
        </ul>
      </nav>
    </header >
  )
}

export default Header