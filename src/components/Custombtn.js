import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Card from "../../../components/Card";
import Select from "react-select";

const check = <i className="ri-check-line ri-2x"></i>;
const close = <i className="ri-close-line i_close"></i>;
const Pricing = ({ mr, flx }) => {
  const [pricing, setPricing] = useState("pricing");
  const [selectedCategory, setSelectedCategory] = useState([]);

  // const pricingLists = [
  //   {
  //     title: "New Movies",
  //     icon: check,
  //     icon1: check,
  //     icon2: check,
  //     icon3: check,
  //   },
  //   {
  //     title: "Streamit Special",
  //     icon: close,
  //     icon1: check,
  //     icon2: check,
  //     icon3: check,
  //   },
  //   {
  //     title: "American Tv Shows",
  //     icon: close,
  //     icon1: check,
  //     icon2: check,
  //     icon3: check,
  //   },
  //   {
  //     title: "Hollywood Movies",
  //     icon: check,
  //     icon1: check,
  //     icon2: check,
  //     icon3: check,
  //   },
  //   {
  //     title: "Video Quality",
  //     icon: "SD(480p)",
  //     icon1: "HD(720p)",
  //     icon2: "FHD(1080p)",
  //     icon3: "FHD(1080p)",
  //   },
  //   {
  //     title: "Ad Free Entertainment	",
  //     icon: close,
  //     icon1: close,
  //     icon2: check,
  //     icon3: check,
  //   },
  // ];
  //custom styles for created dropdown
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      borderRadius: "10px !important",
    }),
    control: (provided, state, base) => ({
      ...provided,
      ...base,
      backgroundColor: "#13212D",
      border: 0,
      boxShadow: "none",
      minHeight: "100%",
      height: "100%",
      borderRadius: "10px !important",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#ffff",
      };
    },
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    dropdownIndicator: (base) => ({
      ...base,
      backgroundColor: "transparent",
    }),
  };

  // console.log(Select);
  const categoryGroup = [
    {
      label: "Please select the category",
      options: [
        // { label: "Select", value: undefined },
        { label: "Genre", value: "Genre" },
        { label: "Price", value: "Price" },
      ],
    },
  ];

  return (
    <>
      <Container fluid>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: flx,
            gap: "30px",
            alignItems: "center",
            marginTop: mr,
            marginBottom:"2%",
          }}
          className="FILTERBTN"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "9%",
              // width:'10%',
              // justifyContent: "space-around"
            }}
            className="FilterBtn"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00002 0C7.69841 0 6.59788 0.838749 6.18362 2H2.00002C1.86751 1.99813 1.73595 2.02261 1.61298 2.07202C1.49001 2.12143 1.37809 2.1948 1.28372 2.28784C1.18935 2.38088 1.11441 2.49176 1.06327 2.61401C1.01212 2.73627 0.985779 2.86747 0.985779 3C0.985779 3.13253 1.01212 3.26373 1.06327 3.38599C1.11441 3.50824 1.18935 3.61912 1.28372 3.71216C1.37809 3.8052 1.49001 3.87857 1.61298 3.92798C1.73595 3.97739 1.86751 4.00187 2.00002 4H6.18362C6.59788 5.16125 7.69841 6 9.00002 6C10.654 6 12 4.654 12 3C12 1.346 10.654 0 9.00002 0ZM15 2C14.8675 1.99813 14.7359 2.02261 14.613 2.07202C14.49 2.12143 14.3781 2.1948 14.2837 2.28784C14.1893 2.38088 14.1144 2.49176 14.0633 2.61401C14.0121 2.73627 13.9858 2.86747 13.9858 3C13.9858 3.13253 14.0121 3.26373 14.0633 3.38599C14.1144 3.50824 14.1893 3.61912 14.2837 3.71216C14.3781 3.8052 14.49 3.87857 14.613 3.92798C14.7359 3.97739 14.8675 4.00187 15 4H20C20.1325 4.00187 20.2641 3.97739 20.3871 3.92798C20.51 3.87857 20.622 3.8052 20.7163 3.71216C20.8107 3.61912 20.8856 3.50824 20.9368 3.38599C20.9879 3.26373 21.0143 3.13253 21.0143 3C21.0143 2.86747 20.9879 2.73627 20.9368 2.61401C20.8856 2.49176 20.8107 2.38088 20.7163 2.28784C20.622 2.1948 20.51 2.12143 20.3871 2.07202C20.2641 2.02261 20.1325 1.99813 20 2H15ZM14 7C12.6984 7 11.5979 7.83875 11.1836 9H2.00002C1.86751 8.99813 1.73595 9.02261 1.61298 9.07202C1.49001 9.12143 1.37809 9.1948 1.28372 9.28784C1.18935 9.38088 1.11441 9.49176 1.06327 9.61401C1.01212 9.73627 0.985779 9.86747 0.985779 10C0.985779 10.1325 1.01212 10.2637 1.06327 10.386C1.11441 10.5082 1.18935 10.6191 1.28372 10.7122C1.37809 10.8052 1.49001 10.8786 1.61298 10.928C1.73595 10.9774 1.86751 11.0019 2.00002 11H11.1836C11.5979 12.1613 12.6984 13 14 13C15.654 13 17 11.654 17 10C17 8.346 15.654 7 14 7ZM20 9C19.8675 8.99813 19.7359 9.02261 19.613 9.07202C19.49 9.12143 19.3781 9.1948 19.2837 9.28784C19.1893 9.38088 19.1144 9.49176 19.0633 9.61401C19.0121 9.73627 18.9858 9.86747 18.9858 10C18.9858 10.1325 19.0121 10.2637 19.0633 10.386C19.1144 10.5082 19.1893 10.6191 19.2837 10.7122C19.3781 10.8052 19.49 10.8786 19.613 10.928C19.7359 10.9774 19.8675 11.0019 20 11C20.1325 11.0019 20.2641 10.9774 20.3871 10.928C20.51 10.8786 20.622 10.8052 20.7163 10.7122C20.8107 10.6191 20.8856 10.5082 20.9368 10.386C20.9879 10.2637 21.0143 10.1325 21.0143 10C21.0143 9.86747 20.9879 9.73627 20.9368 9.61401C20.8856 9.49176 20.8107 9.38088 20.7163 9.28784C20.622 9.1948 20.51 9.12143 20.3871 9.07202C20.2641 9.02261 20.1325 8.99813 20 9ZM6.00002 14C4.69841 14 3.59788 14.8387 3.18362 16H2.00002C1.86751 15.9981 1.73595 16.0226 1.61298 16.072C1.49001 16.1214 1.37809 16.1948 1.28372 16.2878C1.18935 16.3809 1.11441 16.4918 1.06327 16.614C1.01212 16.7363 0.985779 16.8675 0.985779 17C0.985779 17.1325 1.01212 17.2637 1.06327 17.386C1.11441 17.5082 1.18935 17.6191 1.28372 17.7122C1.37809 17.8052 1.49001 17.8786 1.61298 17.928C1.73595 17.9774 1.86751 18.0019 2.00002 18H3.18362C3.59788 19.1613 4.69841 20 6.00002 20C7.65402 20 9.00002 18.654 9.00002 17C9.00002 15.346 7.65402 14 6.00002 14ZM12 16C11.8675 15.9981 11.7359 16.0226 11.613 16.072C11.49 16.1214 11.3781 16.1948 11.2837 16.2878C11.1893 16.3809 11.1144 16.4918 11.0633 16.614C11.0121 16.7363 10.9858 16.8675 10.9858 17C10.9858 17.1325 11.0121 17.2637 11.0633 17.386C11.1144 17.5082 11.1893 17.6191 11.2837 17.7122C11.3781 17.8052 11.49 17.8786 11.613 17.928C11.7359 17.9774 11.8675 18.0019 12 18H20C20.1325 18.0019 20.2641 17.9774 20.3871 17.928C20.51 17.8786 20.622 17.8052 20.7163 17.7122C20.8107 17.6191 20.8856 17.5082 20.9368 17.386C20.9879 17.2637 21.0143 17.1325 21.0143 17C21.0143 16.8675 20.9879 16.7363 20.9368 16.614C20.8856 16.4918 20.8107 16.3809 20.7163 16.2878C20.622 16.1948 20.51 16.1214 20.3871 16.072C20.2641 16.0226 20.1325 15.9981 20 16H12Z"
                fill="#B3BAD1"
              />
            </svg>
            Filter By
          </div>
    <div className="Providerr">
    <Select
            defaultValue={selectedCategory}
            styles={customStyles}
            // onChange={(e) => {
            //   changeCategoryHandler(e);
            // }}
            options={categoryGroup}
            closeMenuOnSelect={true}
            menuPortalTarget={document.body}
            placeholder={"Providers"}
            onClick={(e) => {
              e.preventDefault();
            }}
            theme={
              {
                //   borderRadius: "20px !important",
              }
            }
          />
    </div>
          {/* <div
            style={{
              display: "flex",
              height: "100%",
              width: "auto",
              background: "black",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 10px",
            }}
          >
            nckadkcbdh
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11997 1.29006L5.99997 5.17006L9.87997 1.29006C10.27 0.900059 10.9 0.900059 11.29 1.29006C11.68 1.68006 11.68 2.31006 11.29 2.70006L6.69997 7.29006C6.30997 7.68006 5.67997 7.68006 5.28997 7.29006L0.699971 2.70006C0.309971 2.31006 0.309971 1.68006 0.699971 1.29006C1.08997 0.910059 1.72997 0.900059 2.11997 1.29006V1.29006Z"
                fill="white"
              />
            </svg>
          </div> */}
        </div>
      </Container>
    </>
  );
};
export default Pricing;
