import React from 'react';
import _ from 'lodash';

export default function UniqLodash() {
    
    //!Loại bỏ các phần tử giống nhau trong mảng(đối vs kiểu dữ liệu nguyên thủy)
    const arrNum = [1,2,3,3,3,3,4,5,6,7,8];
    console.log("new arrNum", _.uniq(arrNum));

    const arrName =['thao', 'hanh', 'hanh', 'hanh', 'hanh', 'nga', 'nhi'];
    console.log("new arrName", _.uniq(arrName));

    const arrStudent = [
        {id:1, name: "thao", age: 10},
        {id:2, name: "nhi", age: 15},
        {id:3, name: "hanh", age: 48},
        {id:10, name: "ngoc", age: 20},
        {id:9, name: "nhi", age: 64},
        {id:10, name: "lan", age: 27},
        {id:5, name: "nhi", age: 43},
        {id:7, name: "nhi", age: 29},
        {id:8, name: "chi", age: 12},
      
    ]

    //loại bỏ những phần tử có id trùng nhau
    console.log("new arrStudent by id", _.uniqBy(arrStudent, 'id'))

    //loại bỏ những phần tử có id trùng nhau
    console.log("new arrStudent by name", _.uniqBy(arrStudent, 'name'))


    return (
        <div>
            
        </div>
    )
}
