import locationMarker from '../icons/location_marker.svg';
import '../styles/TravelCard.css';
import '../styles/general.css';



export default function TravelCard(props) {
    return (
        <>
            <CardInfo {...props}/>
        </>
    );
}

function CardInfo(props) {
    let dateString = '';
    if (!props.from) {
        dateString = 'Future plan';
    } else if (!props.to) {
        dateString = 'Current';
    } else {
        dateString = getNiceDate(props.from) + ' - ' + getNiceDate(props.to);
    }

    let location = props.location.toUpperCase()

    return (
        <div className='CardInfo__container'>
            <div className='CardInfo__left'>
                <img src={require(`../images/${props.img}`)} alt='' className='CardInfo__img'></img>
            </div>

            <div className='CardInfo__right'>
                <div className='CardInfo__locationInfo'>
                    <img src={locationMarker} alt='' className='CardInfo__locationMarker'></img>
                    <p className='CardInfo__location'>{location}</p>
                    <a href={`https://www.google.com/maps/search/${location}`} className='CardInfo__link'>View on Google Maps</a>
                </div>
                <h2 className='CardInfo__title'>{props.title}</h2>
                <p className='CardInfo__dateRange'><strong>{dateString}</strong></p>
                <p className='CardInfo__description'>{props.description}</p>
            </div>
        </div>
    );
}

function getNiceDate(date) {

    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${day} ${month}, ${year}`;
}