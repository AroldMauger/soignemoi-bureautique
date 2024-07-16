export const getStays = async () => {
    const csrfToken = sessionStorage.getItem('csrf_token'); // Récupère le token CSRF depuis le localStorage

    const response = await fetch('https://soignemoi.alwaysdata.net/api/stays', {
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
    const response = await fetch(`https://soignemoi.alwaysdata.net/api/secretary/login`, {
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



export const finishStay = async (stayId) => {
  const csrfToken = sessionStorage.getItem('csrf_token'); 

  const response = await fetch(`https://soignemoi.alwaysdata.net/api/stays/${stayId}/finish`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': csrfToken ? `Bearer ${csrfToken}` : '',  
      },
  });

  if (!response.ok) {
      throw new Error(`Failed to finish stay. Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
