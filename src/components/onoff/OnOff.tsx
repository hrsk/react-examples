type PropsType = {
    on: boolean
    setSwitch: (on: boolean) => void
}

export const OnOff = (props: PropsType) => {

    const onStyle = {
        display: 'inline-block',
        alignContent: 'center',
        border: 'solid 2px black',
        width: '100px',
        height: '35px',
        backgroundColor: props.on ? 'green' : '',
    }
    const offStyle = {
        display: 'inline-block',
        alignContent: 'center',
        border: 'solid 2px black',
        width: '100px',
        height: '35px',
        backgroundColor: props.on ? '' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '35px',
        height: '35px',
        border: 'solid 2px black',
        borderRadius: '15px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const switchOnHandler = () => {
        props.setSwitch(true)
    }

    const switchOffHandler = () => {
        props.setSwitch(false)
    }

    return (
        <div style={{display: "flex", flexFlow: 'row', paddingTop: '25px', gap: '1px'}}>
            <div style={onStyle} onClick={switchOnHandler}>On</div>
            <div style={offStyle} onClick={switchOffHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
