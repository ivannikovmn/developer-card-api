import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field()
  name: string;

  @Field()
  description: string;
  
  @Field(() => [Skill])   
  skills: Skill[]
  
  @Field(() => [Experience])   
  experience: Experience[]	     
  
  @Field(() => [Project])   
  projects: Project[]  
  
  @Field(() => [Link])   
  links: Link[]    
}    

@ObjectType()
export class Skill {
  	@Field()
  	name: string;    
 } 

@ObjectType()
export class Experience {
  	@Field()
  	company: string;  
  
  	@Field()
  	position: string;   

  	@Field()
  	period: string;  
  
  	@Field()
  	achievements: string;   
 } 
 
@ObjectType()
export class Project {
  	@Field()
  	name: string;  
  
  	@Field()
  	link: string;     
 } 
 
@ObjectType()
export class Link {
  	@Field()
  	name: string;  
  
  	@Field()
  	url: string;     
 } 
 
