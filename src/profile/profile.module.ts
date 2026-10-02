import { Module } from '@nestjs/common';
import { ProfilesResolver } from './profile.resolver';

@Module({
  providers: [ProfilesResolver],
})
export class ProfilesModule {}