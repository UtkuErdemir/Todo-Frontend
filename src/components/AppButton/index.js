import React from 'react'
import './AppButton.css';

function AppButton({title,onPress}) {
    const onPressFn = onPress ? (e)=>{e.preventDefault(); onPress()} : ()=>{}
    const shownTitle = title || "Click"
    return (
        <button onClick={onPressFn}>{shownTitle}</button>
    )
}

export default AppButton
