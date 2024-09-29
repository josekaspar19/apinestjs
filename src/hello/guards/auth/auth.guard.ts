import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);
    console.log(request.headers['authorization']);
    if(!request.headers['authorization']) return false;
    if(request.headers['authorization'] !== "123456") return false;

    return true;
  }
}
