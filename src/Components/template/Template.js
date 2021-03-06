import React from 'react';
import './Template.css';
import {ButtonBase} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

const Template = (props) => {
    let history = useHistory()
    const [cookies] = useCookies(['user'])

    const addTaskFromTemplate = () => {
        const body = {userID: cookies.user.googleID}
        fetch(`https://task--it.herokuapp.com/api/tasks/${props.item.templateID}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'user': cookies.user.googleID
            },
            body: JSON.stringify(body),
        })
            .then(response => history.goBack())
    }

    const eachSubTask = (item, i) => {
        return <div key={i} className="subtask-name">{item.name}</div>
    }

    return (
        <div className="template-card">
            <div className="template-card-title">
                <p>{props.item.name}</p>
                <ButtonBase centerRipple={true} onClick={addTaskFromTemplate}><p style={{width: '180px'}}>Choose</p>
                </ButtonBase>
            </div>
            <div className="template-card-category">
                {props.item.category}
            </div>
            <div className="template-card-subtasks">
                {props.item.subTask.map(eachSubTask)}
            </div>
        </div>
    )
}

export default Template;