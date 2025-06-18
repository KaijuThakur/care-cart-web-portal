
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  manufacturer: string;
  rating: number;
  prescription?: boolean;
}

const ProductCard = ({ name, price, originalPrice, image, manufacturer, rating, prescription }: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-lg bg-gray-100"
          />
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
          {prescription && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Rx
            </span>
          )}
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{manufacturer}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "★" : "☆"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({rating}/5)</span>
        </div>
        
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
