import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UserService } from 'src/user/user/user.service';
import { HashService } from 'src/hash/hash.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly user: UserService,
    private readonly hash: HashService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerAuthDto: RegisterAuthDto) {
    const existingUser = await this.user.findOne(registerAuthDto.email);
    if (existingUser) {
      return `Its e-mail: ${registerAuthDto.email} register `;
    }
    const hashesPassword = await this.hash.hash(registerAuthDto.password);
    return await this.user.create({
      email: registerAuthDto.email,
      name: registerAuthDto.name,
      password: hashesPassword,
    });
  }

  async login(loginAuthDto: LoginAuthDto) {
    try {
      const existingUser = await this.user.findOne(loginAuthDto.email);
      if (!existingUser) {
        throw new NotFoundException('User not found');
      }

      const hashPassword = await this.hash.compare(
        loginAuthDto.password,
        existingUser.password,
      );

      if (!hashPassword) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return {
        authData: {
          name: existingUser.name,
          email: existingUser.email,
        },
        token: await this.jwtService.signAsync({
          name: existingUser.name,
          email: existingUser.email,
        }),
      };
    } catch {
      throw new NotFoundException();
    }
  }
}
