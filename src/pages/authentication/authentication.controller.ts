import { BaseController } from "../../app/shared/base.controller";
import { Injectable } from "@angular/core";
import { HttpService } from "../../app/shared/http.service";

@Injectable()
export class AuthenticationController extends BaseController {
    protected apiEndpoint: string | Function = '/auth/authenticate/';
    protected apiModelEndpoint: string | Function = null;

    constructor(
        public httpService: HttpService,
    ) {
        super();
    }

    public onInit(): void {
    }

    public async login(username: string, password: string): Promise<void> {
        const body: any = {
            email: username,
            password: password
        };

        const result = await this.httpService.post(this.getApiEndpoint(), body);
        console.log(result);
    }
}
