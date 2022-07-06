import axios from "axios";

import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"

const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
        "X-RapidAPI-Key": "c610f37724mshca34574554fd4d5p1959eajsnb27b9bb388f2",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
};



const AxiosCallHook = () => {

    const [countries, setCountries] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            let res = await axios.request(options);
            console.log(res.data)
            setCountries(res.data.response)
            setLoading(false)
        } catch (err) {
            console.log(res.data);
            setLoading(false);
        }
    }


    const loadDataThen = () => {
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Population</th>
                        <th>Continent</th>
                        <th>New</th>
                        <th>Active</th>
                        <th>perMillion</th>
                        <th>Deaths</th>
                        <th>DeathsPerMillion</th>
                    </tr>
                </thead>
                {countries.map((c, i) => {
                    return (
                        <tbody>
                            <tr key={i.id}>
                                <td>{c.country}</td>
                                <td>{c.population}</td>
                                <td>{c.continent}</td>
                                <td>{c.cases.new ? parseInt(c.cases.new.replace('+', '')) : 0}</td>
                                <td>{c.cases.active ? parseInt(c.cases.active) : 0}</td>
                                <td>{c.cases['1M_pop'] ? parseInt(c.cases['1M_pop']) : 0}</td>
                                <td>{c.deaths.total ? parseInt(c.deaths.total) : 0}</td>
                                <td>{c.deaths['1M_pop'] ? parseInt(c.deaths['1M_pop']) : 0}</td>

                            </tr>
                        </tbody>
                    )
                })}


            </Table>
        </div>
    )
}
export default AxiosCallHook;