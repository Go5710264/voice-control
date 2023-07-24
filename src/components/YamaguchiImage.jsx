import yamaguchi from '../assets/yamaguchi.svg'

const YamaguchiImage = () => {
    return (
        <div className='wrapper-yamaguchi'>
            <img src={yamaguchi} className='yamaguchi-image' />
            <div className='black-hole'></div>
        </div>
    )
}

export default YamaguchiImage;