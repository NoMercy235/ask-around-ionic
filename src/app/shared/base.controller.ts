import { BaseModel } from "./base.model";

export abstract class BaseController {
    protected abstract apiEndpoint : string | Function;
    protected abstract apiModelEndpoint : string | Function;

    public getApiEndpoint(): string {
        return BaseController.resolveApi(this.apiEndpoint);
    }

    public getApiModelEndpoint(model: BaseModel): string {
        return BaseController.resolveApi(this.apiModelEndpoint, model);
    }

    protected static resolveApi(api: string | Function, model?: BaseModel): string {
        return api instanceof Function ? api(model): api;
    }
}
