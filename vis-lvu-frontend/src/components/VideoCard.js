import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { CardHeader, CardBody, CardText } from 'react-bootstrap';
import { StripedTable } from './index';
import './VideoCard.css';

export const VideoCard = ({video}) => {
  return (
    <ListGroup video={video}>
        <div className="videocard">
            <Card className="card">
                <CardHeader>
                <span>{video.uid}</span>
                </CardHeader>
                <CardBody>
                    <div>
                        <div className="embed-responsive embed-responsive-4by3">
                            <iframe className="videoframe" title={video.uid} stypeclass="embed-responsive-item" src={video.url}></iframe>
                        </div>
                    </div>
                    <StripedTable card={video}/>
                </CardBody>
            </Card>
        </div>
    </ListGroup>
  )
}
