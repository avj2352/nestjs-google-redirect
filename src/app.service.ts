import { Injectable } from '@nestjs/common';

// eslint-disable-next-line prettier/prettier
export type IUser = {provider: 'google' | 'facebook', user: any, accessToken: string};

@Injectable()
export class AppService {
  googleLogin(req: any): IUser {
    if (!req.user) {
      console.log('No User from google');
      return {
        provider: 'google',
        user: {},
        accessToken: '',
      };
    }

    return {
      provider: 'google',
      user: req?.user,
      accessToken: req?.user?.accessToken,
    };
  }
}
