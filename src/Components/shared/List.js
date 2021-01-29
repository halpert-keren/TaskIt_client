import React from 'react';
import './List.css'
import ListItem from "./ListItem";

const List = (props) => {

    const eachItem = (item) => {
        return (
            <ListItem checkboxes={props.checkboxes} checkboxeToggle={props.checkboxToggle} key={item._id} item={item} itemTitle={props.titleList[item._id]} pathName={props.pathName}>
                {props.children}
            </ListItem>
        )
    }

    return (
        <div className={'list'}>
            {props.dataList.map(eachItem)}
        </div>
    )
}

export default List