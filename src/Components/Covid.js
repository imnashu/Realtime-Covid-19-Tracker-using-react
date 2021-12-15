import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Covid() {
    const [karnataka, setkarnataka] = useState([])
    const getData = async () => {
        try {
            let res = await fetch("https://data.covid19india.org/data.json")
            let final_res = await res.json()
            final_res.statewise.forEach(element => {
                if (element.state === "Karnataka") {
                    setkarnataka(element)
                }
            });
            console.log(karnataka)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className="card">
                    <div className="card-body">
                        <h3 className ="card-title">Active-Cases</h3>
                        <h4 className ="card-text">{karnataka.active}</h4>
                        <br/>
                        <h3 className ="card-title">confirmed-Cases</h3>
                        <h4 className ="card-text">{karnataka.confirmed}</h4>
                        <br/>
                        <h3 className ="card-title">Total-Deaths</h3>
                        <h4 className ="card-text">{karnataka.deaths}</h4>
                        <br/>
                        <h3 className ="card-title">Last-Updated</h3>
                        <h4 className ="card-text">{karnataka.lastupdatedtime}</h4>

                    </div>
            </div>
        </div>
    )
}
