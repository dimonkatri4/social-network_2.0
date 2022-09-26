import React from 'react';
import style from './dialogs.module.scss'

const Dialogs = () => {
    return (
        <div>
            <div className={`${style.caption} caption`}>
                <h3 className="title">All Messages</h3>
            </div>
            <div className={style.dialogsItem}>
                dialogsElement
            </div>
            <div className={style.messages}>
                nameDialogs
                messagesElement
{/*                <Route path='/dialog/:number' render={() => <InputMessageContainer/>}/>
                <Route exact path="/dialog" render={() => <SelectDialog/>}/>*/}
            </div>
        </div>
    );
};

export default Dialogs;