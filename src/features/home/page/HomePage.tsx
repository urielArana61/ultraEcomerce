import { Carrusel } from "../components/Carrusel";
import { Categories } from "../components/Categories";
import { HeroBanner } from "../components/HeroBanner";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products.service";

export const HomePage = () => {
  const { data, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
  return (<>
    <div className="grid grid-cols-1">
      <Header />
      <HeroBanner />
      <Carrusel products={data} isPending={isPending}/>
      <Categories />
      <Footer />
    </div>
  </>);
};