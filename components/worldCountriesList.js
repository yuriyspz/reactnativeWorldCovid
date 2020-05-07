import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorldStatus} from "../actions";
import {Text, View} from 'react-native';

export default function WorldCountiesList() {
    const content = useSelector(state => state.WorldInfo); //this hook gives us redux store state
    const dispatch = useDispatch(); //this hook gives us dispatch method

    useEffect(() => {
        dispatch(getWorldStatus());
    }, []);
    return (

        <View>
            <Text>Global stats</Text>
            <Text> {content.cases}</Text>
            <Text> {content.deaths}</Text>
        </View>
    )
}
