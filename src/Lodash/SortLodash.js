import React from 'react'
import _ from 'lodash';

export default function SortLodash() {

    const arrStudent = [
        {id:1, name: "thao", age: 10},
        {id:2, name: "nhi", age: 15},
        {id:3, name: "hanh", age: 48},
        {id:4, name: "ngoc", age: 20},
        {id:10, name: "ngoc", age: 43},
        {id:8, name: "ngoc", age: 12},
        {id:14, name: "lan", age: 35},
        {id:6, name: "huong", age: 28}, 
        {id:6, name: "an", age: 7}, 
    ]

    const resultSortByName = _.sortBy(arrStudent, [item => item.name]);
    const resultSortByAge = _.sortBy(arrStudent, [item => item.age]);
    const resultSortByNameThenAge = _.sortBy(arrStudent, ['name', 'age']);
    //nghĩa là nếu tên bị trùng thì sẽ sort theo tuổi


    console.log("resultSortByName", resultSortByName);
    console.log("resultSortByAge", resultSortByAge);
    console.log("resultSortByNameThenAge", resultSortByNameThenAge);

    return (
        <div>
            
        </div>
    )
}
