import fincheck from "../../assets/projects/fincheck.jpg";
import waiterapp from "../../assets/projects/waiterapp.png";

export const HERO_CONTENT = `Sou um desenvolvedor full stack apaixonado, com talento para criar aplicações web robustas e escaláveis. Aperfeiçoei minhas habilidades em tecnologias front-end como React, React Native e Next.js, bem como tecnologias back-end como Node.js, Express e Nest.js, PostgreSQL e MongoDB. Meu objetivo é aproveitar minha experiência para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem experiências excepcionais ao usuário.`;

export const ABOUT_TEXT = `Sou um desenvolvedor full stack dedicado e versátil, apaixonado por criar aplicações web eficientes e fáceis de usar. Trabalhei com diversas tecnologias, incluindo React, Next.js, Node.js, Nest.js, Python, PHP, PostgreSQL e MongoDB. Minha jornada no desenvolvimento web começou com uma profunda curiosidade sobre como as coisas funcionam e evoluiu para uma carreira onde me esforço continuamente para aprender e me adaptar a novos desafios. Eu prospero em ambientes colaborativos e gosto de resolver problemas complexos para entregar soluções de alta qualidade. Fora da programação, gosto de me manter ativo, explorando novas tecnologias.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Full Stack Developer",
    company: "Pessoal",
    description: `Web App desenvolvido para controlar suas finanças de forma fácil, podendo listar suas transações com diversos filtros.`,
    technologies: ["React / Vite ", "Typescript", "TailwindCSS", "Zod", "React Query","NestJS", "Prisma", "PostgreSQL",],
  },
  {
    year: "2024",
    role: "Full Stack Developer",
    company: "Freelancer",
    description: `Fiz com que o sistema de baixas de entrega de uma transportadora fosse automatizado; o responsável pelas baixas escolhia uma lista de Ctes para dar baixa e todos os itens eram baixados automaticamente.`,
    technologies: ["Python"],
  },
  {
    year: "2023",
    role: "Full Stack Developer",
    company: "Freelancer",
    description: `Desenvolvimento de aplicação híbrida com React Native e Type Script onde criei um app para agendar pedidos para um parente que vende salgadinhos, que integrou com a API desenvolvida com Node TS e WebSockets, com um dashboard que listava os pedidos realizados e podia ser configurado como pronto para retirar o pedido.`,
    technologies: ["React / React Native", "Typescript", "Styled-Components", "NodeJS", "MongoDB","Websockets",],
  },
];

export const PROJECTS = [
  {
    title: "Fincheck Wep App",
    image: fincheck,
    url: "https://fincheckapp.site",
    description:
      "Fincheck é um aplicativo para gestão de finanças pessoais. Monitore seus gastos de forma simples, podendo filtrar por conta, categoria, tipo de transação e data.",
    technologies: ["React / Vite ", "Typescript", "TailwindCSS", "Zod", "React Query","NestJS", "Prisma", "PostgreSQL",],
  },
  {
    title: "WaiterApp",
    image: waiterapp,
    description:
      "WaiterApp é um aplicativo para fazer e gerenciar pedidos para um restaurante. O cliente ou garçom faz o pedido do cliente e esse pedido é enviado para o painel da cozinha.",
    technologies: ["React / React Native", "Typescript", "Styled-Components", "NodeJS", "MongoDB","Websockets",],
  },
];

export const CONTACT = {
  WhatsApp: "+55 (65) 9 8127 5466 ",
  email: "ianbiel850@gmail.com",
};
