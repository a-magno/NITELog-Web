
import type { User } from '@root/services/interfaces';
import { z } from 'zod';

const PASSWORD_MIN_LENGTH : number = 8;


const userLoginSchema = z.object({
    email: z.email(),
    password : z.string().min(PASSWORD_MIN_LENGTH, {
        error : (issue) => {
            if (issue.code === "too_small") {
                return `ERR_${ issue.code }: Senha deve ter ${ issue.minimum } caracteres ou mais.`;
            }
            if (issue.input === undefined) {
                return `ERR_${issue.code} : Campo não pode ser vazio.`
            }
            return `Senha invalida.`
        }
    }),
});

const userRegisterSchema = z.object({
    username: z.string(),
    email: z.email(),
    password: z.string().min(PASSWORD_MIN_LENGTH, {
        error : (issue) => {
            if (issue.code === "too_small") {
                return `ERR_${ issue.code }: Senha deve ter ${ issue.minimum } caracteres ou mais.`;
            }
            if (issue.input === undefined) {
                return `ERR_${issue.code} : Campo não pode ser vazio.`
            }
            return `Senha invalida.`
        }
    }),
    registration : z.string().optional()
})

//#region Interfaces
export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  username: string;
  registration: string; //matricula
}

export interface LoginResponse {
    token : string,
    user : {
        id : string;
        username : string;
        role : 'admin' | 'user';
    }
}

export interface UserResponse {
    created_at: Date,
    deleted_at: Date,
    email: string,
    id: string,
    name: string,
    registration: string,
    roles: Array<string>,
    updated_at: Date
}

export interface UpdatePayload {
    id : string;
    user_data : User;
}
//#endregion

export { userLoginSchema, userRegisterSchema }