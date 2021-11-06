import React from 'react';
import _ from 'lodash';

//  _.fill dùng để replace phần tử trong mảng
export default function FillLodash() {
    const arrStudent = [
        {id:1, name: "thao", age: 10},
        {id:2, name: "nhi", age: 15},
        {id:3, name: "hanh", age: 18},
        {id:4, name: "ngoc", age: 20},
        {id:5, name: "lan", age: 30},
        {id:6, name: "huong", age: 28},
        
    ]

    _.fill(arrStudent, {id:2, name: "quỳnh nhi", age: 22},1, 4);
    console.log("arrStudent", arrStudent)

    return (
        <div>
            
        </div>
    )
}
