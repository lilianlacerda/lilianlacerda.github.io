import { FaJava, FaReact, FaDocker, FaHtml5, FaLinux, FaWindows, FaCss3Alt, FaLightbulb, FaBrain } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiApachemaven, SiHibernate, SiMysql, SiPostman, SiArduino, SiJavascript, SiTypescript   } from "react-icons/si";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { MdPsychology } from "react-icons/md";

export const hardSkills = [
                {name: "Java", icon: FaJava}, 
                {name: "Spring", icon: BiLogoSpringBoot}, 
                {name: "Docker", icon: FaDocker}, 
                {name: "Maven", icon: SiApachemaven},
                {name: "Hibernate", icon: SiHibernate},
                {name: "MySQL", icon: SiMysql},
                {name: "C#", icon: PiFileCSharpDuotone},
                {name: "Postman", icon: SiPostman},
                {name: "Arduino", icon: SiArduino},
                {name: "Linux", icon: FaLinux},
                {name: "Windows", icon: FaWindows},
                {name: "JavaScript", icon: SiJavascript},
                {name: "TypeScript", icon: SiTypescript},
                {name: "React", icon: FaReact},  
                {name: "HTML", icon: FaHtml5},
                {name: "CSS", icon: FaCss3Alt}
];

export const softSkills = [
                {name: "Trabalho em Equipe", icon: LuHeartHandshake},
                {name: "Comunicação", icon: TfiCommentsSmiley},
                {name: "Criatividade", icon: FaLightbulb},
                {name: "Resolução de Problemas", icon: MdPsychology},
                {name: "Adaptabilidade", icon: FaBrain}
];