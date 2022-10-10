import React, {useEffect, useState} from "react";

import Card from './Card';

const Container = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getApiData = async () => {
            // fetch data
            const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
                .then((response) => response.json());

            // update the state
            setData(response);
        };

        getApiData();
    }, []);


    const DisplayCard = () => {
        return data.map(item => {
            return (
                <Card
                    key={item.id}
                    item={item}
                />
            );
        })
    }

    return (
        <div className="container">
                <ul>
                    <DisplayCard />
                </ul>
        </div>
    );
}

export default Container;
