let welcome = ("hello and welcome to my personal API");

let about = {
    name: "Joshua Ross",
    studyYear: "year 2",
    basedIn: "Moray",
    goals: "Complete year 2 and learn game development"
};

let projects = [
    {id: 1, title: "RoR2 Mod", description: "a project to develop a mod for risk of rain 2, primarily aimed at adding a new playable survivor"},
    {id: 2, title: "Personal Website", description: "a project to build a personal website"},
    {id: 3, title: "Example Project", description: "this is an example"} 
];

let feedback = [];

module.exports = {welcome, about, projects, feedback};
