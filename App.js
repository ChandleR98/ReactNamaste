  import React from "react";
  import ReactDOM from "react-dom/client";

  // const newEle=React.createElement("div",{},[React.createElement("h1",{id:'heading',key:'1'},"hello"),React.createElement("h2",{key:'2'},"world")]);
  const Header=()=>{
return(<div className="header">
<img className="logo" alt='logo' src='https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg?semt=ais_hybrid&w=740&q=80'/>
<ul className="navBar">
  <li>Home</li>
  <li>Contact Us</li>
  <li>Help</li>
  <li>Cart</li>

</ul>
</div>)
  } 
  const resObj=[
{
info: {
id: "1003414",
name: "Pizza Hut",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/e109ae70-80ca-4f7d-b2a6-2d60706a72b9_1003414.JPG",
locality: "Chhindwara",
areaName: "Chhindwara City",
costForTwo: "₹350 for two",
cuisines: [
"Pizzas"
],
avgRating: 4.3,
parentId: "721",
avgRatingString: "4.3",
totalRatingsString: "258",
sla: {
deliveryTime: 50,
lastMileTravel: 14.1,
serviceability: "SERVICEABLE",
slaString: "45-50 mins",
lastMileTravelString: "14.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-03-23 23:00:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-15ea86fb-3e4f-4ba1-a3d9-0bcd6d09759c"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/pizza-hut-chhindwara-city-rest1003414",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
info: {
id: "385824",
name: "The Belgian Waffle Co.",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
locality: "Sinchai Colony",
areaName: "Mohan Nagar",
costForTwo: "₹200 for two",
cuisines: [
"Waffle",
"Desserts",
"Ice Cream",
"Beverages"
],
avgRating: 4.5,
veg: true,
parentId: "2233",
avgRatingString: "4.5",
totalRatingsString: "372",
sla: {
deliveryTime: 48,
lastMileTravel: 13.4,
serviceability: "SERVICEABLE",
slaString: "45-50 mins",
lastMileTravelString: "13.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-03-23 14:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-15ea86fb-3e4f-4ba1-a3d9-0bcd6d09759c"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
info: {
id: "151649",
name: "Hotel Sai Nath & Sai Restaurant",
cloudinaryImageId: "vkhcohhmqfczycw9vsar",
locality: "railway station",
areaName: "Chhindwara Locality",
costForTwo: "₹200 for two",
cuisines: [
"North Indian",
"South Indian",
"Chinese",
"Beverages",
"Fast Food",
"Desserts"
],
avgRating: 4.2,
veg: true,
parentId: "101802",
avgRatingString: "4.2",
totalRatingsString: "1.1K+",
sla: {
deliveryTime: 43,
lastMileTravel: 11.3,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "11.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-03-23 22:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹175 OFF",
subHeader: "ABOVE ₹699",
discountTag: "FLAT DEAL"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-15ea86fb-3e4f-4ba1-a3d9-0bcd6d09759c"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
info: {
id: "150602",
name: "Raimens Cafe 79",
cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
locality: "Teacher's Colony",
areaName: "VIP Road",
costForTwo: "₹250 for two",
cuisines: [
"Bakery",
"Pizzas",
"Snacks",
"Beverages"
],
avgRating: 4.4,
veg: true,
parentId: "164782",
avgRatingString: "4.4",
totalRatingsString: "5.0K+",
sla: {
deliveryTime: 50,
lastMileTravel: 14.4,
serviceability: "SERVICEABLE",
slaString: "45-50 mins",
lastMileTravelString: "14.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-03-23 22:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Desserts.png",
description: "Delivery!"
},
{
imageId: "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
description: "Delivery!"
},
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Desserts.png"
}
},
{
attributes: {
description: "Delivery!",
imageId: "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png"
}
},
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹59"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-15ea86fb-3e4f-4ba1-a3d9-0bcd6d09759c"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/raimens-cafe-79-teachers-colony-vip-road-rest150602",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
info: {
id: "912754",
name: "Urban Cafe",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
locality: "SOUTH CIVIL LINE",
areaName: "Chhindwara City",
costForTwo: "₹300 for two",
cuisines: [
"Snacks",
"Pizzas",
"Pastas",
"Fast Food",
"Burgers",
"Cafe"
],
avgRating: 4.1,
veg: true,
parentId: "1330",
avgRatingString: "4.1",
totalRatingsString: "21",
sla: {
deliveryTime: 54,
lastMileTravel: 13.9,
serviceability: "SERVICEABLE",
slaString: "50-60 mins",
lastMileTravelString: "13.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-03-23 23:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-15ea86fb-3e4f-4ba1-a3d9-0bcd6d09759c"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/urban-cafe-south-civil-line-chhindwara-city-rest912754",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
info: {
id: "1309927",
name: "Swad Ghar Ka",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/14/6e94c6b3-b3fa-42e9-8c82-a5ed6606b338_1309927.jpg",
locality: "Chhindwara City",
areaName: "Chhindwara City",
costForTwo: "₹200 for two",
cuisines: [
"Thalis",
"Indian",
"Snacks",
"Home Food",
"Healthy Food",
"Navratri Special"
],
avgRating: 4,
veg: true,
parentId: "198517",
avgRatingString: "4.0",
totalRatingsString: "3",
sla: {
deliveryTime: 62,
lastMileTravel: 14.2,
serviceability: "SERVICEABLE",
slaString: "60-70 mins",
lastMileTravelString: "14.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-03-23 23:00:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
isNewlyOnboarded: true,
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-15ea86fb-3e4f-4ba1-a3d9-0bcd6d09759c"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/swad-ghar-ka-chhindwara-city-rest1309927",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
info: {
id: "151661",
name: "Bharat Mewad Ice Cream",
cloudinaryImageId: "auczcmkdvvxzt2mswvcc",
locality: "Teacher's Colony",
areaName: "Chhindwara Locality",
costForTwo: "₹250 for two",
cuisines: [
"Ice Cream",
"Desserts",
"Beverages"
],
avgRating: 4.2,
veg: true,
parentId: "44378",
avgRatingString: "4.2",
totalRatingsString: "505",
sla: {
deliveryTime: 42,
lastMileTravel: 13.2,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "13.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-03-23 23:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹41"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-15ea86fb-3e4f-4ba1-a3d9-0bcd6d09759c"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/bharat-mewad-ice-cream-teachers-colony-chhindwara-locality-rest151661",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
info: {
id: "151518",
name: "Bakery World",
cloudinaryImageId: "mt2aggiscfl3yviatwng",
locality: "Parasia Road",
areaName: "Parasia Road",
costForTwo: "₹250 for two",
cuisines: [
"Bakery",
"Ice Cream",
"Snacks",
"Beverages"
],
avgRating: 4.3,
veg: true,
parentId: "40363",
avgRatingString: "4.3",
totalRatingsString: "323",
sla: {
deliveryTime: 50,
lastMileTravel: 14.1,
serviceability: "SERVICEABLE",
slaString: "50-60 mins",
lastMileTravelString: "14.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-03-23 22:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-15ea86fb-3e4f-4ba1-a3d9-0bcd6d09759c"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
]



  const ResCard=({resData})=>{
    const info=resData?.info;
    return(<div className="resCard">
   <img className="logo" alt='logo' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info?.cloudinaryImageId}`}/>
    <h3>{info?.name}</h3>
    <h4>{info?.avgRating} . {info?.deliveryTime} Min</h4>
    <h4>{info?.cuisines?.join(",")}</h4>
    <h4>{info?.locality}</h4>
    </div>)
  }
  const AppBody=()=>{
return(<div className="bodyContainer">
 {resObj?.map((item)=>{
  return (<ResCard key={item?.info?.id} resData={item}/>)
 })}

</div>)
  }
  const AppLayout=()=>{
    return (<div>
    <Header/>
    <AppBody/>
    </div>)
   }
   
  
  const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(JSXheading);
    root.render(<AppLayout/>);
