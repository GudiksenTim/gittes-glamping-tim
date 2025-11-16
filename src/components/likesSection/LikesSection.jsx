import Activity from "../activity/Activity"


const LikesSection = ({activities, toggleLike}) => {

    const likedActivities = activities.filter(act => act.liked)
    
    return likedActivities.map((activity) => (
      <Activity
        activity={activity}
        key={activity._id}
        onToggleLike={() => toggleLike(activity._id)}
      />
    ));

}

export default LikesSection