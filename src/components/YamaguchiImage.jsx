import PropTypes from 'prop-types';
import yamaguchiMini from '../assets/yamaguchiMini.svg'
import yamaguchi from '../assets/yamaguchi.svg'

const YamaguchiImage = ({ blackHole, yamaguchi: yamaguchiRef }) => {
    return (
        <div className='wrapper-black-hole'>
            <div className='wrapper-yamaguchi'>
                <img src={document.documentElement.clientWidth > 999 ? yamaguchi : yamaguchiMini} className='yamaguchi-image' ref={yamaguchiRef} />
            </div>
            <div className='black-hole' ref={blackHole}></div>
        </div>
    )
}

YamaguchiImage.propTypes = {
    blackHole: PropTypes.object,
    yamaguchi: PropTypes.object
}

export default YamaguchiImage;