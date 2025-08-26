import { userLoginSchema, userRegisterSchema, type LoginPayload, type LoginResponse, type RegisterPayload, type UpdatePayload, type UserResponse } from '@root/schemas/userSchemas';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const URL : string = import.meta.env.VITE_API_URL || "http://nitelogdev.discloud.app/users";


//#region Funções de usuário final
const loginUser = async ( data : LoginPayload ) : Promise<void> => {
    userLoginSchema.parse( data );
    const res = await axios.post<LoginResponse>( `${URL}/login`, data );
    const token = res.data.token
    sessionStorage.setItem('authToken', token);

}

const logoutUser = () : void => {
    sessionStorage.removeItem('authToken');
}

const registerUser = async ( data : RegisterPayload ) : Promise<string> => {
    userRegisterSchema.parse( data );
    const res = await axios.post<{id : string}>( `${URL}`, data)
    return res.data.id;
}
//#endregion

//#region Utilidades
const getToken = (): string | null => {
    return sessionStorage.getItem('authToken');
}

const isAdmin = ( token : string ) : boolean => {
    const decoded = jwtDecode<{ role : 'admin' | 'user'}>(token);
    return decoded.role === 'admin';
}
//#endregion

//#region Funções de usuário administrador
const getUser = async ( id : string) : Promise<UserResponse> => {
    const res = await axios.get<UserResponse>( `${URL}`, {
        data : id,
    })
    return res.data;
}

const deleteUser = async ( id : string ) : Promise<void> => {
    const token = getToken();
    if (!token || !isAdmin(token)) throw new Error('Acesso não autorizado!')
        await axios.delete(`${URL}/delete`, { data : id })
}

const updateUser = async ( data : UpdatePayload ) : Promise<UserResponse> => {
    const token = getToken();
    if (!token || !isAdmin(token)) throw new Error('Acesso não autorizado!')
        
    userRegisterSchema.parse( data )
    const res = await axios.put<UserResponse>(`${URL}/update`, data );
    return res.data;
}
//#endregion

export const adminServices = { deleteUser, updateUser, getUser }
export const userServices = { loginUser, registerUser, getToken, logoutUser }