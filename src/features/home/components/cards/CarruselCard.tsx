import { CarouselItem } from "@/components/ui/carousel";
import type { Rating } from "../../interfaces/products.interface";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

interface props {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: Rating;
}

export const CarruselCard = ({id, title, price, category, image, rating}: props) => {
  return (
    <CarouselItem
    key={id}
    className='basis-1/1 md:basis-1/3 lg:basis-1/5'
  >
    <div className='p-1'>
      <Card className="h-[450px] flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none shadow-none">
        <CardContent className='flex-1 flex flex-col p-4'>
            <div className="flex flex-col h-full">
                <div className="flex justify-center items-center mb-4 flex-shrink-0">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-[150px] h-[150px] object-contain rounded-lg" 
                    />
                </div>
                <div className="flex-1 flex flex-col justify-between min-h-0">
                    <div className="space-y-2 flex-1">
                        <h3 className="font-semibold text-sm line-clamp-2 leading-tight">
                            {title}
                        </h3>
                        <p className="text-xs text-gray-600 capitalize">
                            {category}
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                            <Star fill="black" color="black" size={12} />
                            <span className="font-medium">{rating.rate}</span>
                            <span className="text-gray-500">({rating.count})</span>
                        </div>
                        <p className="text-lg font-bold ">
                            ${price.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex-shrink-0">
            <Button className='w-full bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200'>
                Add to cart
            </Button>
        </CardFooter>
      </Card>
    </div>
  </CarouselItem>
  );
};