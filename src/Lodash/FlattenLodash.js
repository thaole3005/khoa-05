import React from 'react'
import _ from 'lodash';


//! dùng để giải nén mảng
export default function FlattenLodash() {

    const arr = [[1,[2,[3,[4]]], 5]];

    const resultFlatten = _.flatten(arr);     //? giải nén 1 cấp
    const resultFlattenDeep = _.flattenDeep(arr);  //? giải nhén nhiều cấp
    

    console.log("resultFlatten", resultFlatten);
    console.log("resultFlattenDeep", resultFlattenDeep);

    return (
        <div>
            
        </div>
    )
}
