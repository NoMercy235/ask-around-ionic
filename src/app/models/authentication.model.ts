import { BaseModel } from "./base.model";

export class AuthenticationModel extends BaseModel {
    public email: string;
    public password: string;
}
