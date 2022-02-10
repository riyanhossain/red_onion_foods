import React, { useState } from 'react'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import './FoodContainer.css'

function FoodContainer() {
    const meal=['breakfast','lunch','dinner']
    const [state, setState] = useState('breakfast')
    const handleClick = () => {
        setState('breakfast')

    }
    const handleClick1 = () => {
        setState('lunch')

    }
    const handleClick2 = () => {
        setState('dinner')

    }
    return (
        <div className='FoodContainer'>
            <button className='FCbtn' onClick={() => handleClick()}>Breakfast</button>
            <button className='FCbtn' onClick={() => handleClick1()}>Lunch</button>
            <button className='FCbtn' onClick={() => handleClick2()}>Dinner</button>
            {
                state==='breakfast' && <Breakfast />
            }
            {
                state==='lunch' && <Lunch/>
            }
            {
                state==='dinner' && <Dinner />
            }

        </div>
    )
}

export default FoodContainer;