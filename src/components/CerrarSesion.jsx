import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom';
import { handleSignOut } from '../../src/firebaseConfig'; 

const CerrarSesion = () => {
    const navigate = useNavigate()
  const logout = () => {
    try {
        handleSignOut()
        navigate('/')
    } catch  (error) { 
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error,
      footer: '<a href="#">Why do I have this issue?</a>'
    });
        
    }
  };

  return (
    <div className='flex p-10 justify-center'>
      
      <button className="bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors" onClick={logout}>
        Cerrar Sesión</button>
    </div>
  );
};

export default CerrarSesion;
