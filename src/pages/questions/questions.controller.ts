import { Injectable } from '@angular/core';
import { BaseController } from "../../app/shared/base.controller";
import { HttpService } from "../../app/shared/http.service";
import { Question } from "../../app/models/question.model";

@Injectable()
export class QuestionsController extends BaseController {

    protected apiEndpoint: string | Function = '/api/question/';
    protected apiModelEndpoint: string | Function = '/auth/question/<id>/';

    constructor(
        public httpService: HttpService,
    ) {
        super();
    }

    public async getQuestions(): Promise<Question[]> {
        return this.httpService.get(this.apiEndpoint as string);
    }

}
