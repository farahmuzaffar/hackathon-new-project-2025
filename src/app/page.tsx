import Editor from "@/components/editor";
import FashionHero from "@/components/fashion-hero";
import FeaturedPosts from "@/components/featured-posts";
import NeuralBanner from "@/components/neural-banner";
import { ProductGrid } from "@/components/product-grid";
import ProductHero from "@/components/product-hero";
import Header from "@/components/header";


export default function Home() {
  return (
    <>
      <Header />

   

      <FashionHero />

      <Editor />

      <ProductGrid />

      <ProductHero />

      <NeuralBanner />

      <FeaturedPosts />
    </>
  );
}
