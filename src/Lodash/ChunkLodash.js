import React from 'react';
import _ from 'lodash';



export default function ChunkLodash() {

    const arrayPerson = ['id', 1, 'name', 'thao', 'class', 'BCDN01', 'age']
    const result = _.chunk(arrayPerson,2);
    console.log("result", result)
    return (
        <div>
            
        </div>
    )
}
