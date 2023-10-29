import React from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import carimage1 from "../../public/car-image-1.png"
import { ChevronRight } from 'lucide-react'

const SpecialOffersCars = () => {

    const cars = [
        {   
            id: 1,
            image: carimage1,
            title: "2021 Genesis GV80 2.5T",
            aboutCar: "Used • 27,057 mi • Petrol",
            offerPrice: "$45,995",
            originalPrice: "$51,490",
        },
        {   
            id: 2,
            image: carimage1,
            title: "2021 Genesis GV80 2.5T",
            aboutCar: "Used • 27,057 mi • Petrol",
            offerPrice: "$45,995",
            originalPrice: "$51,490",
        },
        {   
            id: 3,
            image: carimage1,
            title: "2021 Genesis GV80 2.5T",
            aboutCar: "Used • 27,057 mi • Petrol",
            offerPrice: "$45,995",
            originalPrice: "$51,490",
        },
        {   
            id: 4,
            image: carimage1,
            title: "2021 Genesis GV80 2.5T",
            aboutCar: "Used • 27,057 mi • Petrol",
            offerPrice: "$45,995",
            originalPrice: "$51,490",
        },
        {   
            id: 4,
            image: carimage1,
            title: "2021 Genesis GV80 2.5T",
            aboutCar: "Used • 27,057 mi • Petrol",
            offerPrice: "$45,995",
            originalPrice: "$51,490",
        },
    ]

  return (
    <div className='flex justify-between '>

       {
        cars.map((car) => <Card className='rounded-xl'>
             <CardHeader className='p-0'>
            <Image className='rounded-t-xl' src={carimage1} width={576} height={360} alt='car image 1' />
        </CardHeader>

        <CardTitle>
            <h1>2021 Genesis GV80 2.5T</h1>
            <p>Used • 27,057 mi • Petrol</p>
        </CardTitle>

        <CardFooter>
            <div>
                <h1>$45,995</h1>
                <h1>$51,490</h1>
            </div>

            <div>
                <p>Details</p>
                <span><ChevronRight /></span>
            </div>
        </CardFooter>
        </Card>)
       }

    </div>
  )
}

export default SpecialOffersCars