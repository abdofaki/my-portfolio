import vm from '../assets/vm.jpg'
import tm from '../assets/tm.jpg'
import ct from '../assets/ct.jpg'


const ProjectCardData = [
{
    imgsrc: vm,
    title:"VIRTUAL VENDING MACHINE APPLICATION",
    text:"Virtual vending machine application with a command-line interface allowing users to deposit money, choose a product, and return the correct change. Inventory is loaded via a text file and transactions are also logged into a text file.",
    tech:["Java","OOP","File I/O","RESTful API","JUnit"],
    details:"https://github.com/abdofaki/VendingMachine",
    source:"https://github.com/abdofaki/VendingMachine",

},
{
    imgsrc: tm,
    title:"TEnmo(MONEY TRANSFER APPLICATION)",
    text:"Peer-to-peer money transfer application allows users to send, request, and approve money transfers. Front-end is a command-line application communicating with a RESTful API server in the back-end.",
    tech:["Java","Spring Boot","PostgreSQL","RESTful","Spring Data JDBC","Spring Security"],
    details:"https://github.com/abdofaki/Tenmo",
    source:"https://github.com/abdofaki/Tenmo",

},
{
    imgsrc: ct,
    title:"City Tours",
    text:"Itinerary creator application to help users to create itineraries based on their starting locations. It allows users to search landmarks based on state and city, add them to their itinerary, generate travel routes, and see details of landmarks. Users also can rate landmarks and leave reviews.",
    tech:["Java","JavaScript","React","Redux","HTML","CSS","RESTful API","Spring Boot","PostgreSQL"],
    details:"https://github.com/abdofaki/City-tours.git",
    source:"https://github.com/abdofaki/City-tours.git",

},

];
export default ProjectCardData;