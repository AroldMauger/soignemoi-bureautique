const getStays = async () =>  {
    return fetch(`http://localhost:8000/api/stays`) 
    .then((response) => response.json())
}


const loginSecretary1 = async (email, password) =>  {
    return fetch(`http://localhost:8000/api/secretary/login`) 
    .then((response) => response.json())
}

const getMedicines = async (prescriptionId) =>  {
    return fetch(`http://localhost:8000/api/prescriptions/${prescriptionId}/medicines`) 
    .then((response) => response.json())
}

//Appel à l'API pour la connexion

export const loginSecretary = async (email, password) => {
    const response = await fetch(`http://localhost:8000/api/secretary/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error(`Connexion failed: user not found. Status code: ${response.status}`);
    }
  
    const data = await response.json();
    return data.csrf_token; // On retourne uniquement le token CSRF
};
