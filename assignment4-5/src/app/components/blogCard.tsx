"use client";
import { useState } from 'react';
import BlogDetail from './blogDetail';

type BlogData = {
  id: string;
  image: string;
  title: string;
  content: string;
  detail: string;
};

const blogData: BlogData[] = [
    { id: '1',
    image: 'https://aodour.oss-ap-southeast-1.aliyuncs.com/globalProduct/2022-01-04/O1CN01Og1SIh20pn9b5zRNJ_!!2208227946899-0-cib.jpg_q60', 
    title: 'Women Hand Bags', 
    content: 'Women Soft Leather Handbags Luxury Designer', 
    detail: 'WHO WE ARE: Since our launch in 1993 with six essential handbags, weve always believed that joy colors life. Today kate spade new york is a global lifestyle brand. We value thoughtful details. We think polished ease looks (and feels) chic. And we believe in the power of color EDITORS NOTES: Elevate your 9-to-5 style with our new Bleecker tote. Its made from durable Saffiano leather with plenty of room for your everyday essentials (including a 13" laptop). MATERIALS: Saffiano leather with faille lining and pinmount logo. Open top tote with interior zip pocket.' },
   
    { id: '2', 
        image: 'https://kdbdeals.com/wp-content/uploads/2024/08/p-photo-2024-08-24-11-39-15-11-50-02-446403.webp', 
        title: 'Womens Bracelet Watch', 
        content: 'Watch Color: Rose Gold Glitz Model: ES2811', 
        detail: 'This 32mm Scarlette Mini features a sunray dial with Roman numerals at the 12 and six-hour marker, three-hand date movement and a rose gold-tone steel bracelet. Our sport-inspired Scarlette collection is designed for the stylish go-getter. With a fluted topring, it features a refined look that’s suited for seizing any moment. A three-hand movement with date aperture provides the perfect amount of function. Case & Movement: 32mm case, 16mm band width, hardened mineral crystal lens resists scratches, accurate Quartz movement with 3-hand analog display, imported. Dial: Round rose gold stainless steel case, with a rose gold sunray dial and glitz accents. Watch Band: Rose gold, durable stainless steel bracelet band with a secure fold-over clasp closure; links can be removed for a customized fit. Water Resistant: Up to 50m (165ft): Wearable for short periods of recreational swimming and showering, but not diving or snorkeling; 5 ATM.' },
    
    { id: '3', 
        image: 'https://www.cssonlineshop.com/images/original/2709-1.jpg', 
        title: 'Girls Casual Joggers', 
        content: 'Flat casual sneakers for girls 1 inch joggers shoes', 
        detail: 'Safe and Breathable Material: The upper is crafted from breathable material, while the anti-skid rubber sole ensures extra protection and safety for your childs precious feet.Easy to Wear: With the hooks and loops, the kids are able to put on or take off by themselves every single day, while ensuring a perfect fit. Colorful: Our sneakers come in a range of charming colors. Each child will find a color theyll love, making you and your child happy with their new shoes. Suitable for all occasions :The canvas shoes are perfect for school, walking, casual, garden, zoo and other indoor leisure or sports activities .The Perfect Festival Choice: Our fashion sneakers offer a delightful design and superior quality, they are the best choice for your children during the festive season.' },
   
    { id: '4',
         image: 'https://cdn.shopify.com/s/files/1/0981/8178/files/solid-same-color-top-utility-shirt-outfit2.jpg?8315233999853847539', 
         title: "Men's Outfit", 
         content: 'The fundamentals of great casual outfits', 
         detail: 'Lightweight, comfortable mens tracksuits made with polyester material and stylish design, fits for all seasons active wear. Track Jackets: Jacket with full front zpper offers easy on-and-off. 2 side zippered hand pockets to store your personal items safely while exercising. Stand-up collar provides extra coverage and protection. Ribbed hem and cuffs seal in warmth.Jogging Pants: Straight leg pants come with 2 zippered pockets; Full elastic waist with drawstring for adjustable fit. TBMPOY Mens Track Siuts Sets great for running, workout, training, taking a walk, jogging, hiking, cycling, traveling, dogs walking, and other indoor & outdoor sports, also good for daily casual wear.' },
   
    { id: '5', 
        image: 'https://baseuspakistan.pk/wp-content/uploads/2022/10/Baseus-H1-Wireless-Headphones-Hybrid-40dB-ANC-4-mics-ENC-Earphone-Bluetooth-5-2-40mm-Driver.jpg_Q901.jpg', 
        title: 'HeadPhones', 
        content: 'Baseus H1 Wireless Headphones Hybrid 40dB ANC 4-mics ENC Earphone Bluetooth Headsets 70H Time', 
        detail: 'Here are some details about headphones:How they work Headphones are electroacoustic transducers that convert electrical signals into sound. They consist of small speakers, called drivers, that produce audio based on the signals they receive. Connection Headphones can connect to a device using a cord or wireless technology. Wired headphones use a cable to connect directly to a device, while wireless headphones use Bluetooth or other technologies to transmit audio signals without a physical connection. Styles Headphones come in different styles, including over-ear, on-ear, and in-ear. Each style offers different levels of comfort and sound quality. Audio quality Headphones can have different audio reproduction quality capabilities. For example, headphones designed for telephones typically cannot reproduce sound with the same high fidelity as headphones designed for music listening. Safety Listening to headphones at a high volume for a long time can increase the risk of deafness. Eco-friendly Some headphones are designed to be more sustainable, using materials made from recycled or renewable sources, energy-efficient technologies, and recyclable or biodegradable packaging' },
   
    { id: '6',
         image: 'https://eveen.pk/cdn/shop/files/97FE7FAA-F375-4E2E-9D78-8521D4EAEDB1.jpg?crop=center&height=800&v=1714152796&width=800', 
         title: 'Coffee Mug', 
         content: 'Smart Digital Coffee Mug, Temperature Display Coffee Mug, Portable Tumbler Thermos Cup',
        detail: 'Coffee mugs can be made from a variety of materials, including glass, ceramic, metal, or plastic composites. Each material has different properties, so its important to choose one that suits your coffee-drinking habits: Stainless steel: Durable, but can be hard to handle if it doesnot have a heat-resistant handle. Stainless steel mugs are not microwave-safe and can impart off-flavors. Ceramic: Retains heat well and is comfortable to hold, but can chip or crack if mishandled. Most ceramic mugs are dishwasher-safe and microwave-safe. Glass: Provides the cleanest taste, but can be delicate and easily break. Plastic composites: Nearly indestructible, but donot retain heat as well as other materials. Many plastic mugs are not microwave-safe. Size Espresso cups are smaller than other coffee cups and are narrower at the base and wider at the rim. If the espresso cup is too big, the crema can spread out and fade quickly. Function A coffee mug should keep coffee warm and warm the drinkers hands without burning them. A flimsy cup can negatively impact the perception of the coffee quality.' },
  ];

