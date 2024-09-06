import {useState} from "react";

type PropsType = {
    // on: boolean
}
export const OnOff = (props: PropsType) => {

    // const on = true;

    const [on, setSwitch] = useState<boolean>(false);

    const onStyle = {
        display: 'inline-block',
        alignContent: 'center',
        border: 'solid 2px black',
        width: '100px',
        height: '35px',
        // backgroundColor: props.on ? 'green' : '',
        backgroundColor: on ? 'green' : '',
    }
    const offStyle = {
        display: 'inline-block',
        alignContent: 'center',
        border: 'solid 2px black',
        width: '100px',
        height: '35px',
        // backgroundColor: props.on ? '' : 'red',
        backgroundColor: on ? '' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '35px',
        height: '35px',
        border: 'solid 2px black',
        borderRadius: '15px',
        backgroundColor: on ? 'green' : 'red'
    }

    const switchOnHandler = () => {
        setSwitch(true)
    }

    const switchOffHandler = () => {
        setSwitch(false)
    }

    return (
        <div style={{display: "flex", flexFlow: 'row', paddingTop: '25px', gap: '1px'}}>
            <div style={onStyle} onClick={switchOnHandler}>On</div>
            <div style={offStyle} onClick={switchOffHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
