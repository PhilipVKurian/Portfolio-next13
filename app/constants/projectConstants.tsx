export const Projects: Project[] = [
    
    {
        id: 1,
        title: "Resumaker",
        image: "resumaker-form.png",
        description: "As Bootcamp Students, we wanted to create an app that allows users to create free resumes! Trying to get a job is one challenge but having to pay money just to create a resume is NOT COOL! This became our motivation for the project. We want to allow our users to create a FREE account and not have to enter any credit card details to use the application.",
        tech: ["Javascript", "MongoDB", "Graphql", "Mongoose", "React", "MUI", "Kendo"],
        github: "https://github.com/Sophack/resumaker",
        deployed: "https://intense-atoll-83101.herokuapp.com/",
        usage: "Users can register for a free account with us and begin filling out the respective fields: Education, Skills, Work...etc. All the data is saved on mongoDB Atlas which allows the fields to be populated on revist. The rendered resume is exported to PDF via a package Kendo React",
    },

    {
        id: 2,
        title: "Bootcamp Forum",
        image: "bootcampforum.png",
        description: "This application is a platform for past and present bootcamp students to connect, ask questions, mentor, and network with others going through the same experience. Unlike some other forums, even ones specifically for software development, this application is exclusively* for students in coding bootcamp programs, allowing users to have a much more personalized experience.",
        tech: ["Handlebars","Sequelize","MySQL","Jquery","Swagger","JavaScript"],
        github: "https://github.com/lavanyavirushan/p2-bootcamp-forum",
        deployed: "https://github.com/lavanyavirushan/p2-bootcamp-forum",
        usage: "A key benefit to having this large, yet personalized application, is that if students are stuck on a weekly challenge or project, they can search by category to find a post with relevant information to their problem; if they don't see a solution already listed, they can create a post, specify the category and have a member from the community help them out. Having this information available to other users (rather than just in a direct message) will help future students who also face the same question. We envision these categories will not only include various coding languages, libraries, and projects, but also interview tips, job postings, & updates from within the coding community."
    },

    {
        id: 3,
        title: "Weather Prepared",
        image: "weatherprepared.png",
        description: "Weather Prepared The project involves the implementaion of Bulma css, javascript/jQuery, and 2 different APIs (openweathermap and weatherbit.io) to predict clothing the user should need for their next day of work. Or in the event of a storm, what precautions they must take.",
        tech: ["Html","CSS","Javascript"],
        github: "https://github.com/PhilipVKurian/weather-prepared",
        deployed: "https://philipvkurian.github.io/weather-prepared/",
        usage: "The site features a very resposive layout designed for all devices but mainly caters to mobile phones, as our users tend to be on the move with their lifestyle. This website allows users to input their city and workschedule. Using modals the user information is validated."
    },

     {
        id: 4,
        title: "Phaser 3 Game",
        image: "phaser-app.PNG",
        description: "A side project im working on. Using the Phaser 3 game engine with tiled maps to create a virtual world that the player can interact with.. Still a work in progress",
        tech: ["Phaser3","Typescript","Tiled"],
        github: "https://github.com/PhilipVKurian/typescript-parcel-game",
        deployed: "https://super-lokum-edacdb.netlify.app/",
        usage: "Features some game logic a lot of this is a hobby, hence it taking some time to develop :("
    },

]