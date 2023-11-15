import Image from "next/image";
import Button from "./Button";
import 'animate.css';

export default function ProductCard(){
    return (    
         <div class="group relative animate__animated animate__pulse">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-90">
      <Image src='/productother-image.jpg' width={300} height={300}></Image> 
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            Basic Tee
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">Black</p>
      </div>
      <p class="text-sm font-medium text-gray-900">$35</p>
    </div>
    <Button></Button>
  </div>)
}