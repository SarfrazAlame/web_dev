import Image from "next/image";

export default function Home() {
   return (
    <div>
      in local machine the page changes after changing code without reloading 

      <br />

      but running from container it is not changing ui on browser

      <br />

      yeah it not

      <br />

      solution run following instead of docker run -p 3000:3000 mynextapp

      ans:     docker run -p 3000:3000 -v ./app:/nextapp/app mynextapp


 <h2>Hello Sarfraz</h2>
 askjfkjfbkjd
    </div>
   )
}
