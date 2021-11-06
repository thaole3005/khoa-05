import React from 'react'
import _ from 'lodash';

export default function CompareArrayObject() {

    const array1 = [1,2,3];
    const array2 = [1,2,3];

    const result = _.isEqual(array1, array2);
    console.log("result", result); //==> true //!kiểm tra các phần tử giống nhau, và phải giống nhau về thú tự


    const arrayA = [1,2,3];
    const arrayB = [3,1,2];
    const result2 = _.isEqual(arrayA.sort(), arrayB.sort());   //!kiểm tra các phần tử giống nhau, k quan tâm thứ tự
    console.log("result2", result2);


    const object1 = {color: 'red'};
    const object2 = {color: 'red'};
    const result3 = _.isEqual(object1, object2);
    console.log("result3", result3); //==> true


    //* so sánh 2 mảng object
    const arrObject1 = [{id: 1, name: 'huy'}, {id: 2, name: 'thao'}];
    const arrObject2 = [{id: 1, name: 'nam'}, {id: 2, name: 'thao'}];
    const result4 = _.differenceWith(arrObject1, arrObject2, _.isEqual);    //? => trả về mảng chứa object khác nhau
    console.log("result4", result4);

    if(result4.length === 0) {
        alert("2 object giống nhau");
    } else {
        alert("2 object khác nhau");
    }

    return (
        <div>
            
        </div>
    )
}
