import React, { useState, useEffect } from 'react';

function Months() {
    const [holidays, setHolidays] = useState()
    const [publicHolidays, setPublicHolidays] = useState([])

    const months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"]

    const getHolidays = async (URL) => {
        let response = await fetch(URL)
        let json = await response.json()
        setHolidays(json)
    }

    useEffect(() => {
        getHolidays("https://date.nager.at/api/v2/publicholidays/2022/SE")
    }, [])


    const handleClick = (index) => {
        const slicedIndex = ('0' + (index + 1)).slice(-2)
        console.log(slicedIndex)

        var result = holidays.filter(function (el) {
            return el.date.slice(5, 7) == slicedIndex
        })

        setPublicHolidays(result)


    }
    useEffect(() => {
        setPublicHolidays(publicHolidays)
        // console.log(publicHolidays)
    })


    return (
        <div className="wrapper">
            <div className='months'>
                <h3>Months</h3>
                <div className='months-container'>
                    {months.map((month, index) => (
                        <button className='card' onClick={() => handleClick(index)}>
                            <p>{month}</p>
                        </button>
                    ))
                    }
                </div >

            </div >
            {publicHolidays && (publicHolidays.map((holiday) => (
                <div className='holidays'>
                    <p>{holiday.date}</p>
                    <p>{holiday.localName}</p>
                </div>
            )))
            }
        </div>
    )
}

export default Months;
