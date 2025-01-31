import './CssPages/InfoWindow.css';
import { Button } from 'react-bootstrap';

const InfoWindow = (props) => {
    const { name, rating, population, quality } = props;

    return (
        <div className="infoWindowStyle">
            <div className='Header'></div>
            <Button className="close-btn" onClick={() => props.setTrigger(false)}>X</Button>
            <div className='Top-info'>
                <div className='Park-Info'>
                    <h3>Dogg Park</h3>
                    <div className='btn-fav'>
                        <Button className='btn btn-star'>*</Button>
                    </div>
                    <p>Rating: 4/5</p>
                    <h6>Address:</h6>
                </div>
            </div>
            <div className='mid-info'>
                <h5>Population: High</h5>
                <h5>Quality: Poor</h5>
                <Button className='btn btn-feedback'>Give FeedBack</Button>
            </div>
            <div className='input-info'>
                <h5>User Rating</h5>
                <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
                <br></br>
                <div className='quality-box'>
                    <h5>Park Quality Rating</h5>
                    <select name="quality-items" id="quality-items">
                        <option value="Poor">Poor</option>
                        <option value="Average">Average</option>
                        <option value="Great">Great</option>
                    </select>
                </div>
                <br></br>
                <Button className='btn btn-update'>Update</Button>
            </div>
            <div className='Footer'></div>
        </div>
    );
};

export default InfoWindow;