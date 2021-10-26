import Image from 'next/image'
import iphone from '../public/iphone.png'

const Jumbotron = () => {
    return (< >
        <div className="background-image">
            <Image src={iphone} alt="ok"/>
        </div>
        <div className="promotional-message">
            <h3>MARKET</h3>
            <h2>iPhone</h2>
            <p>An <strong>exclusive iphones collection</strong> available for everyone.</p>
        </div>
    </>)
}
export default Jumbotron