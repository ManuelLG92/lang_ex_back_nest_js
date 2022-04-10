import { AppCommand } from '../../../Infrastructure/AppCqrsBus/AppCommand';
import { IUser } from '../../../Domain/User';

export class CreateUserCommand implements AppCommand {
  constructor(public readonly data: IUser) {}
}