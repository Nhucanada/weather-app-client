import React, { useState, useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import ItemList from '../components/grid/ItemList';
import { nanoid } from 'nanoid'

const Home = () => {
    const [location, updateLocation] = useState('');

    const [items, setItems] = useState([]);

    const handleSubmit = () => {
        console.log('reached here 1');
        fetch('/weather?address=' + location).then((response) => {
            // console.log(response);
            response.json().then((data) => {
                //  console.log(data);
                if (data.error) {
                    console.log(data.error);
                    document.getElementById("message-1").textContent = data.error;
                    document.getElementById("message-2").textContent = '';
                } else {
                    //document.getElementById("message-1").textContent = data.location;
                    //document.getElementById("message-2").textContent = data.forecast;
                    addItem(data.location, data.forecast);
                }
            }
            )
        })
    }

    const deleteItem = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    const addItem = (location, weatherData) => {
        const newItems = [...items];
        const newItem = {
            id: nanoid(),
            text: weatherData,
            date: location,
        };

        newItems.push(newItem);
        setItems(newItems);
        console.log('reached here 2');
    }

    return (
        <>
            <table class="center">
                <tr>
                    <td><a href="/" class="changeYellow">Weather</a></td>
                    <td><a href="/about" class="changeYellow">About</a></td>
                    <td><a href="/404" class="changeYellow">404</a></td>
                </tr>
            </table>
            <div className="Heading">
                <table class="center">
                    <tr>
                        <td>Weather Application</td>
                    </tr>
                </table>
            </div>
            <p class="Description">Enter the name of a city to retrieve its weather information below:</p>
            <div className="main-content" id="mainContent">
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <Container>
                        <Form.Label> Location: </Form.Label>
                        <Form.Control type="text" placeholder="e.g. Toronto, Ontario" onChange={(e) => {
                            e.preventDefault();
                            updateLocation(e.target.value);
                        }} />
                        <p> </p>
                        {/* <Button variant="primary" type="submit"> Search </Button> */}
                        <button type="submit" class="submit"> Submit </button>
                    </Container>
                </Form>
                <p> </p>

                <p className="display-weather" id="message-1"> </p>
                <p className="display-weather" id="message-2"> </p>


                <div className="items-container">
                    <ItemList items={items} handleDeleteItem={deleteItem} />
                </div>

            </div>
        </>
    )
}

export default Home;
