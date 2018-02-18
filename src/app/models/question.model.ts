import { UserModel } from "./user.model";

export class QuestionModel {
    id: string;
    title: string;
    content: string;
    _creator: UserModel;
    categories: string[];
    scores: number[];
    replies: string[];
    created_at: string[];
    updated_at: string[];
}
