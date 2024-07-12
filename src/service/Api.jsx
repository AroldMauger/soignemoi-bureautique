export const getStays = async () => {
    const csrfToken = localStorage.getItem('csrf_token'); // Récupère le token CSRF depuis le localStorage

    const response = await fetch('http://localhost:8000/api/stays', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': csrfToken ? `Bearer ${csrfToken}` : '',  // Ajoute le token CSRF dans l'en-tête Authorization si disponible
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch stays. Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Renvoie le tableau de données
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



const getMedicines = async (prescriptionId) =>  {
    return fetch(`http://localhost:8000/api/prescriptions/${prescriptionId}/medicines`) 
    .then((response) => response.json())
}
