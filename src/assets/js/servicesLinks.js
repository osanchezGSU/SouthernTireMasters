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
    { id : 1 , paraName: "shop-tires", name: 'Tire Purchase', url: "/shop-tires", description: "We offer competitive pricing on new and used tires with a wide range of sizes, brands, and prices.", img: tirePurchaseImg},
    { id : 2 , paraName: "wheel-purchase", name: 'Wheel Purchase', url: "/services/wheel-purchase", description: "Quality wheels at competitive prices, available in various sizes, styles, and brands", img: wheelPurchaseImg},
    { id : 3 , paraName: "tire-installation", name: 'Tire Installation', url: "/services/tire-installation", description: "Fast, professional tire installation for a secure and smooth ride.", img: tireInstallationImg},
    { id : 4 , paraName: "tire-balance", name: 'Tire Balance', url: "/services/tire-balance", description: "Precision balancing for a smoother, safer ride and longer tire life.", img: tireBalanceImg},
    { id : 5 , paraName: "tire-repairs", name: 'Tire Repairs', url: "/services/tire-repairs", description: "Reliable tire plugs and patches to safely restore your tires.", img: tireRepairsImg},
    { id : 6 , paraName: "tire-rotation", name: 'Tire Rotation', url: "/services/tire-rotation", description: "Ensure even wear and extend tire life with our professional tire rotation service.", img: tireRotationImg },
    { id : 7 , paraName: "tpms-sensor", name: 'TPMS Sensor Replacement', url: "/services/tpms-sensor", description: "Ensure optimal safety and performance with a reliable TPMS sensor replacement.", img: tpmsImg },
  ];
  
  const automotiveServiceLinks = [
    { id : 1 , paraName: "wheel-alignments", name: 'Wheel Alignments', url: "/services/wheel-alignments", description: "Improve handling and extend tire life with precise wheel alignment.", img: wheelAlignmentImg },
    { id : 2 , paraName: "suspension-check", name: 'Suspension Check', url: "/services/suspension-check", description: "Ensure a smooth ride and optimal control with a thorough suspension check.", img: suspensionCheckImg },
    { id : 3 , paraName: "brake-check", name: 'Brake Check', url: "/services/brake-check", description: "Improve responsiveness and extend brake life with regular inspections.", img: brakeCheckImg},
    { id : 4 , paraName: "lift-lower-kits", name: 'Lift/Lower Kits', url: "/services/lift-lower-kits", description: "Get the head-turning look you want with expert lift or lowering services.", img: liftKitImg },
    { id : 5 , paraName: "oil-change", name: 'Oil Change', url: "/services/oil-change", description: "Keep your engine running smoothly with a quick and efficient oil change.", img: oilChangeImg }
  ];
  
  export default {
    tireServiceLinks,
    automotiveServiceLinks
  };