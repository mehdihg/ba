import ContactData from '@/app/components/contact/ContactData'
import ContactLocation from '@/app/components/contact/ContactLocation'
import Image from 'next/image'
import React from 'react'
import map from '../assets/images/map.png'
function page() {
  return (
    <div className='main'>
   
    <ContactData contactCol='contact-col-data' contactContent='contact-content-data' contactIcon="contact-social-media-data-icon"/>
    <ContactLocation/>
    <Image src={map} fill={true} className="img-map"/>
    </div>
  )
}

export default page