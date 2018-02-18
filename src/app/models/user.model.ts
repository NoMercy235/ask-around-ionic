export class UserModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: string;

    constructor(apiUser: any) {
        this.id = apiUser._id;
        this.firstName = apiUser.firstName;
        this.lastName = apiUser.lastName;
        this.email = apiUser.email;
        this.isAdmin = apiUser.isAdmin;
    }

}
