import s25 from "../assets/s25.jpg"
import { FaHeart } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
let Cards = [
    {
        model:"redmagic",
        price: "30000",
        pricepermonth: "1300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
        img: s25,
        id:1,
    },
    {
        model:"Oppo reno",
        price: "30000",
        pricepermonth: "3300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
         img: s25,
         id: 2
    },
    {
        model:"Infinix Hot50",
        price: "30000",
        pricepermonth: "7300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
         img: s25,
         id: 3

    },
    {
        model:"Lg velvet",
        price: "30000",
        pricepermonth: "9300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
         img: s25,
         id: 4
    },
    {
        model:"Poco x3",
        price: "30000",
        pricepermonth: "12300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
         img: s25,
         id: 5
    },
     {
        model:"S25 Ultra",
        price: "30000",
        pricepermonth: "1300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
        img: s25,
         id: 6
    },
    {
        model:"Xiomi 14T",
        price: "30000",
        pricepermonth: "3300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
         img: s25,
         id: 7
    },
    {
        model:"Redmi 14pro",
        price: "30000",
        pricepermonth: "7300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
        img: s25,
        id: 8
    },
    {
        model:"Honor x9",
        price: "30000",
        pricepermonth: "9300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
        img: s25,
        id: 9
    },
    {
        model:"Iphone 15pro",
        price: "30000",
        pricepermonth: "12300 so'm/oyiga",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium tempore ducimus.",
        sharx:"4.8 (144sharx)",
        img: s25,
        id: 10
    }

]


function Cardlist(){
    return (
        <div className="Cardlist">
            <h1>
                CardsList Page
            </h1>

            <div className="Cardlist_wrapper" style={{
                display:"flex",
                flexWrap:"wrap",
                gap:"40px",
                justifyContent:"space-around"
                }}>

                {
                    Cards.map((item)=> (
                        <div key={item.id} style={{
                            width:"300px",
                            padding:"20px",
                            border: "1px solid black",
                            borderRadius:"30px",
                            textAlign:"center"
                        }}>
                            <img src={item.img}/>
                            <h1>{item.model}</h1>
                            <h2>{item.price}</h2>
                            <p>{item.description}</p>
                            <br/>
                            <FaHeart size={20} />
                            <IoStatsChartSharp/>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Cardlist