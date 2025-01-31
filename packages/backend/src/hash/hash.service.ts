import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  private readonly saltRounds = 10;

  async hash(password: string) {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
