import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user/user.module';
import { UserService } from 'src/user/user/user.service';
import { HashModule } from 'src/hash/hash.module';
import { HashService } from 'src/hash/hash.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UserModule, HashModule, PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, UserService, HashService],
})
export class AuthModule {}
