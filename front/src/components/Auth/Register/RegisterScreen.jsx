import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

export const RegisterScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const {  name, email, password, password2 } = formValues;
    
        
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
    }



    return (
        <div className="register__register_back">
            
            <div>
                <h1>Register</h1>

                <div className="register__register_inside">
                    <form onSubmit={ handleLogin }>

                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nombre"
                            autoComplete="off"
                            value= { name }
                            onChange={ handleInputChange }
                        />

                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            autoComplete="off"
                            value= { email }
                            onChange={ handleInputChange }
                        />
                
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            autoComplete="off"
                            value= { password }
                            onChange={ handleInputChange }
                        />

                        <input 
                            type="password2" 
                            name="password2" 
                            placeholder="Confirmar Password"
                            autoComplete="off"
                            value= { password2 }
                            onChange={ handleInputChange }
                        />

                        <button type="submit" className='boton'> Register </button>

                    </form>
                    
                </div>
                
                <Link to="/api/login">
                    <p>¿Ya tiene cuenta?</p>
                </Link>

            </div>           
        </div>
    )
};
