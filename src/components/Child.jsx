import { useContext, useState } from "react";
import { stateContext } from "../stateReducer";
import { Link } from "react-router-dom"

export default function Child(props) {
    return (
        <h1>Children</h1>
    )
}