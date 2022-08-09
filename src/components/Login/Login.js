import { Routes, Route } from "react-router-dom"
import LoginForm from "./LoginForm"
import Register from "./Register"


const Login = () => {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login