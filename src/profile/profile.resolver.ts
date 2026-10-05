import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service'

@Resolver(() => Profile)
export class ProfilesResolver { 
    constructor(
    private profileService: ProfileService
  ) {}

  @Query(() => Profile)
  async profile() {  
    return this.profileService.findOne();
  }   
}