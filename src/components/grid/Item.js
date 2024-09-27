import React from 'react';
import { MdDeleteForever } from 'react-icons/md'

const Item = ({ id, text, date, iconUrl, handleDeleteItem }) => {

    const iconDict = {
        'overcast clouds': '04d',
        'broken clouds': '04d',
        'scattered clouds': '03d',
        'few clouds': '02d',
        'clear sky': '01d',
        'tornado': '50d',
        'squalls': '50d',
        'volcanic ash': '50d',
        'dust': '50d',
        'sand': '50d',
        'fog': '50d',
        'Haze': '50d',
        'Smoke': '50d',
        'mist': '50d',
        'Heavy shower snow': '13d',
        'Shower snow': '13d',
        'Light shower snow': '13d',
        'Rain and snow': '13d',
        'Light rain and snow': '13d',
        'Shower sleet': '13d',
        'Light shower sleet': '13d',
        'Sleet': '13d',
        'Heavy snow': '13d',
        'Snow': '13',
        'light snow': '13d',
        'ragged shower rain': '09d',
        'heavy intensity shower rain': '09d',
        'shower rain': '09d',
        'light intensity shower rain': '09d',
        'freezing rain': '13d',
        'extreme rain': '10d',
        'very heavy rain': '10d',
        'heavy intensity rain': '10d',
        'moderate rain': '10d',
        'light rain': '10d',
        'shower drizzle': '09d',
        'heavy shower rain and drizzle': '09d',
        'shower rain and drizzle': '09d',
        'heavy intensity drizzle rain': '09d',
        'drizzle rain': '09d',
        'light intensity drizzle rain': '09d',
        'heavy intensity drizzle': '09d',
        'drizzle': '09d',
        'light intensity drizzle': '09d',
        'thunderstorm with heavy drizzle': '11d',
        'thunderstorm with drizzle': '11d',
        'thunderstorm with light drizzle': '11d',
        'ragged thunderstorm': '11d',
        'heavy thunderstorm': '11d',
        'thunderstorm': '11d',
        'light thunderstorm': '11d',
        'thunderstorm with heavy rain': '11d',
        'thunderstorm with rain': '11d',
        'thunderstorm with light rain': '11d'
    }

    const iconURL = "http://openweathermap.org/img/w/" + iconDict[text] + '.png';
    return (
        <div className="item ">
            <span>
                <img src={iconURL} />
            </span>
            <span> {text} </span>
            <div className="item-footer">
                <small>
                    {date}
                </small>
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => handleDeleteItem(id)} />
            </div>
        </div>
    )
}

export default Item;