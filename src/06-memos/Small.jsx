//memo es una fun que le dice a react que memorize el componente
import React from 'react';
//memo recibe como argumento todo el componente entre ()
// esta acción hace que este componente no se redibuje
export const Small = React.memo(({ value }) => {

    console.log('me volví a generar :(')

    return (
        <small>{ value }</small>
    )
})
