import React, { useState, useEffect } from 'react';
import axios from "axios";

import Cards from './Cards';
import "./Styles.css";





function MyCards() {
    const datas = [
        {
            image: "https://upload.wikimedia.org/wikipedia/en/7/7a/ST3LambertPoster.png",
            title: "STRANGER THINGS",
            watch: "Watch online",

            download: "Download"
        },
        {
            image: "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
            title: "MONEY HEIST",
            watch: "Watch online",

            download: "Download"
        },
        {
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrq6cRK12zrAuOlcUjC7auIPLMdvUJSlS0IzoYkaGF5mOYFim1",
            title: "THE WITCHER",
            watch: "Watch online",

            download: "Download"
        },
        {
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS15WXzJnh5FKZcjV7jwxj57HtPiu-mJyMBPJL7E2rPEFbLRPjA",
            title: "DARK",
            watch: "Watch online",

            download: "Download"
        },
        {
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTR5zsNvamugg7Y1bXSFY3hLK-TGMlpW3yPte6SH2wv5eF5VXGg",
            title: "KINGDOM",
            watch: "Watch online",

            download: "Download"
        },
        {
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjlU10XSzoxnmWAzJhadQvxYYEew49ogNqnDalCumIGid433o7",
            title: "HELLBOUND",
            watch: "Watch online",

            download: "Download"
        },
        {
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJkSyW_9IM8LqZFUJo1GkiBWWNZIYbL740_gEOhykLty70IwE3",
            title: "SWEET HOME",
            watch: "Watch online",

            download: "Download"
        },
        {
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhKVS258S6tCyAJ1HrGghExBPA39x07x-NfpDNg3ojvDA0-TTJ",
            title: "CURSED",
            watch: "Watch online",

            download: "Download"
        }, {
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTY25rJZiXv9YNl-BkbfXOVYEbaSKq6Jrb4h6sJKfDEqgTM4k9m",
            title: "VAMPIRE DIARIES",
            watch: "Watch online",

            download: "Download"
        }, {
            image: "https://i0.wp.com/naijawide.com/wp-content/uploads/2021/09/bvoKdW8zNrx.jpg?fit=720%2C1080&ssl=1",
            title: "SQUID GAME",
            watch: "Watch online",

            download: "Download"
        }, {
            image: "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
            title: "LUCIFER",
            watch: "Watch online",

            download: "Download"
        }, {
            image: "https://m.media-amazon.com/images/M/MV5BYWIwYTg2Y2YtYzEwNy00Y2Y0LWFkZjktNjBlMWZhNDY2NGE0XkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_FMjpg_UX1000_.jpg",
            title: "VINCENZO",
            watch: "Watch online",

            download: "Download"
        },

    ]

    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman').then(
            (response) => {
                console.log(response.data.Search)
                setState(response.data.Search)
            })  .catch(() => {alert('API FAILED')});
    },[])
    const filterData = datas.filter((e) => {
        if (search === '') {
            return e
        } else if (e.title.toLowerCase().includes(search.toLowerCase())) {
            return e
        }
    });
    const filterDatas = state.filter((e) => {
        if (search === '') {
            return e
        } else if (e.Title.toLowerCase().includes(search.toLowerCase())) {
            return e
        }
    });
   
    return (
        <div className='MyCards'>
            <h2 className="heading">My Series</h2>
            <h2 className="heading">My Series list</h2>
            <input onChange={handleChange} className='search' type="search" name="search" placeholder="Search" />
            <div className='container'>
                {filterData.map((e) => {
                    return (
                        <Cards image={e.image} title={e.title} watch={e.watch} download={e.download} />
                    );
                })}
            </div>
            <h2 className="heading">My Movies</h2>
            <div className='container'>
                {filterDatas.map(item => {
                    return <div className='Cards-container'>
                        <h3 className='title'> {item.Title} </h3>
                        <img className='image' src={item.Poster} alt='' />
                    </div>
                })}
            </div>
        </div>
    )
}

export default MyCards;

