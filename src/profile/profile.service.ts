import { Injectable } from '@nestjs/common';
import { Profile } from './profile.model';
import { PrismaService } from './../prisma/prisma.service'

@Injectable()
export class ProfileService {
    constructor(
    private prismaService: PrismaService
  ) {}  

  async findOne(): Promise<Profile> {
    return this.prismaService.profile.findFirstOrThrow({
      include: {
        skills: true,
        experience: true,
        projects: true,
        links: true,        
      },
    });
  }
}