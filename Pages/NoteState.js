import React from "react";
import NoteContext from "./Notecontext";
const NoteState =(props)=>{
    const state = {
        "user":"nitin"
    }
    return (
        <NoteContext.Provider value={state} >
        {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;