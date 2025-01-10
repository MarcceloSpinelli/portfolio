export const projects = [
  {
    id: 1,
    title: {
      en: "Data ETL Netflix",
      pt: "ETL de Dados para Netflix"
    },
    description: {
      en: "This project automates the ETL (Extract, Transform, Load) process for Excel files. It scans a folder for raw Excel files, extracts relevant data, and processes it to include metadata such as the file name, location (e.g., Brazil, France, Italy), and campaign information. The final consolidated and cleaned data is exported to a single Excel file for further analysis.",
      pt: "Este projeto automatiza o processo de ETL (Extração, Transformação e Carga) para arquivos Excel. Ele verifica uma pasta em busca de arquivos Excel brutos, extrai dados relevantes e processa informações adicionais, como o nome do arquivo, localização (ex.: Brasil, França, Itália) e dados de campanha. Os dados consolidados e limpos são exportados para um único arquivo Excel para análises futuras."
    },
    technologies: ["Python", "Pandas", "OS", "Glob", "ExcelWriter"],
    image: "/portfolio/project-banners/etl-netflix.png",
    link: "",
    colaborators: [],
    profiles: []
  },
  {
    id: 2,
    title: {
      en: "Aranhobot - Discord Bot",
      pt: "Aranhobot - Bot para Discord"
    },
    description: {
      en: "This project involves the creation and deployment of a Discord bot using Node.js and the Discord.js library. The bot dynamically registers commands, handles user interactions like slash commands and select menus, and provides relevant documentation links. Additionally, it includes an Express server to maintain uptime and handle HTTP requests, ensuring the bot runs seamlessly.",
      pt: "Este projeto envolve a criação e o deployment de um bot para Discord usando Node.js e a biblioteca Discord.js. O bot registra comandos dinamicamente, lida com interações de usuários, como comandos de barra e menus de seleção, e fornece links para documentações relevantes. Além disso, inclui um servidor Express para manter o bot ativo e lidar com requisições HTTP, garantindo operação contínua."
    },
    technologies: ["Node.js", "Discord.js", "Express", "dotenv", "REST API"],
    image: "/portfolio/project-banners/aranhobot.jpg",
    link: "",
    colaborators: [],
    profiles: []
  },
  {
    id: 3,
    title: {
      en: "Magalu Challenge",
      pt: "Desafio Magalu"
    },
    description: {
      en: "This project is a challenge involving the development of a RESTful API using Java 21 and Spring Boot. The application integrates with a MySQL database through Spring Data JPA and includes scheduled tasks implemented with Spring Scheduler. The project is containerized using Docker for seamless deployment and scalability. Tools like DBeaver and Insomnia were used for database management and API testing, respectively, with a ready-to-import JSON file provided for quick API interaction.",
      pt: "Este projeto é um desafio que envolve o desenvolvimento de uma API RESTful utilizando Java 21 e Spring Boot. A aplicação integra-se com um banco de dados MySQL através do Spring Data JPA e inclui tarefas agendadas implementadas com o Spring Scheduler. O projeto é containerizado utilizando Docker para facilitar o deployment e a escalabilidade. Ferramentas como DBeaver e Insomnia foram utilizadas para gerenciamento do banco de dados e testes da API, com um arquivo JSON pronto para importação e interação rápida com a API."
    },
    technologies: ["Java", "Spring Boot", "JPA", "Spring Scheduler", "Docker", "MySQL"],
    image: "/portfolio/project-banners/logo-magalu.png",
    link: "",
    colaborators: [],
    profiles: []
  },
  {
    id: 4,
    title: {
      en: "Capivara Tech - Minecraft Server Hosting",
      pt: "Capivara Tech - Hospedagem de Servidores Minecraft"
    },
    description: {
      en: "Capivara Tech's Minecraft Server Hosting platform allows users to create and manage Minecraft servers seamlessly on AWS. The backend, powered by Spring Boot with integrated Spring Security, ensures secure and scalable API functionality for server management, user authentication, and payment handling. The frontend, built with React and Next.js, provides an intuitive user experience for server configuration, deployment, and monitoring. The platform leverages Docker for containerized deployments and AWS for high availability and performance.",
      pt: "A plataforma de hospedagem de servidores Minecraft da Capivara Tech permite que os usuários criem e gerenciem servidores Minecraft de forma simples e eficiente na AWS. O backend, desenvolvido com Spring Boot e integrado ao Spring Security, garante uma API segura e escalável para gerenciamento de servidores, autenticação de usuários e processamento de pagamentos. O frontend, construído com React e Next.js, oferece uma experiência intuitiva para configuração, implantação e monitoramento de servidores. A plataforma utiliza Docker para deploys containerizados e AWS para alta disponibilidade e desempenho."
    },
    technologies: ["AWS S3", "AWS ECS", "Java", "Spring Boot", "Spring Security", "Docker", "React", "Next.js"],
    image: "/portfolio/project-banners/capivara.png",
    link: "https://github.com/capivara-hosting",
    colaborators: ["/portfolio/project-banners/colaborators/guilherme.jpeg"],
    profiles: ["https://github.com/gcomartins"]
  },
  {
    id: 5,
    title: {
      en: "Capivara Tech - Memomate Notes & Tasks API",
      pt: "Capivara Tech - Memomate API de Notas e Tarefas"
    },
    description: {
      en: "Memomate is a product developed by Capivara Tech for managing notes and tasks. Built with Java and Spring Boot, the API features JPA for database operations, Spring Security for user authentication, and integrates seamlessly with a MySQL database. Docker is used for containerization, ensuring easy deployment and scalability. This API serves as the backbone for a task management system, enabling efficient organization and collaboration.",
      pt: "O Memomate é um Produto desenvolvido pela Capivara Tech para gerenciar notas e tarefas. Construída com Java e Spring Boot, a API utiliza JPA para operações de banco de dados, Spring Security para autenticação de usuários e se integra de forma eficiente a um banco de dados MySQL. O Docker é usado para containerização, garantindo fácil deploy e escalabilidade. Esta API é o núcleo de um sistema de gerenciamento de tarefas, permitindo organização e colaboração eficazes."
    },
    technologies: ["Java", "Spring Boot", "JPA", "Spring Security", "Docker", "MySQL"],
    image: "/portfolio/project-banners/capivara.png",
    link: "",
    colaborators: [],
    profiles: []
  },
  {
    id: 6,
    title: {
      en: "NorthInk - Tattoo artists social network",
      pt: "NorthInk - Rede social de tatuadores"
    },
    description: {
      en: "A social network solution focused on tattoo artists. Developed as a web solution and a native Android app in Kotlin using Jetpack Compose, Spring Boot, and React. With Spring Security ensuring robust authentication and Swagger providing comprehensive API documentation, the platform is designed for scalability and reliability. It operates on AWS EC2 instances and leverages Kubernetes for containerized deployments.",
      pt: "Solução de rede social voltada para tatuadores. Desenvolvida como uma solução web e app android nativo em Kotlin utilizando Jetpack Compose, Springboot e React. Com Spring Security garantindo autenticação robusta e Swagger fornecendo documentação completa da API, a plataforma foi projetada para escalabilidade e confiabilidade. Ela opera em instâncias EC2 da AWS e utiliza Kubernets para deploys containerizados."
    },
    technologies: ["AWS S3", "AWS EC2", "Java", "Spring Boot", "Spring Security", "Docker", "React", "Swagger", "SQL Server"],
    image: "/portfolio/project-banners/northink.png",
    link: "https://github.com/North-Tattoo",
    colaborators: ["/portfolio/project-banners/colaborators/sophia.jpeg", "/portfolio/project-banners/colaborators/jeremias.png", "/portfolio/project-banners/colaborators/thais.jpeg", "/portfolio/project-banners/colaborators/murilo.jpeg"],
    profiles: ["https://github.com/sophiaamaral", "https://github.com/J3remias-Barcelos", "https://github.com/thaismoitinho", "https://github.com/Murilo-Morgado"]
  },
  {
    id: 7,
    title: {
      en: "Ducktetive - Monitoramento de Servidores",
      pt: "Ducktetive - Server Monitoring"
    },
    description: {
      en: "A server monitoring web app was developed to identify and manage issues related to system overuse and malicious activities on hardware.",
      pt: "Um webapp de monitoramento de servidores foi desenvolvido para identificar e gerenciar problemas de excesso de uso em sistemas e atividades maliciosas nos hardwares."
    },
    technologies: ["AWS EC2", "Java", "Shell", "HTML", "CSS", "JavaScript", "SQL Server"],
    image: "/portfolio/project-banners/ducktetive.png",
    link: "https://github.com/Ducktetive",
    colaborators: ["/portfolio/project-banners/colaborators/zapatta.jpeg", "/portfolio/project-banners/colaborators/vitor.jpeg", "/portfolio/project-banners/colaborators/ramon.png", "/portfolio/project-banners/colaborators/kaiky.jpeg"],
    profiles: ["https://github.com/DanielZapatta", "https://github.com/vitoramos", "https://github.com/JRamonPere", "https://github.com/kaikycruz"]
  }
];
