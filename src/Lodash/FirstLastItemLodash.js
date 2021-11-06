import React from 'react'
import _ from 'lodash';

export default function FirstLastItemLodash() {

    
    const arrStudent = [
        {id:1, name: "thao", age: 10},
        {id:2, name: "nhi", age: 15},
        {id:3, name: "hanh", age: 18},
        {id:4, name: "nga", age: 11},
    ]

    const firstStudent =  _.first(arrStudent);
    const lastStudent =  _.last(arrStudent);



    const arrFruit = [['01', 'lemon'], ['02', 'orange'], ['03', 'apple']];
    const [idFruit1, nameFruit1] = _.first(arrFruit);
    const [idFruit2, nameFruit2] = _.last(arrFruit);
    

    return (
        <div>
            <div>
            firstStudent: {firstStudent.name }-{firstStudent.age}
            </div>
            <div>
            lastStudent: {lastStudent.name }-{lastStudent.age}

            </div>
            <div>First fruit: {nameFruit1}</div>
            <div>Last fruit: {nameFruit2}</div>
        </div>
    )
}
