import {useState} from "react";

type PropsType = {
    defaultValue: boolean
    onClickHandler: (value: boolean) => void
}
export const UncontrolledOnOff = (props: PropsType) => {

    const [on, setSwitch] = useState<boolean>(false);

    const onStyle = {
        display: 'inline-block',
        alignContent: 'center',
        border: 'solid 2px black',
        width: '100px',
        height: '35px',
        backgroundColor: on ? 'green' : '',
    }
    const offStyle = {
        display: 'inline-block',
        alignContent: 'center',
        border: 'solid 2px black',
        width: '100px',
        height: '35px',
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
        props.onClickHandler(true)
    }

    const switchOffHandler = () => {
        setSwitch(false)
        props.onClickHandler(false)
    }

    return (
        <div style={{display: "flex", flexFlow: 'row', paddingTop: '25px', gap: '1px'}}>
            <div style={onStyle} onClick={switchOnHandler}>On</div>
            <div style={offStyle} onClick={switchOffHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
