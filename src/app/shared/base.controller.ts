import { BaseModel } from "./base.model";

export abstract class BaseController {
    protected abstract apiEndpoint : string | Function;
    protected abstract apiModelEndpoint : string | Function;

    protected resolveApi(api: string | Function, model?: BaseModel): string {
        return api instanceof Function ? api(model): api;
    }

    protected getApiEndpoint(): string {
        return this.resolveApi(this.apiEndpoint);
    }

    protected getApiModelEndpoint(model: BaseModel): string {
        return this.resolveApi(this.apiModelEndpoint, model);
    }
}
