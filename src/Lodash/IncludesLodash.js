import React from 'react';
import _ from 'lodash';


export default function IncludesLodash() {
    
    //!kiểm tra 1 phần tử có bên trong mnangr hay khônh
    const arrName =['thao', 'hanh', 'nga'];
    console.log("result1", _.includes(arrName, 'nga'))  //=> true
    console.log("result2", _.includes(arrName, 'nhi'))  //=> false
    


    //!check các value của object
    const student ={id:1, name: "thao", age: 10};
    console.log("checkStudent id", _.includes(student, 1)) //=>true
    console.log("checkStudent name1", _.includes(student, 'thao')) //=>true
    console.log("checkStudent name2", _.includes(student, 'nhi')) //=>false
    console.log("checkStudent age1", _.includes(student, 10)) //=>true
    console.log("checkStudent age2", _.includes(student, 20)) //=>false


    //!kiểm tra 1 chuỗi có trong 1 chuỗi hay không
    const fruit = 'lemon';
    console.log("check fuitName1", _.includes(fruit, 'mon'))  //=> true
    console.log("check fuitName2", _.includes(fruit, 'von'))  //=> false

    return (
        <div>
            
        </div>
    )
}
