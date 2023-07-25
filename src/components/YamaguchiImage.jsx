import yamaguchi from '../assets/yamaguchi.svg'

const YamaguchiImage = ({ blackHole, yamaguchi: yamaguchiRef }) => {
    return (
        <>
            <div className='wrapper-yamaguchi'>
                <img src={yamaguchi} className='yamaguchi-image' ref={yamaguchiRef} />
                <div className='black-hole' ref={blackHole}></div>
            </div>
            {/* <div className='black-hole' ref={blackHole}></div> */}
        </>
    )
}

export default YamaguchiImage;