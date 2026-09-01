export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  animationDelay: string;
}

export const servicesData: Service[] = [
  {
    id: "writing",
    title: "Writing",
    description:
      "Writing is using words to express ideas, share information, or tell stories. It can create books, articles, poems, or messages to inform, entertain, or connect people.",
    icon: "/write.png",
    animationDelay: "0s",
  },
  {
    id: "direction",
    title: "Direction",
    description:
      "Film direction is guiding a film's creative elements, like acting, visuals, and pacing. A director shapes the story and overall vision to create engaging films that entertain or inspire.",
    icon: "/direct.png",
    animationDelay: "0.2s",
  },
  {
    id: "color-grading",
    title: "Color Grading",
    description:
      "Color grading is adjusting a film's colors and tones to create mood, style, or fix issues, enhancing the overall visual impact and storytelling.",
    icon: "/color.png",
    animationDelay: "0.4s",
  },
  {
    id: "editing",
    title: "Editing",
    description:
      "Editing is shaping and refining footage or content to create a polished final product, improving flow, pacing, and clarity.",
    icon: "/edit.png",
    animationDelay: "0.6s",
  },
  {
    id: "cinematography",
    title: "Cinematography",
    description:
      "Cinematography is the art of capturing visuals through camera work and lighting, setting the film's mood and style, and enhancing storytelling.",
    icon: "/camera.png",
    animationDelay: "0.8s",
  },
];
