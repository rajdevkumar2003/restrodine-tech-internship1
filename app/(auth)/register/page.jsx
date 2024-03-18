'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const page = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorTxt, seterrorTxt ] = useState("");

  const router= useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      seterrorTxt("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        seterrorTxt("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="rounded-md bg-white min-h-[610px] w-[374px] px-5 py-4">
      <h2 className="text-black font-semibold ">Welcome to</h2>
      <h1 className="font-bold text-3xl text-purple py-3 ">RestroDineTech</h1>
      <div className="flex flex-col gap-3">
        <svg
          className="w-full py-4"
          viewBox="0 0 508 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3610_772)">
            <rect x="4" width="500" height="54" rx="8" fill="white" />
            <rect
              x="4.5"
              y="0.5"
              width="499"
              height="53"
              rx="7.5"
              stroke="#757575"
            />
          </g>
          <path
            d="M201.402 33.344H205.632V35H199.35V22.49H201.402V33.344ZM211.65 35.162C210.714 35.162 209.868 34.952 209.112 34.532C208.356 34.1 207.762 33.5 207.33 32.732C206.898 31.952 206.682 31.052 206.682 30.032C206.682 29.024 206.904 28.13 207.348 27.35C207.792 26.57 208.398 25.97 209.166 25.55C209.934 25.13 210.792 24.92 211.74 24.92C212.688 24.92 213.546 25.13 214.314 25.55C215.082 25.97 215.688 26.57 216.132 27.35C216.576 28.13 216.798 29.024 216.798 30.032C216.798 31.04 216.57 31.934 216.114 32.714C215.658 33.494 215.034 34.1 214.242 34.532C213.462 34.952 212.598 35.162 211.65 35.162ZM211.65 33.38C212.178 33.38 212.67 33.254 213.126 33.002C213.594 32.75 213.972 32.372 214.26 31.868C214.548 31.364 214.692 30.752 214.692 30.032C214.692 29.312 214.554 28.706 214.278 28.214C214.002 27.71 213.636 27.332 213.18 27.08C212.724 26.828 212.232 26.702 211.704 26.702C211.176 26.702 210.684 26.828 210.228 27.08C209.784 27.332 209.43 27.71 209.166 28.214C208.902 28.706 208.77 29.312 208.77 30.032C208.77 31.1 209.04 31.928 209.58 32.516C210.132 33.092 210.822 33.38 211.65 33.38ZM222.823 24.92C223.591 24.92 224.269 25.076 224.857 25.388C225.457 25.688 225.925 26.066 226.261 26.522V25.082H228.331V35.162C228.331 36.074 228.139 36.884 227.755 37.592C227.371 38.312 226.813 38.876 226.081 39.284C225.361 39.692 224.497 39.896 223.489 39.896C222.145 39.896 221.029 39.578 220.141 38.942C219.253 38.318 218.749 37.466 218.629 36.386H220.663C220.819 36.902 221.149 37.316 221.653 37.628C222.169 37.952 222.781 38.114 223.489 38.114C224.317 38.114 224.983 37.862 225.487 37.358C226.003 36.854 226.261 36.122 226.261 35.162V33.506C225.913 33.974 225.439 34.37 224.839 34.694C224.251 35.006 223.579 35.162 222.823 35.162C221.959 35.162 221.167 34.946 220.447 34.514C219.739 34.07 219.175 33.458 218.755 32.678C218.347 31.886 218.143 30.992 218.143 29.996C218.143 29 218.347 28.118 218.755 27.35C219.175 26.582 219.739 25.988 220.447 25.568C221.167 25.136 221.959 24.92 222.823 24.92ZM226.261 30.032C226.261 29.348 226.117 28.754 225.829 28.25C225.553 27.746 225.187 27.362 224.731 27.098C224.275 26.834 223.783 26.702 223.255 26.702C222.727 26.702 222.235 26.834 221.779 27.098C221.323 27.35 220.951 27.728 220.663 28.232C220.387 28.724 220.249 29.312 220.249 29.996C220.249 30.68 220.387 31.28 220.663 31.796C220.951 32.312 221.323 32.708 221.779 32.984C222.247 33.248 222.739 33.38 223.255 33.38C223.783 33.38 224.275 33.248 224.731 32.984C225.187 32.72 225.553 32.336 225.829 31.832C226.117 31.316 226.261 30.716 226.261 30.032ZM232.07 23.768C231.698 23.768 231.386 23.642 231.134 23.39C230.882 23.138 230.756 22.826 230.756 22.454C230.756 22.082 230.882 21.77 231.134 21.518C231.386 21.266 231.698 21.14 232.07 21.14C232.43 21.14 232.736 21.266 232.988 21.518C233.24 21.77 233.366 22.082 233.366 22.454C233.366 22.826 233.24 23.138 232.988 23.39C232.736 23.642 232.43 23.768 232.07 23.768ZM233.078 25.082V35H231.026V25.082H233.078ZM240.776 24.92C241.556 24.92 242.252 25.082 242.864 25.406C243.488 25.73 243.974 26.21 244.322 26.846C244.67 27.482 244.844 28.25 244.844 29.15V35H242.81V29.456C242.81 28.568 242.588 27.89 242.144 27.422C241.7 26.942 241.094 26.702 240.326 26.702C239.558 26.702 238.946 26.942 238.49 27.422C238.046 27.89 237.824 28.568 237.824 29.456V35H235.772V25.082H237.824V26.216C238.16 25.808 238.586 25.49 239.102 25.262C239.63 25.034 240.188 24.92 240.776 24.92ZM265.457 25.082L262.379 35H260.219L258.221 27.674L256.223 35H254.063L250.967 25.082H253.055L255.125 33.056L257.231 25.082H259.373L261.389 33.02L263.441 25.082H265.457ZM268.035 23.768C267.663 23.768 267.351 23.642 267.099 23.39C266.847 23.138 266.721 22.826 266.721 22.454C266.721 22.082 266.847 21.77 267.099 21.518C267.351 21.266 267.663 21.14 268.035 21.14C268.395 21.14 268.701 21.266 268.953 21.518C269.205 21.77 269.331 22.082 269.331 22.454C269.331 22.826 269.205 23.138 268.953 23.39C268.701 23.642 268.395 23.768 268.035 23.768ZM269.043 25.082V35H266.991V25.082H269.043ZM274.131 26.756V32.246C274.131 32.618 274.215 32.888 274.383 33.056C274.563 33.212 274.863 33.29 275.283 33.29H276.543V35H274.923C273.999 35 273.291 34.784 272.799 34.352C272.307 33.92 272.061 33.218 272.061 32.246V26.756H270.891V25.082H272.061V22.616H274.131V25.082H276.543V26.756H274.131ZM283.564 24.92C284.32 24.92 284.992 25.082 285.58 25.406C286.18 25.73 286.648 26.21 286.984 26.846C287.332 27.482 287.506 28.25 287.506 29.15V35H285.472V29.456C285.472 28.568 285.25 27.89 284.806 27.422C284.362 26.942 283.756 26.702 282.988 26.702C282.22 26.702 281.608 26.942 281.152 27.422C280.708 27.89 280.486 28.568 280.486 29.456V35H278.434V21.68H280.486V26.234C280.834 25.814 281.272 25.49 281.8 25.262C282.34 25.034 282.928 24.92 283.564 24.92ZM303.853 26.09C303.529 25.466 303.079 24.998 302.503 24.686C301.927 24.362 301.261 24.2 300.505 24.2C299.677 24.2 298.939 24.386 298.291 24.758C297.643 25.13 297.133 25.658 296.761 26.342C296.401 27.026 296.221 27.818 296.221 28.718C296.221 29.618 296.401 30.416 296.761 31.112C297.133 31.796 297.643 32.324 298.291 32.696C298.939 33.068 299.677 33.254 300.505 33.254C301.621 33.254 302.527 32.942 303.223 32.318C303.919 31.694 304.345 30.848 304.501 29.78H299.803V28.142H306.697V29.744C306.565 30.716 306.217 31.61 305.653 32.426C305.101 33.242 304.375 33.896 303.475 34.388C302.587 34.868 301.597 35.108 300.505 35.108C299.329 35.108 298.255 34.838 297.283 34.298C296.311 33.746 295.537 32.984 294.961 32.012C294.397 31.04 294.115 29.942 294.115 28.718C294.115 27.494 294.397 26.396 294.961 25.424C295.537 24.452 296.311 23.696 297.283 23.156C298.267 22.604 299.341 22.328 300.505 22.328C301.837 22.328 303.019 22.658 304.051 23.318C305.095 23.966 305.851 24.89 306.319 26.09H303.853ZM313.023 35.162C312.087 35.162 311.241 34.952 310.485 34.532C309.729 34.1 309.135 33.5 308.703 32.732C308.271 31.952 308.055 31.052 308.055 30.032C308.055 29.024 308.277 28.13 308.721 27.35C309.165 26.57 309.771 25.97 310.539 25.55C311.307 25.13 312.165 24.92 313.113 24.92C314.061 24.92 314.919 25.13 315.687 25.55C316.455 25.97 317.061 26.57 317.505 27.35C317.949 28.13 318.171 29.024 318.171 30.032C318.171 31.04 317.943 31.934 317.487 32.714C317.031 33.494 316.407 34.1 315.615 34.532C314.835 34.952 313.971 35.162 313.023 35.162ZM313.023 33.38C313.551 33.38 314.043 33.254 314.499 33.002C314.967 32.75 315.345 32.372 315.633 31.868C315.921 31.364 316.065 30.752 316.065 30.032C316.065 29.312 315.927 28.706 315.651 28.214C315.375 27.71 315.009 27.332 314.553 27.08C314.097 26.828 313.605 26.702 313.077 26.702C312.549 26.702 312.057 26.828 311.601 27.08C311.157 27.332 310.803 27.71 310.539 28.214C310.275 28.706 310.143 29.312 310.143 30.032C310.143 31.1 310.413 31.928 310.953 32.516C311.505 33.092 312.195 33.38 313.023 33.38ZM324.502 35.162C323.566 35.162 322.72 34.952 321.964 34.532C321.208 34.1 320.614 33.5 320.182 32.732C319.75 31.952 319.534 31.052 319.534 30.032C319.534 29.024 319.756 28.13 320.2 27.35C320.644 26.57 321.25 25.97 322.018 25.55C322.786 25.13 323.644 24.92 324.592 24.92C325.54 24.92 326.398 25.13 327.166 25.55C327.934 25.97 328.54 26.57 328.984 27.35C329.428 28.13 329.65 29.024 329.65 30.032C329.65 31.04 329.422 31.934 328.966 32.714C328.51 33.494 327.886 34.1 327.094 34.532C326.314 34.952 325.45 35.162 324.502 35.162ZM324.502 33.38C325.03 33.38 325.522 33.254 325.978 33.002C326.446 32.75 326.824 32.372 327.112 31.868C327.4 31.364 327.544 30.752 327.544 30.032C327.544 29.312 327.406 28.706 327.13 28.214C326.854 27.71 326.488 27.332 326.032 27.08C325.576 26.828 325.084 26.702 324.556 26.702C324.028 26.702 323.536 26.828 323.08 27.08C322.636 27.332 322.282 27.71 322.018 28.214C321.754 28.706 321.622 29.312 321.622 30.032C321.622 31.1 321.892 31.928 322.432 32.516C322.984 33.092 323.674 33.38 324.502 33.38ZM335.674 24.92C336.442 24.92 337.12 25.076 337.708 25.388C338.308 25.688 338.776 26.066 339.112 26.522V25.082H341.182V35.162C341.182 36.074 340.99 36.884 340.606 37.592C340.222 38.312 339.664 38.876 338.932 39.284C338.212 39.692 337.348 39.896 336.34 39.896C334.996 39.896 333.88 39.578 332.992 38.942C332.104 38.318 331.6 37.466 331.48 36.386H333.514C333.67 36.902 334 37.316 334.504 37.628C335.02 37.952 335.632 38.114 336.34 38.114C337.168 38.114 337.834 37.862 338.338 37.358C338.854 36.854 339.112 36.122 339.112 35.162V33.506C338.764 33.974 338.29 34.37 337.69 34.694C337.102 35.006 336.43 35.162 335.674 35.162C334.81 35.162 334.018 34.946 333.298 34.514C332.59 34.07 332.026 33.458 331.606 32.678C331.198 31.886 330.994 30.992 330.994 29.996C330.994 29 331.198 28.118 331.606 27.35C332.026 26.582 332.59 25.988 333.298 25.568C334.018 25.136 334.81 24.92 335.674 24.92ZM339.112 30.032C339.112 29.348 338.968 28.754 338.68 28.25C338.404 27.746 338.038 27.362 337.582 27.098C337.126 26.834 336.634 26.702 336.106 26.702C335.578 26.702 335.086 26.834 334.63 27.098C334.174 27.35 333.802 27.728 333.514 28.232C333.238 28.724 333.1 29.312 333.1 29.996C333.1 30.68 333.238 31.28 333.514 31.796C333.802 32.312 334.174 32.708 334.63 32.984C335.098 33.248 335.59 33.38 336.106 33.38C336.634 33.38 337.126 33.248 337.582 32.984C338.038 32.72 338.404 32.336 338.68 31.832C338.968 31.316 339.112 30.716 339.112 30.032ZM345.929 21.68V35H343.877V21.68H345.929ZM357.713 29.798C357.713 30.17 357.689 30.506 357.641 30.806H350.063C350.123 31.598 350.417 32.234 350.945 32.714C351.473 33.194 352.121 33.434 352.889 33.434C353.993 33.434 354.773 32.972 355.229 32.048H357.443C357.143 32.96 356.597 33.71 355.805 34.298C355.025 34.874 354.053 35.162 352.889 35.162C351.941 35.162 351.089 34.952 350.333 34.532C349.589 34.1 349.001 33.5 348.569 32.732C348.149 31.952 347.939 31.052 347.939 30.032C347.939 29.012 348.143 28.118 348.551 27.35C348.971 26.57 349.553 25.97 350.297 25.55C351.053 25.13 351.917 24.92 352.889 24.92C353.825 24.92 354.659 25.124 355.391 25.532C356.123 25.94 356.693 26.516 357.101 27.26C357.509 27.992 357.713 28.838 357.713 29.798ZM355.571 29.15C355.559 28.394 355.289 27.788 354.761 27.332C354.233 26.876 353.579 26.648 352.799 26.648C352.091 26.648 351.485 26.876 350.981 27.332C350.477 27.776 350.177 28.382 350.081 29.15H355.571Z"
            fill="#757575"
          />
          <g clip-path="url(#clip0_3610_772)">
            <path
              d="M157.205 30.338L156.231 34.4962L152.668 34.5823C151.604 32.3257 151 29.7437 151 27C151 24.3468 151.565 21.8448 152.565 19.6417H152.566L155.738 20.3062L157.127 23.909C156.836 24.8778 156.678 25.9178 156.678 27C156.678 28.1745 156.864 29.2998 157.205 30.338Z"
              fill="#FBBB00"
            />
            <path
              d="M178.755 24.011C178.916 24.9789 179 25.9784 179 27C179 28.1455 178.895 29.2629 178.694 30.3407C178.012 34.0084 176.232 37.211 173.765 39.4774L173.764 39.4765L169.769 39.2435L169.204 35.2101C170.841 34.113 172.12 32.396 172.794 30.3407H165.308V24.011H178.755Z"
              fill="#518EF8"
            />
            <path
              d="M173.764 39.4765L173.765 39.4774C171.365 41.6813 168.318 43 165 43C159.668 43 155.033 39.5943 152.668 34.5824L157.205 30.3381C158.388 33.9442 161.432 36.5113 165 36.5113C166.534 36.5113 167.971 36.0374 169.204 35.2101L173.764 39.4765Z"
              fill="#28B446"
            />
            <path
              d="M173.936 14.6835L169.401 18.927C168.125 18.0154 166.616 17.4887 165 17.4887C161.351 17.4887 158.25 20.1736 157.127 23.909L152.566 19.6418H152.565C154.895 14.5077 159.589 11 165 11C168.397 11 171.512 12.3829 173.936 14.6835Z"
              fill="#F14336"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3610_772"
              x="0"
              y="0"
              width="508"
              height="62"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3610_772"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3610_772"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_3610_772">
              <rect
                width="28"
                height="32"
                fill="white"
                transform="translate(151 11)"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="w-full "
          viewBox="0 0 508 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3610_773)">
            <rect x="4" width="500" height="54" rx="8" fill="white" />
            <rect
              x="4.5"
              y="0.5"
              width="499"
              height="53"
              rx="7.5"
              stroke="#757575"
            />
          </g>
          <path
            d="M201.402 33.344H205.632V35H199.35V22.49H201.402V33.344ZM211.65 35.162C210.714 35.162 209.868 34.952 209.112 34.532C208.356 34.1 207.762 33.5 207.33 32.732C206.898 31.952 206.682 31.052 206.682 30.032C206.682 29.024 206.904 28.13 207.348 27.35C207.792 26.57 208.398 25.97 209.166 25.55C209.934 25.13 210.792 24.92 211.74 24.92C212.688 24.92 213.546 25.13 214.314 25.55C215.082 25.97 215.688 26.57 216.132 27.35C216.576 28.13 216.798 29.024 216.798 30.032C216.798 31.04 216.57 31.934 216.114 32.714C215.658 33.494 215.034 34.1 214.242 34.532C213.462 34.952 212.598 35.162 211.65 35.162ZM211.65 33.38C212.178 33.38 212.67 33.254 213.126 33.002C213.594 32.75 213.972 32.372 214.26 31.868C214.548 31.364 214.692 30.752 214.692 30.032C214.692 29.312 214.554 28.706 214.278 28.214C214.002 27.71 213.636 27.332 213.18 27.08C212.724 26.828 212.232 26.702 211.704 26.702C211.176 26.702 210.684 26.828 210.228 27.08C209.784 27.332 209.43 27.71 209.166 28.214C208.902 28.706 208.77 29.312 208.77 30.032C208.77 31.1 209.04 31.928 209.58 32.516C210.132 33.092 210.822 33.38 211.65 33.38ZM222.823 24.92C223.591 24.92 224.269 25.076 224.857 25.388C225.457 25.688 225.925 26.066 226.261 26.522V25.082H228.331V35.162C228.331 36.074 228.139 36.884 227.755 37.592C227.371 38.312 226.813 38.876 226.081 39.284C225.361 39.692 224.497 39.896 223.489 39.896C222.145 39.896 221.029 39.578 220.141 38.942C219.253 38.318 218.749 37.466 218.629 36.386H220.663C220.819 36.902 221.149 37.316 221.653 37.628C222.169 37.952 222.781 38.114 223.489 38.114C224.317 38.114 224.983 37.862 225.487 37.358C226.003 36.854 226.261 36.122 226.261 35.162V33.506C225.913 33.974 225.439 34.37 224.839 34.694C224.251 35.006 223.579 35.162 222.823 35.162C221.959 35.162 221.167 34.946 220.447 34.514C219.739 34.07 219.175 33.458 218.755 32.678C218.347 31.886 218.143 30.992 218.143 29.996C218.143 29 218.347 28.118 218.755 27.35C219.175 26.582 219.739 25.988 220.447 25.568C221.167 25.136 221.959 24.92 222.823 24.92ZM226.261 30.032C226.261 29.348 226.117 28.754 225.829 28.25C225.553 27.746 225.187 27.362 224.731 27.098C224.275 26.834 223.783 26.702 223.255 26.702C222.727 26.702 222.235 26.834 221.779 27.098C221.323 27.35 220.951 27.728 220.663 28.232C220.387 28.724 220.249 29.312 220.249 29.996C220.249 30.68 220.387 31.28 220.663 31.796C220.951 32.312 221.323 32.708 221.779 32.984C222.247 33.248 222.739 33.38 223.255 33.38C223.783 33.38 224.275 33.248 224.731 32.984C225.187 32.72 225.553 32.336 225.829 31.832C226.117 31.316 226.261 30.716 226.261 30.032ZM232.07 23.768C231.698 23.768 231.386 23.642 231.134 23.39C230.882 23.138 230.756 22.826 230.756 22.454C230.756 22.082 230.882 21.77 231.134 21.518C231.386 21.266 231.698 21.14 232.07 21.14C232.43 21.14 232.736 21.266 232.988 21.518C233.24 21.77 233.366 22.082 233.366 22.454C233.366 22.826 233.24 23.138 232.988 23.39C232.736 23.642 232.43 23.768 232.07 23.768ZM233.078 25.082V35H231.026V25.082H233.078ZM240.776 24.92C241.556 24.92 242.252 25.082 242.864 25.406C243.488 25.73 243.974 26.21 244.322 26.846C244.67 27.482 244.844 28.25 244.844 29.15V35H242.81V29.456C242.81 28.568 242.588 27.89 242.144 27.422C241.7 26.942 241.094 26.702 240.326 26.702C239.558 26.702 238.946 26.942 238.49 27.422C238.046 27.89 237.824 28.568 237.824 29.456V35H235.772V25.082H237.824V26.216C238.16 25.808 238.586 25.49 239.102 25.262C239.63 25.034 240.188 24.92 240.776 24.92ZM265.457 25.082L262.379 35H260.219L258.221 27.674L256.223 35H254.063L250.967 25.082H253.055L255.125 33.056L257.231 25.082H259.373L261.389 33.02L263.441 25.082H265.457ZM268.035 23.768C267.663 23.768 267.351 23.642 267.099 23.39C266.847 23.138 266.721 22.826 266.721 22.454C266.721 22.082 266.847 21.77 267.099 21.518C267.351 21.266 267.663 21.14 268.035 21.14C268.395 21.14 268.701 21.266 268.953 21.518C269.205 21.77 269.331 22.082 269.331 22.454C269.331 22.826 269.205 23.138 268.953 23.39C268.701 23.642 268.395 23.768 268.035 23.768ZM269.043 25.082V35H266.991V25.082H269.043ZM274.131 26.756V32.246C274.131 32.618 274.215 32.888 274.383 33.056C274.563 33.212 274.863 33.29 275.283 33.29H276.543V35H274.923C273.999 35 273.291 34.784 272.799 34.352C272.307 33.92 272.061 33.218 272.061 32.246V26.756H270.891V25.082H272.061V22.616H274.131V25.082H276.543V26.756H274.131ZM283.564 24.92C284.32 24.92 284.992 25.082 285.58 25.406C286.18 25.73 286.648 26.21 286.984 26.846C287.332 27.482 287.506 28.25 287.506 29.15V35H285.472V29.456C285.472 28.568 285.25 27.89 284.806 27.422C284.362 26.942 283.756 26.702 282.988 26.702C282.22 26.702 281.608 26.942 281.152 27.422C280.708 27.89 280.486 28.568 280.486 29.456V35H278.434V21.68H280.486V26.234C280.834 25.814 281.272 25.49 281.8 25.262C282.34 25.034 282.928 24.92 283.564 24.92ZM302.161 22.49V24.164H296.851V27.854H300.991V29.528H296.851V35H294.799V22.49H302.161ZM303.379 29.996C303.379 29 303.583 28.118 303.991 27.35C304.411 26.582 304.975 25.988 305.683 25.568C306.403 25.136 307.195 24.92 308.059 24.92C308.839 24.92 309.517 25.076 310.093 25.388C310.681 25.688 311.149 26.066 311.497 26.522V25.082H313.567V35H311.497V33.524C311.149 33.992 310.675 34.382 310.075 34.694C309.475 35.006 308.791 35.162 308.023 35.162C307.171 35.162 306.391 34.946 305.683 34.514C304.975 34.07 304.411 33.458 303.991 32.678C303.583 31.886 303.379 30.992 303.379 29.996ZM311.497 30.032C311.497 29.348 311.353 28.754 311.065 28.25C310.789 27.746 310.423 27.362 309.967 27.098C309.511 26.834 309.019 26.702 308.491 26.702C307.963 26.702 307.471 26.834 307.015 27.098C306.559 27.35 306.187 27.728 305.899 28.232C305.623 28.724 305.485 29.312 305.485 29.996C305.485 30.68 305.623 31.28 305.899 31.796C306.187 32.312 306.559 32.708 307.015 32.984C307.483 33.248 307.975 33.38 308.491 33.38C309.019 33.38 309.511 33.248 309.967 32.984C310.423 32.72 310.789 32.336 311.065 31.832C311.353 31.316 311.497 30.716 311.497 30.032ZM315.578 30.032C315.578 29.012 315.782 28.118 316.19 27.35C316.61 26.57 317.186 25.97 317.918 25.55C318.65 25.13 319.49 24.92 320.438 24.92C321.638 24.92 322.628 25.208 323.408 25.784C324.2 26.348 324.734 27.158 325.01 28.214H322.796C322.616 27.722 322.328 27.338 321.932 27.062C321.536 26.786 321.038 26.648 320.438 26.648C319.598 26.648 318.926 26.948 318.422 27.548C317.93 28.136 317.684 28.964 317.684 30.032C317.684 31.1 317.93 31.934 318.422 32.534C318.926 33.134 319.598 33.434 320.438 33.434C321.626 33.434 322.412 32.912 322.796 31.868H325.01C324.722 32.876 324.182 33.68 323.39 34.28C322.598 34.868 321.614 35.162 320.438 35.162C319.49 35.162 318.65 34.952 317.918 34.532C317.186 34.1 316.61 33.5 316.19 32.732C315.782 31.952 315.578 31.052 315.578 30.032ZM336.145 29.798C336.145 30.17 336.121 30.506 336.073 30.806H328.495C328.555 31.598 328.849 32.234 329.377 32.714C329.905 33.194 330.553 33.434 331.321 33.434C332.425 33.434 333.205 32.972 333.661 32.048H335.875C335.575 32.96 335.029 33.71 334.237 34.298C333.457 34.874 332.485 35.162 331.321 35.162C330.373 35.162 329.521 34.952 328.765 34.532C328.021 34.1 327.433 33.5 327.001 32.732C326.581 31.952 326.371 31.052 326.371 30.032C326.371 29.012 326.575 28.118 326.983 27.35C327.403 26.57 327.985 25.97 328.729 25.55C329.485 25.13 330.349 24.92 331.321 24.92C332.257 24.92 333.091 25.124 333.823 25.532C334.555 25.94 335.125 26.516 335.533 27.26C335.941 27.992 336.145 28.838 336.145 29.798ZM334.003 29.15C333.991 28.394 333.721 27.788 333.193 27.332C332.665 26.876 332.011 26.648 331.231 26.648C330.523 26.648 329.917 26.876 329.413 27.332C328.909 27.776 328.609 28.382 328.513 29.15H334.003ZM340.216 26.558C340.564 26.078 341.038 25.688 341.638 25.388C342.25 25.076 342.928 24.92 343.672 24.92C344.548 24.92 345.34 25.13 346.048 25.55C346.756 25.97 347.314 26.57 347.722 27.35C348.13 28.118 348.334 29 348.334 29.996C348.334 30.992 348.13 31.886 347.722 32.678C347.314 33.458 346.75 34.07 346.03 34.514C345.322 34.946 344.536 35.162 343.672 35.162C342.904 35.162 342.22 35.012 341.62 34.712C341.032 34.412 340.564 34.028 340.216 33.56V35H338.164V21.68H340.216V26.558ZM346.246 29.996C346.246 29.312 346.102 28.724 345.814 28.232C345.538 27.728 345.166 27.35 344.698 27.098C344.242 26.834 343.75 26.702 343.222 26.702C342.706 26.702 342.214 26.834 341.746 27.098C341.29 27.362 340.918 27.746 340.63 28.25C340.354 28.754 340.216 29.348 340.216 30.032C340.216 30.716 340.354 31.316 340.63 31.832C340.918 32.336 341.29 32.72 341.746 32.984C342.214 33.248 342.706 33.38 343.222 33.38C343.75 33.38 344.242 33.248 344.698 32.984C345.166 32.708 345.538 32.312 345.814 31.796C346.102 31.28 346.246 30.68 346.246 29.996ZM354.666 35.162C353.73 35.162 352.884 34.952 352.128 34.532C351.372 34.1 350.778 33.5 350.346 32.732C349.914 31.952 349.698 31.052 349.698 30.032C349.698 29.024 349.92 28.13 350.364 27.35C350.808 26.57 351.414 25.97 352.182 25.55C352.95 25.13 353.808 24.92 354.756 24.92C355.704 24.92 356.562 25.13 357.33 25.55C358.098 25.97 358.704 26.57 359.148 27.35C359.592 28.13 359.814 29.024 359.814 30.032C359.814 31.04 359.586 31.934 359.13 32.714C358.674 33.494 358.05 34.1 357.258 34.532C356.478 34.952 355.614 35.162 354.666 35.162ZM354.666 33.38C355.194 33.38 355.686 33.254 356.142 33.002C356.61 32.75 356.988 32.372 357.276 31.868C357.564 31.364 357.708 30.752 357.708 30.032C357.708 29.312 357.57 28.706 357.294 28.214C357.018 27.71 356.652 27.332 356.196 27.08C355.74 26.828 355.248 26.702 354.72 26.702C354.192 26.702 353.7 26.828 353.244 27.08C352.8 27.332 352.446 27.71 352.182 28.214C351.918 28.706 351.786 29.312 351.786 30.032C351.786 31.1 352.056 31.928 352.596 32.516C353.148 33.092 353.838 33.38 354.666 33.38ZM366.144 35.162C365.208 35.162 364.362 34.952 363.606 34.532C362.85 34.1 362.256 33.5 361.824 32.732C361.392 31.952 361.176 31.052 361.176 30.032C361.176 29.024 361.398 28.13 361.842 27.35C362.286 26.57 362.892 25.97 363.66 25.55C364.428 25.13 365.286 24.92 366.234 24.92C367.182 24.92 368.04 25.13 368.808 25.55C369.576 25.97 370.182 26.57 370.626 27.35C371.07 28.13 371.292 29.024 371.292 30.032C371.292 31.04 371.064 31.934 370.608 32.714C370.152 33.494 369.528 34.1 368.736 34.532C367.956 34.952 367.092 35.162 366.144 35.162ZM366.144 33.38C366.672 33.38 367.164 33.254 367.62 33.002C368.088 32.75 368.466 32.372 368.754 31.868C369.042 31.364 369.186 30.752 369.186 30.032C369.186 29.312 369.048 28.706 368.772 28.214C368.496 27.71 368.13 27.332 367.674 27.08C367.218 26.828 366.726 26.702 366.198 26.702C365.67 26.702 365.178 26.828 364.722 27.08C364.278 27.332 363.924 27.71 363.66 28.214C363.396 28.706 363.264 29.312 363.264 30.032C363.264 31.1 363.534 31.928 364.074 32.516C364.626 33.092 365.316 33.38 366.144 33.38ZM377.245 30.05L381.817 35H379.045L375.373 30.734V35H373.321V21.68H375.373V29.42L378.973 25.082H381.817L377.245 30.05Z"
            fill="#757575"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M174.5 21.0312H168.125V16.6562C168.125 16.0761 168.349 15.5197 168.747 15.1095C169.146 14.6992 169.686 14.4688 170.25 14.4688H172.375V9H168.125C166.434 9 164.813 9.6914 163.617 10.9221C162.422 12.1528 161.75 13.822 161.75 15.5625V21.0312H157.5V26.5H161.75V44H168.125V26.5H172.375L174.5 21.0312Z"
            fill="#1976D2"
          />
          <defs>
            <filter
              id="filter0_d_3610_773"
              x="0"
              y="0"
              width="508"
              height="62"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3610_773"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3610_773"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="border-b-2 mt-9 mb-6 flex-grow"></div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex w-full bg-gray-200 px-3 py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <input
            type="text"
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your Full Name"
            className="flex-grow p-1 bg-gray-200 outline-none pr-3"
          />
        </div>
        <div className="flex w-full bg-gray-200 px-3 py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="text"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-grow p-1 bg-gray-200 outline-none pr-3"
          />
        </div>
        <div className="flex w-full bg-gray-200 px-3 py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
            className="flex-grow p-1 bg-gray-200 outline-none pr-3"
          />
        </div>
      

      <button className="flex mt-5 mx-auto bg-purple text-white rounded-md px-8 py-2">
        Sign In
      </button>
      {errorTxt&&(<p className="bg-red-500 text-white w-fit text-sm py-1 px-3 text-center mx-auto rounded-md mt-1">{errorTxt}</p>)}

      <p className="mt-2 items-center flex justify-center">
        Already have an account?{" "}
        <span className="underline">
          <Link href={"/"}>Login</Link>
        </span>
      </p>
    </form>
    </div>
  );
};

export default page;
