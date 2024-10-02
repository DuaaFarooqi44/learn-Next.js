import Image from "next/image";
import myimage from "./public/images/profile.jpg"

export default function Home() {
  return (
      

    <div id="container">

<div className="left-section">
 <h1> Hi! My name is Duaa Farooqi</h1>
 <p> I have completed my graduation degree recently. I have done "Computerized Accounting Software" course from "Info Channel of Business & IT" and now i am student in "Governor Sindh Initiative For Cloud Applied Generative AI"  </p>
</div>

<div className="right-section">
  <Image src={myimage} alt="profilePic" className="profilePic"></Image>

</div>





    </div>
  );
}
