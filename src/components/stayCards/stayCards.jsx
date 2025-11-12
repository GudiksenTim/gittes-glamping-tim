import StayCard from "../StayCard/StayCard"



const StayCards = () => {

    const stays = [
      {
        title: "Weekendtur",
        people: "2",
        price: "4200",
        imgSrc: "../../assets/stays/weekend.jpg",
      },
      {
        title: "Familiepakken",
        people: "3-6",
        price: "6100",
        imgSrc: "../../assets/stays/familiepakken.jpg",
      },
      {
        title: "Romantisk getaway",
        people: "2",
        price: "3500",
        imgSrc: "../../assets/stays/tentlights.jpg",
      },
    ];
    

    return (

        stays.map((stay, index) => {
            return (
                <StayCard stay={stay} key={index} />
            )

        })

    )

}

export default StayCards