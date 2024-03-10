import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

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
export async function GET(){
    await new Promise(resolve => setTimeout(resolve, 1000));
    return NextResponse.json(projectData);

}