export default function HomePage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogData | null>(null);

  const handleBlogClick = (blog: BlogData) => {
    setSelectedBlog(blog);
  };

  const handleBackClick = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="flex justify-center w-full h-auto bg-orange-100 p-11 flex-wrap gap-6">
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={handleBackClick} />
      ) : (
        blogData.map((blog) => (
          <div
            key={blog.id}
            className="w-full sm:w-[300px] mx-auto bg-gray-100 rounded-lg border-4 border-gray-800 shadow-gray-200 transform transition duration-300 hover:scale-105 m-3 hover:border-gray-500"
          >
            <div className="h-56 bg-gray-200">
              <img
                src={blog.image}
                alt="Blog post cover"
                className="w-full h-full object-cover p-2 bg-white"
              />
            </div>
            <div className="p-6">
              <h1 className="mt-2 text-2xl font-bold text-gray-800">{blog.title}</h1>
              <p className="text-gray-600 mt-4">{blog.content}</p>
              <button
                onClick={() => handleBlogClick(blog)}
                className="mt-4 w-full bg-gray-800 text-yellow-500 hover:text-white hover:bg-gray-500 px-4 py-2 rounded transition duration-300 shadow-gray-700 hover:shadow-2xl border-2 border-transparent"
              >
                Click Here
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
