import {useParams} from "react-router";
import ProfileContainerClass from "./ProfileContainerClass";

const ProfileApiContainer = ()=>{
    const { profileId } = useParams();
    return (
        <ProfileContainerClass profileId={profileId}/>
    )
};

export default ProfileApiContainer;