import { spacing, typography, buttons } from "@/styles/design-tokens";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function Products(section) {
  const { headline, products } = section
  if (!products || products.length === 0) return false

  console.log(products)

  const productWrapperClass = products.length === 1 ? "max-w-xl" : products.length === 2 ? "max-w-6xl sm:grid-cols-2" : "sm:grid-cols-2 md:grid-cols-3"

  return (
    <section className={spacing.section}>
      <div className={spacing.container}>
        {headline && <h2 className={`${typography.h3} text-center`}>{headline}</h2>}

        <div className={`grid mx-auto ${productWrapperClass} gap-6 md:gap-8`}>
          {products.map((product) => (
            <Link key={product._key} href={product.link} className="border-4">
              <Image src={urlFor(product.image).url()} alt={product.name} width={768} height={600} className="aspect-[4/3] w-full h-auto object-cover"/>
              
              <div className="px-4 py-6 border-t-4 bg-white sm:px-6 sm:py-8">
                <h4 className={typography.h5}>{product.name}</h4>
                <p className={`${typography.body} mt-3`}>{product.description}</p>
                <div className={`${buttons.secondary} flex flex-wrap gap-3 items-center justify-between !w-full mt-5 xl:mt-8`}>
                  purchase
                  {product.price && <span>{product.price}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
