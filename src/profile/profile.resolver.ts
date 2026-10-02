import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profile.model';

@Resolver(() => Profile)
export class ProfilesResolver { 

  @Query(() => Profile)
  async profile() {
    const profile = {
        name: 'Mikhail Ivannikov',
        description: 'Full-stack JavaScript developer',
    };    
    return profile;
  }   
}
