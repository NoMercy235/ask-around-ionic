import { BaseController } from "../../app/shared/base.controller";
import { Injectable } from "@angular/core";
import { HttpService } from "../../app/shared/http.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserSettingsService } from "../../app/shared/user-settings.service";
import { AuthenticationModel } from "../../app/models/authentication.model";

@Injectable()
export class AuthenticationController extends BaseController {
    protected apiEndpoint: string | Function = '/auth/authenticate/';
    protected apiModelEndpoint: string | Function = null;

    public fg: FormGroup;

    constructor(
        public httpService: HttpService,
        public formBuilder: FormBuilder,
        public userSettings: UserSettingsService,
    ) {
        super();
    }

    public onInit(): void {
        this.fg = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    public hasToken(): Promise<boolean> {
        return this.userSettings.getStorage('authToken').then((token: string) => {
            if (token) {
                this.userSettings.setToken(token);
                return true;
            } else {
                return false;
            }
        });
    }

    public async login(username: string, password: string): Promise<any> {
        const body: AuthenticationModel = {
            email: username,
            password: password
        };

        const result = await this.httpService.post(this.getApiEndpoint(), body);

        if (result) {
            this.userSettings.setUser(result.user);
            this.userSettings.setToken(result.token);
            // TODO: if remember me is set
            // this.userSettings.setStorage('authToken', result.token);
        }

        return result;
    }
}
