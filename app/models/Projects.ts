import mongoose from "mongoose";
import { string } from "zod";

const ProjectSchema = new mongoose.Schema({
    heading: string,
    description: string,
    imgUrl: string
},
{timestamps:true});

const Projects = mongoose.models.Project || mongoose.model("Project",ProjectSchema);

export default Projects;