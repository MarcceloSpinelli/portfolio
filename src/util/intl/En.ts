import LanguageTokens from "./Languages";


class En implements LanguageTokens {
    getBoolean(): boolean {
        return true
    }
    getHello(): string {
        return "Hello!"
    }
    getGreetings(): string {
        return "Hello, I am"
    }
    getRole(): string {
        return "Systems Analyst and Developer"
    }
    getTitleGraduation(): string {
        return "Graduation"
    }
    getTitleExperience(): string {
        return "Experience"
    }
    getCourse(): string {
        return "System Analysis and Development"
    }
    getDegree(): string {
        return "Associate"
    }
    getDockFunction(): string {
        return "Springboot Backend"
    }
    getDockRole(): string {
        return "Software Engineer"
    }
    getResume(): string {  
        return "Graduated in Systems Analysis and Development from São Paulo Tech School. Throughout my undergraduate studies, I collaborated on various projects, microservices, and the full development of a hardcoded AI chatbot, where I developed innovative technologies. These experiences prepared me for the job market in techniques that cover everything from software design, analysis, development, debugging, testing, and distributed implementation. During this journey, I also developed self-awareness and refined my soft skills, such as teamwork, communication, proactivity, feedback, and management. I worked as an intern at the big tech company Stefanini, where I had the opportunity to sharpen my critical and analytical thinking, solving issues related to financial transactions with technological solutions. I worked alongside incredible people, enriching my professional experience. In addition, I aim not only to reach people in Brazil but also to connect with the global tech community. For this, I use my English as a tool to explore new horizons and expand my impact, constantly practicing my knowledge in languages, programming, analysis, and management."
      }
    getAbilitiesTitle(): string {
        return "Abilities"
    }
    getContactMe(): string {
        return "Contact me"
    }
    getCV(): string {
        return "Download Curriculum"
    }
    getDevelopedBy(): string {
        return "Developed by"
    }
    getAllRightsReserved(): string {
        return "All rights reserved"
    }
    getProjectDescription(): string {
        return "Project Description"
    }   
    getProjectsTitle(): string {
        return "My Projects"
    }
    getKnowMy(): string {
        return "Know My"
    }
    getJourney(): string {
        return "Journey"
    }
}

export default En