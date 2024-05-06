import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();

  const onSubmit = async(e) => {
    signInWithEmailAndPassword(auth, e.email, e.password).then(res =>{
      localStorage.setItem("token", `${res.idToken}`)
      navigate('genios')
    
     }).catch(error =>{
      Swal.fire({
        title: 'Error Login!',
        text: error,
        icon: 'error',
      })
  
     })
  };

  return (
    <div className="mx-auto max-w-md space-y-6 pt-20">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Iniciar Sesión</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-control mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email*
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Correo electrónico"
          />

        </div>
        <div className="form-control mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña*
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Contraseña"
          />

        </div>
        <div className="form-control flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Iniciar Sesión
          </button>
          <Link to={'registro'} className=" text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Registrar
          </Link>
        </div>
      </form>

    </div>
  );
}

export default Login;


