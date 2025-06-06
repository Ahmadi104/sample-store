import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import { IProductItemProps } from "@/components/ProductItem";
async function Store() {
  const results = await fetch("http://localhost:3001/products");
  const data = (await results.json()) as IProductItemProps[];
  // const data = [
  //   {
  //     id: "1",
  //     title: "product 1",
  //     describtion: "product 1 description",
  //     price: 20,
  //     image:
  //       "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  //   {
  //     id: "2",
  //     title: "product 2",
  //     describtion: "product 2 description",
  //     price: 30,
  //     image:
  //       "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg",
  //   },
  //   {
  //     id: "3",
  //     title: "product 3",
  //     describtion: "product 3 description",
  //     price: 40,
  //     image:
  //       "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg",
  //   },
  //   {
  //     id: "4",
  //     title: "product 4",
  //     describtion: "product 4 description",
  //     price: 50,
  //     image:
  //       "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   },
  // ];
  return (
    <Container>
      <h1 className="text-right py-4">store</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
