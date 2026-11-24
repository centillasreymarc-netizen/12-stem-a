const students = {
    lor: {
        name: "Christ John Lor",
        position: "Member",
        birthday: "March 9",
        photo: "image/lorr.jpg"
    },
    harvey: {
        name: "Prince Harvey Ermac",
        position: "Sergeant",
        birthday: "January 9",
        photo: "image/harveys.jpg"
    },
    rheeza: {
        name: "Rheeza Julliana Cuachon",
        position: "Treasurer", 
        birthday: "November 27",
        photo: "image/rheeza.jpg"
    },
    mitch: {
        name: "Frechley Mitch Maglangit",
        position: "None",
        birthday: "October 10",
        photo: "image/mitchh.jpg"
    },
    dave: {
        name: "John Dave Abaya",
        position: "None",
        birthday: "August 18",
        photo: "image/dave.jpg"
    },
    christoff: {
        name: "Christoff Jay Comedia",
        position: "None",
        birthday: "November 27",
        photo: "image/christoff.jpg"
    },
    rhain: {
        name: "Rhain Axcil Udto",
        position: "None",
        birthday: "December 24",
        photo: "image/rhain.jpg",
    },
    paola: {
        name: "Paola Oyao",
        position: "President",
        birthday: "February 1",
        photo: "image/paola.jpg"
    },
    willard: {
        name: "Willard Baclado",
        position: "None",
        birthday: "",
        photo: "image/willard.jpg"
    },
    jacob: {
        name: "Jacob Berdin",
        position: "None",
        birthday: "November 20",
        photo: "image/jacob.jpg"
    },
    reymarc: {
        name: "Rey Marc Centillas",
        position: "PIO",
        birthday: "February 9",
        photo: "image/reymarc.jpg"
    },
    daniel: {
        name: "Daniel Goc-ong",
        position: "None",
        birthday: "April 26",
        photo: "image/daniel.jpg"
    },
    romel: {
        name: "Romel Omolon",
        position: "Escort",
        birthday: "August 11",
        photo: "image/romel.jpg"
    },
    juven: {
        name: "Juven Relato",
        position: "None",
        birthday: "November 27",
        photo: "image/juven.jpg"
    },
    axcil: {
        name: "Axcil Salvani",
        position: "None",
        birthday: "November 25",
        photo: "image/axcil.jpg"
    },
    johnray: {
        name: "John Ray Sayson",
        position: "PRO",
        birthday: "October 5",
        photo: "image/johnray.jpg"
    },
    alexie: {
        name: "Alexie Ay-ad",
        position: "None",
        birthday: "December 5",
        photo: "image/alexie.jpg"
    },
    reyana: {
        name: "Reyana Balbero",
        position: "Secretary",
        birthday: "September 10",
        photo: "image/reyana.jpg"
    },
    hydee: {
        name: "Hydee Pinote",
        position: "Vice President",
        birthday: "March 27",
        photo: "image/hydee.jpg"
    },
    crystle: {
        name: "Crystle Genterone",
        position: "PIO",
        birthday: "January 9",
        photo: "image/crystle.jpg"
    },
    samantha: {
        name: "Samantha Bensi",
        position: "PRO",
        birthday: "December 14",
        photo: "image/samantha.jpg"
    },
    abegail: {
        name: "Abegail Jorolan",
        position: "Muse",
        birthday: "August 24",
        photo: "image/abegail.jpg"
    },
    angeila: {
        name: "Angeila Cedeno",
        position: "None",
        birthday: "December 26",
        photo: "image/angeila.jpg"
    },
    chezka: {
        name: "Chezka Erich Catubig",
        position: "None",
        birthday: "January 2",
        photo: "image/chezka.jpg"
    },
    dinah: {
        name: "Dinah Riyadh Tundag",
        position: "None",
        birthday: "February 21",
        photo: "image/dinah.jpg"
    },
    stacy: {
        name: "Stacy Claire Ompad",
        position: "None",
        birthday: "December 3",
        photo: "image/stacy.jpg"
    },
    hazina: {
        name: "Hazina Riz Terrenal",
        position: "None",
        birthday: "",
        photo: "image/hazina.jpg"
    },
    chella: {
        name: "Chella Llanita",
        position: "None",
        birthday: "December 14",
        photo: "image/chella.jpg"
    },
    nina: {
        name: "Nina Ann Borbon",
        position: "None",
        birthday: "January 17",
        photo: "image/nina.jpg"
    },
    rhailyn: {
        name: "Rhailyn Ugsang",
        position: "None",
        birthday: "October 29",
        photo: "image/rhailyn.jpg"
    },
    yannie: {
        name: "Yannie Fat Vensi",
        position: "None",
        birthday: "December 18",
        photo: "image/yannie.jpg"
    },
    joenice: {
        name: "Joenice Montanez",
        position: "None",
        birthday: "September 22",
        photo: "image/joenice.jpg"
    },
    tomas: {
        name: "Sebastian Karl Tomas",
        position: "None",
        birthday: "November 19",
        photo: "image/tomas.jpg"
    }
};

const params = new URLSearchParams(window.location.search);
const studentID = params.get("student");
const student = students[studentID];

if (student) {
    document.getElementById("student-name").textContent = student.name;
    document.getElementById("student-position").textContent = student.position;
    document.getElementById("student-birthday").textContent = student.birthday;
    document.getElementById("student-image").src = student.photo;
};