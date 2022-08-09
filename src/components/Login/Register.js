import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";


const Register = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={`container animeLeft`}>
      <h1 className="title">Register</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Full-Name"
          type="text"
          name="full_name"
          placeholder="Write your full name"
          {...username}
        />
        <Input
          label="E-mail"
          type="email"
          name="email"
          placeholder="Write your E-mail"
          {...email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Write your password"
          {...password}
        />
        <Button >Register</Button>
      </form>
    </section>
  )
}

export default Register