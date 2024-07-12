import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [staysData, setStaysData] = useState(null);
    const [medicinesData, setMedicinesData] = useState(null);
    const [error, setError] = useState(null); // état en cas d'erreur ou de non réponse du backend

    useEffect(() => {
        const fetchData = async () => {
            try {
                const staysData = await getStays();
                setStaysData(staysData);
                const medicinesData = await getMedicines(prescriptionId);
                setMedicinesData(medicinesData);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    const contextValue = {
        staysData,
        medicinesData,
        error
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
