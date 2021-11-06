import React from 'react';
import _ from 'lodash';

export default function JoinDemo() {

    let arrayName = ['thao', 'nhi', 'hanh', 'nga'];
    //es6
    const result = arrayName.join('-');

    //Lodash
    const resultLodash = _.join(arrayName, '*');


    const arrPerson = [
        {id:1, name: "thao", age: 10},
        {id:2, name: "nhi", age: 15},
        {id:3, name: "hanh", age: 18},
        {id:4, name: "nga", age: 11},
    ]

    const person = _.find(arrPerson, item => item.id === 2);

    return (
        <div className="container text-center ">
            <h2 className ="text-green-600 font-bold text-3xl">Join Function Javascript</h2>
            <p className ="mt-5 text-red-600">Cách ES6 <span className ="text-yellow-300">{result}</span></p>
            <p className ="mt-5 text-red-600">Cách LODASH  <span className ="text-yellow-300">{resultLodash}</span></p>

            <h4 className ="mt-5 text-blue-600">Infor founded person</h4>
            <p className ="font-bold text-purple-600">Name: {person.name} - Age: {person.age}</p>
        </div>
    )
}
