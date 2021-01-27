import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(): Promise<User> {
    const createdUser = new this.userModel({
      name: 'asd',
      age: 11,
      email: 'aacict@gmail.com',
    });
    return createdUser.save();
  }

  //   async findAll(): Promise<Cat[]> {
  //     return this.catModel.find().exec();
  //   }
}
