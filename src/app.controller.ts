import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { AppService, IUser } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('google')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  @Redirect(`https://soullyrics.net`)
  googleAuthRedirect(@Req() req) {
    const result: IUser = this.appService.googleLogin(req);
    if (result.accessToken !== '') {
      return {
        url: `https://soullyrics.net?accessToken=${result.accessToken}`,
        statusCode: 302,
      };
    }
  }
}
