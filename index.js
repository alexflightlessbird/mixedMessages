// initialize names, professions, and ages arrays
const names = ["Fisher","Daniel","Danielle","Marley","David","Lauren","Trent","Mark","Marcus","Louis","Ava","Harley","Dave","Lola","Tate","Sophia","Trayvon","Blake","Kenzie","Elena","Justin","Cooper","Sydney","Deshawn","Owen","Kaylee","Gilbert","Fahad","Jared","Andrew","Lillian","Olivia","Reuben","Abigail","Marisa","Mandy","Nolan","Lily","Rosa","Wyatt","Liam","Abby","Marisol","Violet","Isaiah","Alex","Ryan","Mave","Leo","Aubrey","Jalen","Chase","Chance","Marie","Lynn","Rose","Kate","Lee","Everly","James","Knox","Booker","Drake","Marlin","Merlin","Joe","Tyler","Kate","Jack","Jacie","Josh","Toby","Bryce","Tyson","Parker","Jake","Jamee","Taylor","Dylan","Bryson","Tom","Lionel","Raymond","Trey","Maya","Veronica","Norriss","Nate","Summer","August","Charlie","Avery","Tabitha","Lexi","Silas","Ambrose","Stella","Neznae","Waylen","Tatum","Chris","Naiomee","Navy","Brylee","Lester","Luca"];
const professions = ["Software Devleoper","Nurse Practiioner","Medical and Health Services Manager","Physician Assistant","Financial Manager","IT Manager","Web Developer","Dentist","Lawyer","Veterinarian","Physician","Orthodontist","Market Research Analyst","Logistician","Registered Nurse","Management Analyst","Occupational Therapy Assistant","Computer Systems Analyst","Financial Advisor","Data Scientist","Financial Analyst","Oral and Maxillofacial Surgeon","Nurse Anesthetist","Epidemiologist","Actuary","Operations Research Analyst","Database Administrator","Statistician","Speech-Language Pathologist","Psychiatrist","Optometrist","Pediatrician","Dental Hygienist","Respiratory Therapist","Mental Health Counselor","Physical Therapist Assistant","Business Operations Manager","School Psychologist","Anesthesiologist","Obstetrician and Gynecologist","Biochemist","Construction Manager","Marketing Manager","Chiropractor","Pilot","Medical records Technician","Psychologist","Biomedical Engineer","Petroleum Engineer","High School Teacher","Substance Abuse and Behavioral Disorder Counselor","Veterinary Technologist and Technician","Wind Turbine Technician","Computer Network Architect","Public Relations Specialist","Elementary School Teacher","School Counselor","Social and Community Service Manager","Computer Systems Administrator","Community Health Worker","Landscaper and Groundskeeper","Diagnostic Medical Sonographer","Home Health Aide","Personal Care Aide","Prosthodentist","Paralegal","Delivery Truck Driver","Orthotist and Prosthetist","Industrial Psychologist","Occupational Therapist","Loan Officer","MRI Technologist","Accountant","Dietitian and Nutritionist","Medical Assistant","Cardiovascular Technologist","Electrician","Massage Therapist","Hearing Aid Specialist","Genetic Counselor","Recreation and Fitness Worker","Patrol Officer","Clinical Laboratory Technician","Restaurant Cook","Solar Photovoltaic Installer","Pharmacist","Audiologist","Middle School Teacher","Pharmacy Technician","Credit Counselor","Technical Writer","Firefighter","Nail Technician","Sales Manager","Environmental engineer","HR Specialist","Political Scientist"];
const ages = [];

// Helper function for ageGenerator
const generateRandom = () => {
    return Math.floor(Math.random() * 103);
}

// generate given number of ages
const ageGenerator = (num) => {
    for (let i = 0; i < num; i++) {
        ages.push(generateRandom());
    }

    return ages;
}

// randomize array fed in - helper function for getTotal
const randomize = (array) => {
    let i = array.length;
    let j = 0;
    let temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

// gets the first num of a randomized array
const getTotal = (array,num) => {
    let randomized = randomize(array);
    const total = randomized.slice(0,num);

    return total;
}

// display setup and randomizing functions caller
const runProgram = (generate) => {
    const nameList = getTotal(names,generate);
    const profList = getTotal(professions,generate);
    const ageList = ageGenerator(generate);

    console.log("Here are your characters to work with:");

    for (let i = 1; i < 11; i++) {
        console.log(`${i}. ${nameList[i-1]} is a(n) ${profList[i-1]}, and they are ${ageList[i-1]} years old.`);
    }
}

runProgram(10);