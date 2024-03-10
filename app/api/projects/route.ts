import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
const projectData = [
    {
      id: '1',
      image: '/work/3.png',
      category: 'React JS',
      name: 'Nexa Website',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
      link: '/',
      github: '/',
    },
    {
      id: '2',
      image: '/work/4.png',
      category: 'React JS',
      name: 'Solstice Website',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
      link: '/',
      github: '/',
    },
    {
      id: '3',
      image: '/work/2.png',
      category: 'Next JS',
      name: 'Lemina Website',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
      link: '/',
      github: '/',
    },
    {
      id: '4',
      image: '/work/1.png',
      category: 'Next JS',
      name: 'Evolve Website',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
      link: '/',
      github: '/',
    },
    {
      id: '5',
      image: '/work/3.png',
      category: 'Next JS',
      name: 'Ignite Website',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
      link: '/',
      github: '/',
    },
    {
      id: '6',
      image: '/work/4.png',
      category: 'Next JS',
      name: 'Evolution Website',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
      link: '/',
      github: '/',
    },
    {
      id: '7',
      image: '/work/1.png',
      category: 'FullStack',
      name: 'Serenity Website',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
      link: '/',
      github: '/',
    },
    {
      id: '8',
      image: '/work/2.png',
      category: 'FullStack',
      name: 'Zenlab Website',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
      link: '/',
      github: '/',
    },
  ];

  const prisma = new PrismaClient();


export async function GET(request: NextRequest){
  const projects = await prisma.projects.findMany();

  const greeting = "Hello World!!"
  const json = {
      greeting
  };
  
  return NextResponse.json(projects);
}
export  async function POST(
  req: NextRequest,
  res: NextResponse<any>
){
  const data  =await req.json()
  const {imageLink, category, name , description, github} = data
  console.log(data)
  const project = await prisma.projects.create({
      data: {
        imageUrl: imageLink,
        name,
        description,
        githubLink:github,
        category
      },
    });

  return NextResponse.json(project)
  // if (req.method === "POST") {
  
  //   // res.status(201).json("SASDASDASDAS");

  //   const { imageUrl, } = req.body;

  //   const profile = await prisma.projects.create({
  //     data: {
  //       name: name,
  //       // @ts-ignore
  //       email: email,
  //     },
  //   });

  //   res.json({ profile });
  // }

  // res.status(200).json({ name: "John Doe" });
}
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // return NextResponse.json(projectData);



