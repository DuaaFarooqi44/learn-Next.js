import Header from "@/app/components/header";
import Footer from "../footer/footer";


export default function Portfolio(){
    return(
    <div>
        <Header/>

<div className="intro"> <h1>Introduction</h1></div>

        <div className="flex items-center justify-center v-screen">

        <div id="container">

<div className="left-section">
 <h1> Hi! My name is Duaa Farooqi</h1>
 <p> I have completed my graduation degree recently. I have done 
    "Computerized Accounting Software" course from "Info Channel of Business & IT" 
    and now i am student in "Governor Sindh Initiative For Cloud Applied Generative AI"  </p>
</div>

<div className="right-section">
<img src="/images/profile.jpg" alt="profilePic" className="profilePic"/>

</div>

    </div>

        </div>
        
            <Footer/>
    </div>

    

    )
}