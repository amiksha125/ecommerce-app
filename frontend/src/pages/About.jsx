import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="about-img" />
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
        
          <b className='text-gray-800'>Our Mission</b>
<p>
  Our mission is to empower individuals by delivering a seamless and enjoyable online shopping experience. We strive to connect customers with quality products, exceptional service, and the latest trends — all while maintaining transparency, trust, and convenience. At Forever, we’re committed to making everyday life easier, more stylish, and more accessible for everyone.
</p>

        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US?'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b>
           <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent qaulity standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience:</b>
           <p className='text-gray-600'>With user-friendly interface and hassle-free ordering process, shopping has been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer Service:</b>
           <p className='text-gray-600'>Our team of dedicated professional are here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
