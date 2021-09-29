var strings = {
    french: {
        menuAbout: "À propos",
        menuWorks: "Mes travaux",
        welcome: "Bienvenue sur mon",
        scrollText: "Scrollez pour naviguer",
        heroHello: "Bonjour !",
        heroIam: "Je suis Thomas Bach, étudiant ingénieur en informatique",
        columnAbout: "Je suis étudiant en école d'ingénieur, spécialité informatique. Ce domaine est incroyablement vaste et varié, et c'est ce qui me plaît tout particulièrement. J'aime coder mais aussi la créativité, des choses qui sont pour moi très complémentaires. Je recherche actuellement un stage en informatique, n'hésitez pas à me contacter pour plus d'informations.",
        columnStudy: "J'étudie à ",
        myWorks: "Projets personnels",
        botDesc: "Toutes les semaines le début de la page Wikipédia d'un animal. Bot codé en PHP début 2021, dans le but de développer mes compétences dans ce language, et de mettre en lumière diverses espèces d'animaux parfois bien souvent méconnues.",
        daamDesc: "Jeu vidéo développé en Java dans le cadre d'un projet scolaire.\
        Le jeu a été réalisé en 3 semaines par un groupe de 6 étudiants,\
        avec certaines contraintes comme l'utilisation d'automates et la structure MVC (Model View Controller).",
        info: "Besoin d'informations ? N'hésitez pas à envoyer un mail à "
    },
    english: {
        menuAbout: "About",
        menuWorks: "My works",
        welcome: "Welcome to my",
        scrollText: "Scroll to browse",
        heroHello: "Hello !",
        heroIam: "I'm Thomas Bach, computer engineering student",
        columnAbout: "I'm a french engineering student in computer sciences. This field is incredibly wide and various, that's what I like particularly. I love coding but also creativity, two things very complementary to me. I'm currently looking for a computer science internship, feel free to contact me for further informations.",
        columnStudy: "I study at ",
        myWorks: "Personnal projects",
        botDesc: "Every week, the beginning of an animal's Wikipedia page. Bot coded in PHP early 2021, with the aim of developping my skills in this programming language, and to highlight some misunderstood animal species.",
        daamDesc: "Video game developped in Java during a school project.\
        The game has been carried out in 3 weeks by a group of 6 students,\
        under specific constraints like the use of automata and the MVC structure (Model View Controller).",
        info: "Need information ? Feel free to email me at "
    }
}

var Lang = "english";

// localize with default language
localizeStrings();

// update selected language   
function localizeStrings() {
    if(Lang == "french"){
        Lang = "english"
    }
    else{
        Lang = "french"
    }
    $(strings[Lang]).each(function(key, lang){
        $.each(lang, function(id, string) {
            $("#"+id).html(string);
        });
    });
}
