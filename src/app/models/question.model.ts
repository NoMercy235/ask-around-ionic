import { User } from "./user.model";

export class Question {
    id: string;
    title: string;
    content: string;
    created_at: Date;
    _creator: User;
}
