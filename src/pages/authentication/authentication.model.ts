import { BaseModel } from "../../app/shared/base.model";

export class AuthenticationModel extends BaseModel {
    public email: string;
    public password: string;
}
