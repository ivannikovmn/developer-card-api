import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service'
import { ProfilesResolver } from './profile.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProfilesResolver, ProfileService]
})
export class ProfilesModule {}