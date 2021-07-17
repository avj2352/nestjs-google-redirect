# OAuth 2.0 Redirect using Google

In This Repository I am using Google Strategy without a DB. The Result accessToken I am redirecting to the Client 
`https://soullyrics.net`

## Important Links

- [Google Redirect](https://dev.to/imichaelowolabi/how-to-implement-login-with-google-in-nest-js-2aoa)
- [Redirect using Nest JS](https://docs.nestjs.com/controllers#redirection)

## Pre-requisite

Create a `.env` file at the root of the project with the following credentials

```bash
# Google Client ID
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
# Google Secret
GOOGLE_SECRET=YOUR_GOOGLE_SECRET
```


```javascript
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
```