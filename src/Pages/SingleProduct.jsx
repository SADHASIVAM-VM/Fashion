import React, { useContext } from "react";
import { CreateContext } from "../Controllers/ShopContext";
import all_product from "../Assets/all_product";
import SingleCardDisplay from "../Components/SubComponents/SingleCardDisplay";
import Collections from "../Components/SubComponents/Collections";

const SingleProduct = () => {
  const { ids, category } = useContext(CreateContext);
  return (
    <div>
      <div className="my-10">
        {all_product
          .filter((itms) => itms.id === ids)
          .map((itms) => (
            <div key ={itms.id}>
              <SingleCardDisplay
              
              id ={itms.id}
                img={itms.image}
                name={itms.name}
                price={itms.new_price}
              />
            </div>
          ))}
        {category && (
          <div className="my-10">
            <h1 className="text-xl font-bold mb-5">Related Products</h1>
            <div className="flex gap-2 flex-wrap justify-center ">
              {all_product &&
                all_product
                  .filter((itms) => itms.category === `${category}`)
                  .map((itms) => (
                    <Collections
                      key={itms.id}
                      category={itms.category}
                      image={itms.image}
                      name={itms.name}
                      new_price={itms.new_price}
                      old_price={itms.old_price}
                      id={itms.id}
                      color={"bg-red-400"}
                    />
                  ))
                  .slice(0, 5)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
