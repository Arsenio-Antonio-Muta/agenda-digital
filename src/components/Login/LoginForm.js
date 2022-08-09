import Input from "../Forms/Input";
import Button from "../Forms/Button";
import styles from "./LoginForm.module.css"
import { Link } from "react-router-dom";
import stylesBtn from "../Forms/Button.module.css"
import useForm from "../../Hooks/useForm";
import React from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const LoginForm = () => {
  const global = React.useContext(GlobalContext)

  console.log(global.handleClick)

  const username = useForm();
  const password = useForm()

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      // Chamada da api
    }
  }


  return (
    <section className={`${styles.form} animeLeft container`}>
      <h1 className="title">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          type="email"
          name="email"
          placeholder="Write your E-mail"
          {...username}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Write your password"
          {...password}
        />
        <Button>
          Login
        </Button>
      </form>
      <div className={styles.cadastro}>
        <h2 >Cadastre-se</h2>
        <p>Are you still registered? Clique in register.</p>
        <Link className={stylesBtn.button} to="/register">
          Register
        </Link>
      </div>
    </section>
  )
}

export default LoginForm