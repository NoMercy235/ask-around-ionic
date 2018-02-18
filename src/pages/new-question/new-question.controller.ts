import { BaseController } from "../../app/shared/base.controller";
import { Injectable } from "@angular/core";
import { HttpService } from "../../app/shared/http.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserSettingsService } from "../../app/shared/user-settings.service";

@Injectable()
export class NewQuestionController extends BaseController {
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
            title: ['', [Validators.required]],
            content: ['', Validators.required],
            categories: [''],
            _creator: [this.userSettings.getUser().id]
        });
    }
    // public async login(username: string, password: string): Promise<any> {
    //     const body: AuthenticationModel = {
    //         email: username,
    //         password: password
    //     };
    //
    //     const result = await this.httpService.post(this.getApiEndpoint(), body);
    //
    //     if (result) {
    //         this.userSettings.setToken(result.token);
    //         this.userSettings.setStorage('authToken', result.token);
    //     }
    //
    //     return result;
    // }
}
