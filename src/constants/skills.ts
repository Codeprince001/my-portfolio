import Aws from "../assets/aws.svg"
import Django from "../assets/django.svg"
import Github from "../assets/github.svg"
import Git from "../assets/git_icon.svg"
import Html from "../assets/html.svg"
import Javascript from "../assets/javascript.svg"
import Python from "../assets/python.svg"
import React from "../assets/reactjs_icon.svg"
import Typescript from "../assets/typescript.svg"
import Figma from "../assets/figma-svg.svg"
import NetJs from "../assets/nextjs.svg"
import Docker from "../assets/docker_icon.svg"
import Kubernetes from "../assets/kubernetes_icon.svg"
import Linux from "../assets/linux.svg"
import NodeJs from "../assets/nodejs_icon.svg"

export interface Skill {
  icon: any;
  name: string;
}

export const skills: Skill[] = [
  { icon: React, name: 'React' },
  { icon: NetJs, name: 'Next.js' },
  { icon: Javascript, name: 'JavaScript' },
  { icon: Typescript, name: 'TypeScript' },
  { icon: NodeJs, name: 'NodeJS' },
  { icon: Html, name: 'HTML5' },
  { icon: Figma, name: 'Figma' },
  { icon: Python, name: 'Python' },
  { icon: Django, name: 'Django' },
  { icon: Git, name: 'Git' },
  { icon: Github, name: 'GitHub' },
  { icon: Docker, name: 'Docker' },
  { icon: Kubernetes, name: 'Kubernetes' },
  { icon: Aws, name: 'Cloud Services' },
  { icon: Linux, name: 'Sys Admin' },
];
