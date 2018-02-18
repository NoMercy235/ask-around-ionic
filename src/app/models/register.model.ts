import { BaseModel } from "./base.model";

export class RegisterModel extends BaseModel {
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public repeatPassword: string;
}
