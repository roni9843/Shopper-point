import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { styled } from "styled-components";

export default function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  const [shareUrl, setShareUrl] = useState(window.location.href);
  console.log(shareUrl);

  //const shareUrl = "http://localhost:3000/product/6501cec5363c5bdde8be9a43";

  const [product, setProduct] = useState("");

  const [productImage, setProductImage] = useState([]);
  const [selectedProductImage, setSelectedProductImage] = useState("");

  useEffect(() => {
    const url = `https://shoppers-point-server.vercel.app/shoppersPointProductFindId?id=${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.result);
        setProductImage(json.result.imageLink);
        setSelectedProductImage(json.result.imageLink[0]);
      });
  }, []);

  const title = product ? product.name : "Shoppers-Point";

  const [orderBtn, setOrderBtn] = useState(true);

  return (
    <ProductPageStyle>
      <Helmet>
        <title>{product ? product.name : "Shoppers-Point 21"}</title>
        <meta
          name="description"
          content={product ? product.description : "Online Shopping 22"}
        />
        <meta
          property="og:title"
          content={product ? product.name : "Shoppers-Point 23"}
        />
        <meta
          property="og:description"
          content={product ? product.description : "Online Shopping  24"}
        />

        <meta
          property="og:image"
          content="https://i.ibb.co/VJ87qSz/amirali-mirhashemian-7hj3-Vwbd-I-o-unsplash.jpg"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="twitter:title"
          content={product ? product.name : "Shoppers-Point 25"}
        />
        <meta
          property="twitter:description"
          content={product ? product.description : "Online Shopping 26"}
        />
        <meta
          property="twitter:image"
          itemProp="image"
          content={
            selectedProductImage !== ""
              ? selectedProductImage
              : "https://i.ibb.co/Hzmq1Fb/Untitled-Project-8.jpg"
          }
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="p-2">
        <div>
          <img
            className="w-100"
            style={{ borderRadius: "10px" }}
            src={selectedProductImage}
            alt=""
          />
        </div>
        <div className="mt-2 d-flex justify-content-end">
          <div className="d-flex justify-content-end">
            <div className="Demo__some-network">
              <FacebookShareButton
                url={shareUrl}
                quote={product ? product.name : "Shoppers-Point"}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>

            <div className="Demo__some-network">
              <FacebookMessengerShareButton
                url={shareUrl}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
            </div>

            <div className="Demo__some-network">
              <TelegramShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>

            <div className="Demo__some-network">
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>

            <div className="Demo__some-network">
              <EmailShareButton
                url={shareUrl}
                subject={title}
                body="body"
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <span style={{ fontFamily: "poppins", fontSize: "22px" }}>
            <b>SAR {product && product.price}</b>
          </span>
          {product.isProductOffer === true && (
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "18px",
                paddingLeft: "10px",
                color: "red",
              }}
            >
              <span>
                <del>SAR {product && product.offer}</del>
              </span>
            </span>
          )}
        </div>

        <div>
          <span
            style={{
              color: "#969695",
              fontFamily: "poppins",
              fontSize: "18px",
            }}
          >
            {product && product.name}
          </span>
        </div>
        <div>
          <div
            className="d-flex mt-2"
            style={{ overflowY: "scroll", padding: "5px" }}
          >
            {productImage.map((dt) => (
              <div className="p-2   ">
                <div className="imageStyle ">
                  <img
                    onClick={() => setSelectedProductImage(dt)}
                    className=" d-flex"
                    style={{ borderRadius: "10px", width: "100px" }}
                    src={dt}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {product.isSize && (
          <div className="mt-2">
            <div>
              <h6>Available Size : </h6>
              <div className="d-flex">
                {product.size.map((s) => (
                  <div
                    className="p-2 m-1 px-3"
                    style={{ borderRadius: "5px", border: "1px solid #8749FF" }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {orderBtn === true ? (
          <div className="p-2 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-lg btn-primary"
              style={{ backgroundColor: "#8749FF" }}
              onClick={() => setOrderBtn(false)}
            >
              Order Now
            </button>
          </div>
        ) : (
          <div className="p-2 d-flex justify-content-center">
            <button type="button" className="mx-2 btn btn-primary">
              <a
                href={`https://www.facebook.com/shoppypoint1?mibextid=ZbWKwL`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Messenger
              </a>
            </button>
            <button
              type="button"
              className="mx-2 btn btn-primary"
              style={{ backgroundColor: "#075e54" }}
            >
              <a
                href={`https://wa.me/qr/6VTHGJI3XYOVO1`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Whatsapp
              </a>
            </button>
          </div>
        )}

        <div className="mt-2">
          <h6>Description: </h6>
          <span
            style={{
              fontSize: "14px",
              fontFamily: "poppins",
              color: "#838383",
            }}
          >
            {product && product.description}
          </span>
        </div>
      </div>
    </ProductPageStyle>
  );
}

const ProductPageStyle = styled.div``;
