import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import ImageSlider from "../ImageSlider";

export default function Home() {
  const navigate = useNavigate();

  function handleClick(props) {
    navigate(`/product/${props}`);
  }

  // ? select category state
  const [useSelectCate, setSelectCate] = useState("All");

  const [cate, setCate] = useState([]);

  const [allProductBack, setAllProductBack] = useState([]);
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch(
      "https://shoppers-point-server.vercel.app/shoppersPointCategoryFindAll"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.result);

        setCate(json.result);
      });
    fetch(
      "https://shoppers-point-server.vercel.app/shoppersPointFindAllProduct"
    )
      .then((response) => response.json())
      .then((json) => {
        setAllProduct(json.result);
        setAllProductBack(json.result);
      });
  }, []);

  useEffect(() => {
    if (useSelectCate !== "All") {
      const filterProduct = allProductBack.filter(
        (dt) => dt.category == useSelectCate
      );

      setAllProduct(
        !filterProduct.length === true ? allProductBack : filterProduct
      );
    }
  }, [useSelectCate]);

  return (
    <div>
      <HomeStyle>
        <div className="">
          <div className="headerBack ">
            <span>Shoppers Point</span>
          </div>

          <ImageSlider />

          <div>
            <div className="d-flex p-2 " style={{ overflowY: "scroll" }}>
              {cate &&
                cate.map((c) => (
                  <div
                    onClick={() => setSelectCate(c.name)}
                    className="mx-2"
                    style={{
                      padding: "5px 10px",
                      backgroundColor: `${
                        useSelectCate === c.name ? "#8749FF" : "white"
                      }`,
                      borderRadius: "20px",
                      border: "1px solid #8749FF",
                      fontFamily: "poppins",
                      color: `${
                        useSelectCate !== c.name ? "#8749FF" : "white"
                      }`,
                      userSelect: "none",
                    }}
                  >
                    {c.name}
                  </div>
                ))}
            </div>
          </div>
          <div className="" style={{ backgroundColor: "#F8F8F8" }}>
            <div className="row  w-100" style={{ margin: " 0px" }}>
              {allProduct &&
                allProduct.map((dt) => (
                  <div
                    className=" col-6 p-2   "
                    onClick={() => handleClick(dt._id)}
                  >
                    <div className="imageStyle ">
                      <img
                        className="w-100 d-flex"
                        style={{ borderRadius: "10px" }}
                        src={dt.imageLink[0]}
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        alignItems: "center",
                        padding: "10px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Ubuntu Mono",
                          letterSpacing: "3px",
                        }}
                      >
                        {dt.name}
                      </div>
                      <div style={{}}>
                        <div className="mt-1">
                          <span
                            style={{
                              fontFamily: "Ubuntu Mono",
                              color: "#27de4b",
                              fontSize: "15px",
                            }}
                          >
                            SAR {dt && dt.price}
                          </span>
                          {dt.isProductOffer === true && (
                            <span
                              style={{
                                paddingLeft: "10px",
                                color: "red",
                                fontSize: "12px",
                              }}
                            >
                              <span>
                                <del style={{ fontSize: "12px" }}>
                                  SAR {dt && dt.offer}
                                </del>
                              </span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </HomeStyle>
    </div>
  );
}

const HomeStyle = styled.div`
  .headerBack {
    background-color: #8749ff;
    font-size: 30px;
    height: 73px;
    color: #fff;
    font-weight: bold;
    padding-top: 10px;
    text-align: center;
  }
  .imageStyle {
    border-radius: 10px;
    background-color: #186cc1;
  }
`;
