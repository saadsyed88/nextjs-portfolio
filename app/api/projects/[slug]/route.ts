import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
  const prisma = new PrismaClient();

export async function GET(request: NextRequest, { params }: { params: { slug: string } }){
console.log("🚀 ~ GET ~ request:", params.slug)


const project = await prisma.projects.findUnique({
  where: {
    id: Number(params.slug),
  },
});

if (!project) {
  console.log(`No project found with the ID ${params.slug}`);
} else {
  // // Modify the project here
  // const updatedProject = await prisma.projects.update({
  //   where: {
  //     id: projectId,
  //   },
  //   data: {
  //     // ... your updates here
  //   },
  // });
  return NextResponse.json(project);

}
}
export  async function PUT(
  req: NextRequest, { params }: { params: { slug: string } }
){
  const data  =await req.json()
  const {imageUrl, category, name , description, github} = data
  console.log(data)
  // // Modify the project here
  const updatedProject = await prisma.projects.update({
    where: {
      id: Number(params.slug),
    },
    data: {
      imageUrl: imageUrl,
      name,
      description,
      githubLink:github,
      category
    },
  });


  return NextResponse.json(updatedProject)
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



