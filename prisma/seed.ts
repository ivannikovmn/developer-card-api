import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {  
  const profile = await prisma.profile.upsert({
    where: { slug: "mikhail-ivannikov" },
    update: {},
    create: {  
      slug: "mikhail-ivannikov",
      name: "Mikhail Ivannikov",
      description: "Full-stack JavaScript-разработчик, сфокусированный на TypeScript и backend-разработке. Практический опыт создания веб-приложений на React, Node.js и NestJS, работы с PostgreSQL, REST API, GraphQL, Docker и Git. Разрабатываю проекты от проектирования структуры данных и API до реализации frontend и интеграции компонентов в единое приложение.",
      skills: {
        create: [      
          {
            name: "JavaScript",            
          },            
          {
            name: "TypeScript",            
          },
          {
            name: "React",            
          }, 
          {
            name: "Next.js",            
          },          
          {
            name: "Node.js",            
          },                
          {
            name: "NestJS",            
          },   
          {
            name: "Express",            
          },  
          {
            name: "REST API",            
          },                                
          {
            name: "GraphQL",            
          },            
          {
            name: "PostgreSQL",            
          },    
          {
            name: "MongoDB",            
          },             
          {
            name: "Prisma",            
          },     
          {
            name: "Docker",            
          },  
          {
            name: "Git",            
          },                                                            
        ],
      },

      experience: {
        create: [
          {
            company: "Собственные проекты",
            position: "Full-Stack разработчик JavaScript" ,
            period: "2022 — настоящее время",
            achievements: "Разработка практических full-stack проектов на JavaScript и TypeScript: проектирование структуры данных и API, работа с PostgreSQL и MongoDB, создание React/Next.js интерфейсов, контейнеризация Docker и интеграция frontend и backend. В текущих проектах развиваю backend-направление на Node.js и NestJS."  
          },                                                          
        ],
      },     
      
      projects: {
        create: [
          {
            name: "Developer Card API",
            link: "https://github.com/ivannikovmn/developer-card-api/",            
          },
          {
            name: "Wildnature",
            link: "https://wildnature.imn.kz/",
          },
          {
            name: "ThingsBoard PV Emulator",
            link: "https://github.com/ivannikovmn/thingsboard-pv-emulator",
          },          
          {
            name: "CRUD Log",
            link: "https://github.com/ivannikovmn/crudlog",
          },          
        ],
      },      

      links: {
        create: [
          {
            name: "Linkedin",
            url: "https://linkedin.com/in/-mikhail-ivannikov",            
          },
          {
            name: "Github",
            url: "https://github.com/ivannikovmn",
          },
        ],
      },
    }
  });  
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });