import { Injectable } from '@angular/core';
import { BaseController } from "../../app/shared/base.controller";
import { HttpService } from "../../app/shared/http.service";
import { Question } from "../../app/models/question.model";
import { QueryParamsService } from "../../app/shared/query-params.service";
import { Globals } from "../../app/shared/globals";

@Injectable()
export class QuestionsController extends BaseController {

    protected apiEndpoint: string | Function = '/api/question/';
    protected apiModelEndpoint: string | Function = '/auth/question/<id>/';

    private page: number = 0;
    private limit: number = 10;
    private sort: any = {
        field: 'created_at',
        order: Globals.SORTING.desc,
    };

    constructor(
        public httpService: HttpService,
        public queryParamsService: QueryParamsService,
    ) {
        super();
    }

    public async getQuestions(nextPage?: boolean): Promise<Question[]> {
        this.page = nextPage ? this.page + 1 : 0;
        const params = {
            pagination: {
                page: this.page,
                limit: this.limit,
            },
            sort: this.sort,
        };

        const link = this.queryParamsService.generateLink(this.apiEndpoint as string, params);
        return this.httpService.get(link);
    }

}
