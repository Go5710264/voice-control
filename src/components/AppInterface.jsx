import appImageMini from '../assets/application-interface-mini.svg'
import appImage from '../assets/application-interface.svg'

const AppInterface = () => {
    return (
        <div className='wrapper-app-image'>
            <img src={document.documentElement.clientWidth > 999 ? appImage : appImageMini} className='app-image'/>
        </div>
    )
}

export default AppInterface;