import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/users.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(): Promise<User>;
}
