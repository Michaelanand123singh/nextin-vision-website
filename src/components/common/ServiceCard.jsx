import Button from "../common/Button";
import { Link } from "react-router-dom";  // Import Link

const ServiceCard = ({ title, description, icon: Icon, price, link }) => {
  return (
    <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-800">
      <div className="mb-4">
        {Icon && <Icon className="w-12 h-12 text-orange-600" />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      {price && (
        <p className="text-sm text-gray-300">
          Starting from <span className="font-semibold">${price}</span>
        </p>
      )}
      <Link to={link}>
        <Button variant="outline" size="sm" className="mt-4">
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
