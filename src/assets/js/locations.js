
const date = new Date();

const isCurrentlyOpen = (date) => {
    const day = date.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
    const hour = date.getHours();
    const minute = date.getMinutes();
    const currentTime = hour + minute / 60;

    if (day === 0) {
        // Sunday
        return false;
    } else if (day >= 1 && day <= 5) {
        // Monday to Friday: 8:00 - 18:00
        
        return currentTime >= 8 && currentTime < 18;
    } else if (day === 6) {
        // Saturday: 8:00 - 17:00
        return currentTime >= 8 && currentTime < 17;
    }
    return false;
};

const isOpen = isCurrentlyOpen(date)

const loactions = [
    {   id: 1,
        name: "Southern Tire Masters | Hampton",
        streetAddress: "550 US-19 #41",
        city: "Hampton",
        state: "GA",
        zipCode: "30228",
        phone: "(470) 878-6044",
        coordinates: {
            lat: 33.41251505485126,
            lng: -84.31427249152073
        },
        isClosest: false,
        distanceInMiles: null,
        isOpen: isOpen,
        shareLink: "https://maps.app.goo.gl/H9ivWMVN9RLRuUCV6"
        
    },
    {
        id: 2,
        name: "Southern Tire Masters | Griffin",
        streetAddress: "536 N Expy",
        city: "Griffin",
        state: "GA",
        zipCode: "30223",
        phone: "(470) 712-8009",
        coordinates: {
            lat: 33.25660525850755,
            lng: -84.28763935352374
        },
        isClosest: false,
        distanceInMiles: null,
        isOpen: isOpen,
        shareLink: "https://maps.app.goo.gl/Mw1bRwzGMY4HpC6Y9"
    }
];

  export default loactions;