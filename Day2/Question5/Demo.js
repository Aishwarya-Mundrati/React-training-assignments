import './Demo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Demo() {
    const getStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                // Full star
                stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
            } else if (i === Math.floor(rating) && rating % 1 !== 0) {
                // Half star
                stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} />);
            } else {
                // Empty star
                stars.push(<FontAwesomeIcon icon={farStar} key={i} />);
            }
        }
        return stars;
    };
    let doctorsArray = [
        { doctorId: 1, doctorName: "George Washington", designation: "Head Cardiologist", rateMeter: 3.5, avatar: "person1.jpg" },
        { doctorId: 2, doctorName: "Ameya Parker", designation: "Head Radiologist", rateMeter: 5, avatar: "person2.jpg" },
        { doctorId: 3, doctorName: "Darren Buffet", designation: "Head Gynaecologist", rateMeter: 4, avatar: "person3.jpg" },
        { doctorId: 4, doctorName: "Ryan Gosling", designation: "Head Gastraentologist", rateMeter: 3, avatar: "person4.jpg" },
        { doctorId: 5, doctorName: "Tim Wood", designation: "Veterarian", rateMeter: 3, avatar: "person5.jpg" },
        { doctorId: 6, doctorName: "Raddison May", designation: "Gastraentologist", rateMeter: 3, avatar: "person4.jpg" },
        { doctorId: 7, doctorName: "May Joe", designation: "Veterarian", rateMeter: 3, avatar: "person3.jpg" },
        { doctorId: 8, doctorName: "Tara Perrit", designation: "Gastraentologist", rateMeter: 2, avatar: "person4.jpg" },
    ];
    const ratingsArray = [2];
    let resultsArray = doctorsArray.map((item, index) => {
        return (
            <div className='card' key={index}>
                <br/> 
                <img src={item.avatar} alt="avatar" /> <br />
                <span className="name">{item.doctorName}</span>  <br />
                <span className="designation">{item.designation}</span> 
                <br/> <br/> 
                <div className="stars">
                    {getStars(item.rateMeter)}
                </div>
                <button className="button"> BOOK APPOINTMENT  </button>
            </div>
        );
    });
    return (
        <>
            <div className="a1">
                {resultsArray}
            </div>


        </>
    );
}

export default Demo;


