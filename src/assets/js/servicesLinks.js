import tirePurchaseImg from '../img/serviceImages/tirePurchaseService.jpeg'
import wheelPurchaseImg from '../img/serviceImages/wheelPurchaseService.jpeg'
import tireInstallationImg from '../img/serviceImages/tireInstallationService.jpeg'
import tireBalanceImg from '../img/serviceImages/tireBalanceService.jpeg'
import tireRepairsImg from '../img/serviceImages/tireRepairService.jpeg'
import tireRotationImg from '../img/serviceImages/tireRotationService.jpeg'
import tpmsImg from '../img/serviceImages/tpmsService.jpeg'
import wheelAlignmentImg from '../img/serviceImages/wheelAlignmentService.jpeg'
import suspensionCheckImg from '../img/serviceImages/suspensionCheckService.jpeg'
import brakeCheckImg from '../img/serviceImages/brakeCheckService.jpeg'
import liftKitImg from '../img/serviceImages/liftKitSuspension.jpeg'
import oilChangeImg from '../img/serviceImages/oilChangesService.jpeg'



const tireServiceLinks = [
    { id : 1,
      paraName: "shop-tires", 
      name: 'Tire Purchase', 
      url: "/shop-tires", 
      description: "We offer competitive pricing on new and used tires with a wide range of sizes, brands, and prices.", 
      img: tirePurchaseImg,
      shortDescription: "Shop new or used tires from trusted brands to fit any budget or road condition. From all-season to off-road, we help you find the right fit for your car and driving habits. Competitive pricing and expert advice make tire shopping simple and reliable.", 
      longDescription:"Our tire purchase service offers an extensive selection of new and used tires from trusted brands to suit every budget and driving condition. Whether you need performance tires, all-season, winter, or off-road options, our team is here to help you find the perfect match. We provide expert guidance based on your vehicle’s specifications and driving habits, and we ensure each tire is competitively priced. From economy models to high-end brands, we make tire shopping easy, reliable, and cost-effective.",
      faqs: [
        {
          question: "Do you sell both new and used tires?",
          answer: "Yes, we offer both options to suit your budget and driving needs."},
        {
          question: "Can I buy tires online through your site?",
          answer: "Yes, you can browse and reserve tires online, then schedule installation."
        },
        {
          question: "How do I know which tire size fits my vehicle?",
          answer: "Our team or online tire finder can help you find the correct size based on your vehicle’s make and model"
        },
        {
          question: "Do your tires come with a warranty?",
          answer: "Yes, most new tires come with a manufacturer warranty; ask for details on specific brands"
        }
      ],
    },
    { id : 2 ,
      paraName: "wheel-purchase",
      name: 'Wheel Purchase',
      url: "/services/wheel-purchase", 
      description: "Quality wheels at competitive prices, available in various sizes, styles, and brands", 
      img: wheelPurchaseImg,
      shortDescription: "Upgrade your ride with wheels that combine style and performance. We offer a wide range of sizes and designs to match your vehicle and taste. Our team ensures perfect fitment and offers full installation and balancing services.",
      longDescription: "Enhance your vehicle’s performance and appearance with our premium wheel purchase service. We carry a wide range of aftermarket wheels in various sizes, materials, finishes, and designs. Whether you're aiming for a stylish upgrade or a performance enhancement, our knowledgeable staff will help you select wheels that match your vehicle’s requirements and your personal style. Fitment is guaranteed, and we offer full installation and balancing services for all wheel purchases.",  
      faqs: [
        {
          answer: "Do you carry aftermarket wheels?",
          question: "Yes, we offer aftermarket wheels to match style, performance, and fitment preferences"
        },
        {
          answer: "Can I change my wheel size?",
          question: "Yes, but we recommend professional consultation to maintain proper fit and safety."
        },
        {
          answer: "Do you offer wheel packages with tires included?",
          question: "Absolutely—ask about our wheel-and-tire bundles for added savings."
        },
        {
          answer: "Do you install the wheels I purchase?",
          question: "Yes, installation and balancing are available for all wheel purchases."
        },
      ]
    },
    { id : 3 , 
      paraName: "tire-installation", 
      name: 'Tire Installation', 
      url: "/services/tire-installation", 
      description: "Fast, professional tire installation for a secure and smooth ride.", 
      img: tireInstallationImg,
      shortDescription: "We mount, seal, and inflate your tires with precision using modern equipment. Each install includes proper torque, pressure checks, and TPMS reset if needed—so you leave with tires installed safely and professionally.",
      longDescription: "Our tire installation service ensures your new or existing tires are mounted, sealed, and inflated correctly for maximum safety and performance. We use state-of-the-art equipment to guarantee precise mounting and avoid rim damage. Each installation includes careful bead sealing, torqueing of lug nuts to manufacturer specifications, and inflation to the correct pressure. TPMS sensors are checked and reset if needed. Drive away confident knowing your tires are securely and professionally installed.",
      faqs: [
        {
          question: "Do you offer run-flat or low-profile tire installation?",
          answer: "Yes, our technicians are equipped to install specialty tires like run-flats and low-profile models."
        },
        {
          question: "Is balancing included with installation?",
          answer: "Yes, standard balancing is included with all tire installations."
        },
        {
          question: "Do I need an appointment for installation?",
          answer: "Walk-ins are welcome, but appointments ensure faster service."
        },
        {
          question: "Will you dispose of my old tires?",
          answer: "Yes, we handle responsible tire disposal for an additional fee"
        },
      ]
    },
    { id : 4 , 
      paraName: "tire-balance", 
      name: 'Tire Balance', 
      url: "/services/tire-balance", 
      description: "Precision balancing for a smoother, safer ride and longer tire life.", 
      img: tireBalanceImg,
      shortDescription: "Smooth out your ride with our high-speed digital balancing. This service reduces vibration, improves tread wear, and boosts fuel efficiency. Ideal after new tire installs, rotations, or if your car feels off.",
      longDescription: "Tire balancing is crucial to maintaining a smooth and safe driving experience. Our precision balancing service uses digital, high-speed equipment to detect and correct weight distribution issues in your wheels. Imbalanced tires can cause vibration, uneven tread wear, and poor fuel efficiency. We recommend balancing with every new tire installation, rotation, or if you notice unusual ride quality. This service enhances tire longevity and helps protect your suspension system.",
      faqs: [
        {
          question: "How do I know if my tires need balancing?",
          answer: "Signs include vibration at higher speeds and uneven tire wear."
        },
        {
          question: "How often should I get my tires balanced?",
          answer: "Typically every 5,000–7,000 miles or when new tires are installed."
        },
        {
          question: "Is balancing included with tire purchases?",
          answer: "Yes, we include balancing with new tire installation."
        },
        {
          question: "What causes tires to go out of balance?",
          answer: "Regular driving, potholes, and normal wear can cause imbalance."
        },
      ]

    },
    { id : 5 , 
      paraName: "tire-repairs", 
      name: 'Tire Repairs', 
      url: "/services/tire-repairs",
      shortDescription: "Got a flat? We repair safe punctures in the tread using top industry methods. If the damage is repairable, we’ll fix it fast. If not, we’ll guide you on safe replacements—your safety comes first.", 
      description: "Reliable tire plugs and patches to safely restore your tires.", 
      img: tireRepairsImg,
      longDescription: "Flat or damaged tire? Our tire repair service provides safe, reliable fixes for punctures and minor damage. We perform thorough internal and external inspections and use industry-standard plug and patch techniques to ensure a durable repair. If the damage is located in a safe repair zone and meets guidelines, we’ll restore your tire quickly and efficiently. Our team will also advise you if the tire is beyond repair, ensuring your safety is never compromised.",
      faqs: [
        {
          question: "Can all flat tires be repaired?",
          answer: "Not all flat tires can be repaired. Only punctures located in the tread area and within specific size limits are eligible for safe repair. We do not repair run-flat tires, as per manufacturer recommendations, or any tire that has been driven while flat, as this can cause internal damage that isn't always visible. Your safety is our priority, and we follow strict guidelines to ensure reliable repairs."
        },
        {
          question: "Is it safe to drive on a repaired tire?",
          answer: "Yes, as long as the repair meets industry safety standards."
        },
        {
          question: "Do you offer both plugs and patches?",
          answer: "Yes, we use both, depending on the damage and tire condition."
        },
        {
          question: "How long does a tire repair take?",
          answer: "Most repairs are completed within 30 minutes."
        }
      ]
    },
    { id : 6 , 
      paraName: "tire-rotation", 
      name: 'Tire Rotation', 
      url: "/services/tire-rotation", 
      description: "Ensure even wear and extend tire life with our professional tire rotation service.", 
      img: tireRotationImg,
      shortDescription: "Rotating your tires helps them wear evenly, improving performance and lifespan. We rotate based on your drivetrain type (FWD, RWD, AWD) and recommend doing it every 5,000–7,500 miles.", 
      longDescription: "Tire rotation helps your tires wear evenly, improving handling and extending their lifespan. We recommend rotating your tires every 5,000 to 7,500 miles or as specified by your vehicle’s manufacturer. Our technicians follow proper rotation patterns based on your vehicle’s drivetrain (FWD, RWD, AWD) to ensure optimal results. This service can also uncover early signs of uneven wear or suspension issues, saving you money in the long run",
      faqs: [
        {
          question: "Why is tire rotation important?",
          answer: "It promotes even wear, improves handling, and extends tire life.",
        },
        {
          question: "How often should I rotate my tires?",
          answer: "Every 5,000 to 7,500 miles or as recommended by your vehicle’s manual.",
        },
        {
          question: "Do front and rear tires wear differently?",
          answer: "Yes, especially on front-wheel or rear-wheel-drive vehicles.",
        },
        {
          question: "Do you check for damage during rotation?",
          answer: " Yes, we inspect for wear, damage, and pressure during service.",
        }
      ]
    },
    { id : 7 , 
      paraName: "tpms-sensor", 
      name: 'TPMS Sensor Replacement', 
      url: "/services/tpms-sensor", 
      description: "Ensure optimal safety and performance with a reliable TPMS sensor replacement.", 
      img: tpmsImg,
      shortDescription: "A faulty TPMS sensor can give false alerts. We replace worn sensors with quality parts, then program and calibrate them for accurate tire pressure readings and peace of mind on the road.",
      longDescription: "Your Tire Pressure Monitoring System (TPMS) plays a critical role in vehicle safety by alerting you when tire pressure is too low. Over time, TPMS sensors can fail due to battery depletion or damage. We offer quick and reliable TPMS sensor replacement using high-quality, compatible parts. After installation, we program and calibrate the sensors to your vehicle's onboard system. This service ensures accurate pressure readings and continued peace of mind on the road.",
      faqs: [
        {
          question: "What is TPMS?",
          answer: "TPMS (Tire Pressure Monitoring System) alerts you when tire pressure is too low" 
        },
        {
          question: "How do I know if my TPMS sensor is bad?",
          answer: "A warning light or inconsistent pressure readings may indicate a fault"  
        },
        {
          question: "Is TPMS replacement included with tire installation?",
          answer : " Yes, sensor reprogramming is included with replacement." 
        },
        {
          question: "Is TPMS replacement included with tire installation?",
          answer: "Not always—it's a separate service if the sensor is faulty."
        }      
      ]
     },
  ];
  
  const automotiveServiceLinks = [
    { id : 1 , 
      paraName: "wheel-alignments", 
      name: 'Wheel Alignments', 
      url: "/services/wheel-alignments", 
      description: "Improve handling and extend tire life with precise wheel alignment.", 
      img: wheelAlignmentImg,
      shortDescription: "Is your car pulling or your steering off? We use computerized tools to align your wheels to factory specs. Proper alignment improves handling, extends tire life, and helps save fuel.",
      longDescription: "Proper wheel alignment improves your vehicle’s handling, maximizes tire life, and enhances fuel efficiency. Our alignment service uses computerized alignment systems to adjust the angles of your wheels to factory specifications. Whether you're experiencing pulling, uneven tire wear, or a crooked steering wheel, our technicians will diagnose and correct alignment issues. We offer both two-wheel and four-wheel alignments depending on your vehicle type and suspension design.",
      faqs: [
        {
          question: "How do I know if I need a wheel alignment?",
          answer: "Look for pulling, uneven tire wear, or off-center steering."
        },
        {
          question: "How often should alignment be checked?",
          answer: "Once a year or after hitting curbs/potholes"
        },
        {
          question: "Is alignment needed with new tires?",
          answer: "Yes, it helps protect the investment in new tires."
        },
        {
          question: "Do you offer 2-wheel and 4-wheel alignments?",
          answer: "Yes, based on your vehicle’s drivetrain and suspension setup."
        }
      ]
    },
    { id : 2 , 
      paraName: "suspension-check", 
      name: 'Suspension Check', 
      url: "/services/suspension-check", 
      description: "Ensure a smooth ride and optimal control with a thorough suspension check.", 
      img: suspensionCheckImg,
      shortDescription: "We inspect tie rod ends, control arms, ball joints, and more for wear or damage. A healthy suspension gives you a smoother ride and better control. We’ll recommend fixes if anything’s worn or failing.",
      longDescription: "Your vehicle’s suspension system is key to a smooth ride and reliable handling. Our suspension check service includes a thorough inspection of tie rod ends, shocks, struts, ball joints, bushings, and control arms. We look for signs of wear, leaks, or damage that can affect steering and comfort. If any components are failing, we provide expert recommendations for repair or replacement. Routine suspension checks help prevent costly damage and ensure a stable, responsive drive",
      faqs: [
        {
          question: "What does a suspension check include?",
          answer: "Inspection of tie rod ends, shocks, struts, springs, and control arms."
        },
        {
          question: "How often should I have the suspension checked?",
          answer: "At least once a year or every 12,000 miles."
        },
        {
          question: "What are signs of a suspension problem?",
          answer: " Rough ride, uneven tire wear, and nose-diving when braking."
        },
        {
          question: "Can suspension issues affect alignment?",
          answer: "Yes, worn components can throw alignment off."
        }
      ]
    },
    { id : 3 , 
      paraName: "brake-check", 
      name: 'Brake Check', 
      url: "/services/brake-check", 
      description: "Improve responsiveness and extend brake life with regular inspections.", 
      img: brakeCheckImg,
      shortDescription: "We inspect pads, rotors, and calipers for wear or damage. If you're hearing noises or due for a check, we’ll make sure your brakes are safe and responsive—before problems get worse.",
      longDescription: "Brakes are your vehicle's most critical safety system. Our brake check service involves a full inspection of brake pads, rotors, and calipers. We look for wear, corrosion, or damage that could impact braking performance. Early detection of brake issues can prevent costly repairs and dangerous failures. Whether you're hearing squeaks or simply due for a check-up, our technicians ensure your braking system is in top condition.",
      faqs: [
        {
          question: "How do I know if my brakes need checking?",
          answer: "Squealing, grinding, or reduced stopping power are key signs."
        },
        {
          question: "How often should brakes be inspected?",
          answer: "Every 10,000–12,000 miles or during regular oil changes"
        },
        {
          question: "Do you inspect both pads and rotors?",
          answer: "Yes, we evaluate the entire braking system."
        },
        {
          question: "Do you provide estimates for brake repair?",
          answer: "Yes, we’ll provide a quote after inspection"
        }
      ]
    },
    { id : 4 , 
      paraName: "lift-lower-kits", 
      name: 'Lift/Lower Kits', 
      url: "/services/lift-lower-kits", 
      description: "Get the head-turning look you want with expert lift or lowering services.", 
      img: liftKitImg,
      shortDescription: "Get the stance or off-road clearance you want with our lift or lowering kit services. We install high-quality kits and include alignment and safety checks to keep your ride smooth and compliant.",
      longDescription: "Transform the look and performance of your vehicle with our expert lift or lowering kit services. We offer professional installation of high-quality kits tailored to your vehicle and driving style—whether you're aiming for better off-road capability or a sleek, aggressive stance. Each installation includes an alignment check and detailed safety inspection. Our team ensures the modifications maintain ride comfort, handling, and regulatory compliance",
      faqs: [
        {
          question: "Do you install kits I purchase elsewhere?",
          answer: "Yes, but we’ll need to inspect them before installation."
        },
        {
          question: "Do I need an alignment after lifting/lowering?",
          answer: "Yes, alignment is critical after height modifications."
        },
        {
          question: "Will this affect ride comfort?",
          answer: "It can, depending on the kit and installation quality."
        },
        {
          question: "What’s the difference between a lift and a leveling kit?",
          answer: "Lifts raise overall height; leveling kits adjust front-to-rear stance."
        }
      ]
    },
    { id : 5 , 
      paraName: "oil-change", 
      name: 'Oil Change', 
      url: "/services/oil-change", 
      description: "Keep your engine running smoothly with a quick and efficient oil change.", 
      img: oilChangeImg,
      shortDescription: "Protect your engine with our full-service oil change. We use quality oil and filters, check fluids, and reset your oil life monitor. It’s quick, clean, and keeps your engine running strong.",
      longDescription: "Keep your engine healthy and running smoothly with our comprehensive oil change service. We use premium conventional or synthetic oils matched to your vehicle’s specifications and driving conditions. The service includes replacing the oil filter, checking all fluid levels, and performing a multi-point inspection. We also reset your vehicle’s oil life monitor. Regular oil changes prevent engine wear, improve efficiency, and extend the life of your vehicle.",
      faqs: [
        {
          question: "How often should I change my oil?",
          answer: "Every 3,000 to 5,000 miles for conventional, up to 7,500 for synthetic."
        },
        {
          question: "What’s included in an oil change?",
          answer: "New oil, filter, and a multi-point inspection."
        },
        {
          question: "Do you offer synthetic and conventional oil?",
          answer: "Yes, we stock both to match your vehicle’s needs."
        },
        {
          question: "Do you reset the oil life indicator?",
          answer: "Yes, we reset all dashboard indicators after service."
        }
      ] 
    }
  ];
  
  export default {
    tireServiceLinks,
    automotiveServiceLinks
  };