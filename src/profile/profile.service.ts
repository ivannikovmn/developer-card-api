import { Injectable } from '@nestjs/common';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOneById(id: string): Promise<Profile> {
    return {} as any;
  }
}