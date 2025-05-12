// var del perfil profesional con mi nombre
let devProfile = {
    fullName: "Brahian Gabriel Davalos Cabrera",
    age: 26,
    profession: "Software Developer",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    isEmployed: true,
    contact: {
      email: "brahian.davalos@gmail.com",
      location: "Posadas, Argentina"
    }
  };
  
  // Función para generar una presentación en inglés
  function introduceDev(profile) {
    let intro = `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. `;
    if (profile.skills.length > 0) {
      intro += `I work with ${profile.skills.join(", ")}. `;
    }
    intro += `I live in ${profile.contact.location}. `;
    intro += `I am ${profile.age} years old. `;
    intro += profile.isEmployed ? `Currently, I am employed.` : `Currently, I am looking for job opportunities.`;
    return intro;
  }
  
  
  console.log(introduceDev(devProfile));