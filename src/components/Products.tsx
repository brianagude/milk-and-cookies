import { spacing } from "@/styles/design-tokens";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BlockContent } from "./inputs/PortableTextComponents";
import Button from "./inputs/Button";

export default function Products(section) {
  const { headline, products } = section
  console.log(products)

  return (
    <section className={spacing.section}>
      <div className={spacing.container}>
        {headline && <h2>{headline}</h2>}
        {Array.isArray(products) && products.length > 0 && (
          <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:flex-wrap">
            {products.map((product) => (
              <div key={product._key} className="border-4">
                <Image src={urlFor(product.image).url()} alt={product.name} width={768} height={600} className="aspect-[4/3] w-full h-auto object-cover"/>
                <div className="px-4 py-6 border-t-4 bg-white sm:px-6 sm:py-8 xl:px-10 xl:py-12">
                  <h4>{product.name}</h4>
                  <p className="mt-4">{product.description}</p>
                  <Button url={product.link} style="secondary" classes="flex flex-wrap gap-3 items-center justify-between !w-full mt-5 xl:mt-10">
                    purchase
                    {product.price && <span>{product.price}</span>}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
