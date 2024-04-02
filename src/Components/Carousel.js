import '../Asserts/Cssfiles/carosel.css'
import photo from '../Asserts/Images/photo.jpg'
import welcome from '../Asserts/Images/welcome.jpg'
function Carousel() {
    return (
        <>
            <div class="carousel">
                <div class="carousel-item"><img src={photo} style ={{ height: "25vh"}} alt="Image 1"/></div>
                <div class="carousel-item"><img src={welcome} style ={{ height: "25vh"}} alt="Image 2"/></div>
                <div class="carousel-item"><img src="" alt="Image 3"/></div>
            </div>
        </>

    )
}
export default Carousel