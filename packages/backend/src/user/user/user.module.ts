import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashModule } from 'src/hash/hash.module';
import { HashService } from 'src/hash/hash.service';

@Module({
  imports: [PrismaModule, HashModule],
  controllers: [UserController],
  providers: [UserService, PrismaService, HashService],
  exports: [UserService],
})
export class UserModule {}
