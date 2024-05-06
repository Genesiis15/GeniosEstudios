import Swal from 'sweetalert2'
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebaseConfig";

export default function Registro() {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
    setLoading(true); 
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      localStorage.setItem("token", `Bearer ${userCredential.idToken}`)
      navigate('/genios')
    } catch (error) {
      Swal.fire({
        title: 'Error Register!',
        text: error,
        icon: 'error',
      })
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-6 pt-20">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Registro</h2>
        </div>
        <div className="form-control mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nombre de usuario*</label>
          <input type="text" {...register("nombre", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nombre de usuario" />
   
        </div>
        <div className="form-control mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico*</label>
          <input type="email" {...register("email", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Correo electrónico" />
       
        </div>
        <div className="form-control mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña*</label>
          <input type="password" {...register("password", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Contraseña" />
        </div>
        <div className="form-control flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={loading}>
            Registrarse
          </button>
          <Link to={'/'} className=" text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={loading}>
            Iniciar Sesion
          </Link>
        </div>
      </form>
    </>
  );
}

