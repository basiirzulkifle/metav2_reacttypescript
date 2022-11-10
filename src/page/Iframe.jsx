import React from 'react'
import ResponsiveDrawer from '../component/Drawer'

const Iframe = ({ url }) => {
    return (
        <>
            {/* Basiir comment kejap 221110 */}
            {/* <ResponsiveDrawer /> */}
            <iframe
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    border: '0px',
                    backgroundColor: 'black',
                }}
                src={url}
            />
        </>
    )
}

export default Iframe
