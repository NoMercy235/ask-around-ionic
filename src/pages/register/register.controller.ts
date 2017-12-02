import { BaseController } from "../../app/shared/base.controller";
import { Injectable } from "@angular/core";
import { HttpService } from "../../app/shared/http.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserSettingsService } from "../../app/shared/user-settings.service";
import { RegisterModel } from "./register.model";

@Injectable()
export class RegisterController extends BaseController {
    protected apiEndpoint: string | Function = '/auth/register';
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
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required],
        });
    }

    public async register(formValues: RegisterModel): Promise<any> {

        const result = await this.httpService.post(this.getApiEndpoint(), formValues);

        if (result) {
            this.userSettings.setToken(result.token);
            this.userSettings.setStorage('authToken', result.token);
        }
        return result;
    }
}
