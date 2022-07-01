import Card from 'react-bootstrap/Card';

import './Presentation.css';

function Presentation() {
    return (
        <Card className="text-black">
            <Card.Img src="https://images10.newegg.com/BizIntell/item/Gift%20Cards/Gift%20Cards%20-%20Restaurants/32-840-004/1.jpg" alt="Avocados, grapes and oranges" />
            <Card.ImgOverlay>
                <Card.Title>Order groceries for delivery or pickup today</Card.Title>
                <Card.Text>
                    Whatever you want from local stores. Brought right to your door.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Presentation;