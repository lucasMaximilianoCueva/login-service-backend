import { Link } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

export const LoginScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = formValues;
    
        
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
    }



    return (
        <div className="login__login_back">
            
            <div>
                <h1>Login</h1>
                <div className="login__login_inside">
                    <form onSubmit={ handleLogin }>
                        
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

                        <button type="submit" className='boton'> Login </button>
                    </form>

                </div>
                <Link to="/api/register">
                    <p>¿Aún no tiene cuenta?, por favor registrate.</p>
                </Link>

            </div>           
        </div>
    )
};
