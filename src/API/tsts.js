import axios from "axios";
import { useEffect, useState } from "react";

export default function Covid3() {
    const [pays, setPays] = useState([]);
    const [covid, setCovid] = useState('');
    const [resultat, setResultat] = useState(null);

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then((response) => {
                console.log(response.data);
                setPays(response.data);
            })
    }, []);

    function handlesubmit(e) {
        e.preventDefault();
        const paysTrouve = pays.find((e) => e.country.toLowerCase() === covid.toLowerCase());
        setResultat(paysTrouve); 
    }

    return (
        <>
            <h1>Données COVID-19 par pays</h1>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="Tapez un pays"
                    onChange={(e) => setCovid(e.target.value)}
                />
                <input type="submit" />
            </form>

            <table border='2px'>
                <thead>
                    <tr>
                        <th>Pays</th>
                        <th>Nombre de cas</th>
                    </tr>
                </thead>
                <tbody>
                    {resultat && (
                        <tr>
                            <td>{resultat.country}</td>
                            <td>{resultat.cases}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
