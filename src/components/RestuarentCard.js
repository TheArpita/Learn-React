import {commonUrl} from "../constants";

const RestuarentCard = (props) => (
    <div className="restuarentCard">
        <img alt=":(" src={commonUrl+props?.cardDetails?.cloudinaryImageId}/>
        <h2>{props?.cardDetails?.name}</h2>
        <h4>{props?.cardDetails?.cuisines?.join(",")}</h4>
        <h3>Rating {props?.cardDetails?.avgRating}</h3>
        <div className="restuarentInfo">
            <h3>{props?.cardDetails?.totalRatingsString}</h3>
            <h3>{props?.cardDetails?.slaString}</h3>
            <h3>{props?.cardDetails?.costForTwoString}</h3>
        </div>
    </div>
);

export default RestuarentCard;