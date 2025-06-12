// let resList = [
//   {
//     id: 1111,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed",
//     restroName: "Meghna Foods",
//     cuisine: "Biriyani, North Indian, Asian",
//     rating: "4.4",
//     deliveryTime: "38",
//   },
//   {
//     id: 2222,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0f971744-7722-4297-9cba-2969c5f3279c_411450.JPG",
//     restroName: "KFC",
//     cuisine: "Burger, Fast Food",
//     rating: "4.3",
//     deliveryTime: "25",
//   },
//   {
//     id: 3333,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/ba3c93cd-2af9-488a-acea-c833fdf5a342_651212.JPG",
//     restroName: "McDonald's",
//     cuisine: "American",
//     rating: "4.3",
//     deliveryTime: "50-55",
//   },
//   {
//     id: 4444,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/9c575026-99b6-429b-a5d8-22a5a0e78068_805983.jpg",
//     restroName: "FreshMenu",
//     cuisine: "Continental, Chinise, Oriental",
//     rating: "4.1",
//     deliveryTime: "40-45",
//   },
//   {
//     id: 5555,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_90566.JPG",
//     restroName: "Chaayos Chai+Snaks=Relax",
//     cuisine: "Beverages, Chaat, Snaks, Bakery",
//     rating: "4.5",
//     deliveryTime: "50-55",
//   },
//   {
//     id: 6666,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/46570b74-8151-40e2-8062-7244acec9a95_96094.jpg",
//     restroName: "Wow!Momo",
//     cuisine: "Momos, Chinese, Fastfood, Asian",
//     rating: "4.2",
//     deliveryTime: "40-45",
//   },
//   {
//     id: 7777,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/8a4e0848-22b5-452a-aa4e-941dfcc85272_30207.jpg",
//     restroName: "Bikarnervala",
//     cuisine: "North Indian, Snaks, Chaat, Sweets",
//     rating: "4.5",
//     deliveryTime: "35-40",
//   },
//   {
//     id: 8888,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/59ace832-88f8-4afe-ab74-7be276bb971c_720360.JPG",
//     restroName: "Wendy's Burgers",
//     cuisine: "Burger, American, Fast Food, Snaks",
//     rating: "3.8",
//     deliveryTime: "40-45",
//   },
//   {
//     id: 9999,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/dbc2d8a5-6f60-4643-8318-ba878ce525e0_863024.JPG",
//     restroName: "Lavonne Cafe",
//     cuisine: "Bakery, Desserts, Pastas, Beverages",
//     rating: "3.2",
//     deliveryTime: "30-35",
//   },
//   {
//     id: 1212,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/d74b2d78-20fe-4531-b5bf-4424325903bc_20152.JPG",
//     restroName: "Subway",
//     cuisine: "Sandwich, Salad, wrap",
//     rating: "3.5",
//     deliveryTime: "25-30",
//   },
//   {
//     id: 1313,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/29/b9075fbb-0c0e-4694-a6ca-5b6f44643876_526516.jpg",
//     restroName: "Salad Days",
//     cuisine: "Salads",
//     rating: "4.6",
//     deliveryTime: "25-30",
//   },
//   {
//     id: 1414,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/576337c9-94ee-421e-b603-542e5594f659_558793.jpg",
//     restroName: "HRX by EatFit",
//     cuisine: "Healthy Food, Salads, Burgers",
//     rating: "4.6",
//     deliveryTime: "25-30",
//   },
// ];

// export default resList;

let resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1024144",
          name: "Gupta ji resturant",
          city: "4",
          slugs: {
            restaurant: "gupta-ji-resturant-dilshad-gardens-dilshad-gardens",
            city: "delhi",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/34cbc20e-20d3-48d6-a68c-81447177f71c_1024144.jpg",
          address:
            "Shop No : 488/4-A , Floor : Ground , Main market R- Block Dilshad garden , Sagar Market, Dilshad Garden, Delhi, 110095, India 110095",
          locality: "Dilshad Gardens",
          areaName: "Dilshad Gardens",
          costForTwo: "49900",
          costForTwoMessage: "₹499 FOR TWO",
          cuisines: ["Thalis", "Indian", "Tandoor", "Afghani"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "38",
          sla: {
            deliveryTime: 62,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 13.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "13.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"6e83aae7-34c8-99a6-1a15-ba92a2672203","grid":"938278ab-bcd5-48b3-9371-a72d97dc7cc2","queryUniqueId":"ca11f1d9-f6a4-65e1-a928-efeb5583f688","query":"resturant"}',
          objectValue: "1024144",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "1024144",
            query: "resturant",
            sourceSessionId: "l2bfc6e4-55c7-430a-8887-eb61cbbcaaa4",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "f0f7a244b86528b76bfb91e58ba924a0",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "765245",
          name: "Halwaivala Sweets Resturant And Bakery",
          city: "4",
          slugs: {
            restaurant: "halwaivala-bakery-tilak-nagar-tilak-nagar",
            city: "delhi",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/16/46ab166b-9af5-4928-9c60-8a66ccdef630_765245.ss.jpg",
          address:
            "A-21/17, naraina industrial area, phase2, delhi cantonment, new delhi-110028",
          locality: "Tilak Nagar",
          areaName: "Naraina ",
          costForTwo: "29600",
          costForTwoMessage: "₹296 FOR TWO",
          cuisines: [
            "Sweets",
            "Street Food",
            "North Indian",
            "Chinese",
            "South Indian",
            "Bakery",
            "Continental",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.4K+",
          sla: {
            deliveryTime: 57,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 9.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "55-60 MINS",
            lastMileTravelString: "9.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "TEMPORARILY",
            },
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          unorderableMessage: "Temporarily closed for delivery",
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          availabilityServiceabilityMessage: "Temporarily closed for delivery",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY",
            },
            subTitle: {
              text: "CLOSED",
            },
            message: {
              text: "Outlet not accepting orders at the moment",
              textColour: "primary",
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803",
            },
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"6e83aae7-34c8-99a6-1a15-ba92a2672203","grid":"938278ab-bcd5-48b3-9371-a72d97dc7cc2","queryUniqueId":"ca11f1d9-f6a4-65e1-a928-efeb5583f688","query":"resturant"}',
          objectValue: "765245",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "f0f7a244b86528b76bfb91e58ba924a0",
            qrEnabled: "false",
            restaurant_id: "765245",
            query: "resturant",
            sourceSessionId: "l2bfc6e4-55c7-430a-8887-eb61cbbcaaa4",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "868878",
          name: "Manpasand Resturant",
          city: "4",
          slugs: {
            restaurant: "manpasand-resturant-ashok-vihar-ashok-vihar",
            city: "delhi",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/10/4a80d9b3-6daf-40da-ac95-65a16df76d94_868878.jpg",
          address:
            "SHOP NO-8, HOUSE NO-296 GROUND FLOOR VILLAGE GOPALPUR LANDMARK MCD SCHOOL DELHI, DHAKA, MODEL TOWN, North , Delhi-110009",
          locality: "Gali No-17",
          areaName: "GTB Nagar",
          costForTwo: "19500",
          costForTwoMessage: "₹195 FOR TWO",
          cuisines: ["Biryani"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 63,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 11.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "60-65 MINS",
            lastMileTravelString: "11.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 5 am, tomorrow",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR TODAY",
            },
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          sld: true,
          unorderableMessage: "Opens next at 5 am, tomorrow",
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 5 am, tomorrow",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY",
            },
            subTitle: {
              text: "CLOSED",
            },
            message: {
              text: "Opens tomorrow at 5:00 AM",
              textColour: "primary",
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803",
            },
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"6e83aae7-34c8-99a6-1a15-ba92a2672203","grid":"938278ab-bcd5-48b3-9371-a72d97dc7cc2","queryUniqueId":"ca11f1d9-f6a4-65e1-a928-efeb5583f688","query":"resturant"}',
          objectValue: "868878",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "resturant",
            sourceSessionId: "l2bfc6e4-55c7-430a-8887-eb61cbbcaaa4",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "f0f7a244b86528b76bfb91e58ba924a0",
            qrEnabled: "false",
            restaurant_id: "868878",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "905403",
          name: "The famliy Resturant",
          city: "4",
          slugs: {
            restaurant: "the-famliy-resturant-south-extension-south-extension",
            city: "delhi",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/7/cdf2efa6-93ca-4e2b-8820-13f123c923b2_905403.jpg",
          address:
            "Shop No : shop no H-6/1 , Floor : 0 , H-6/1 A F/F Vill Shah Pur Jat , ",
          locality: "Vill Shah Pur Jat",
          areaName: "South Extension",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["North Indian", "Thalis", "Seafood"],
          avgRating: 3.7,
          feeDetails: {},
          avgRatingString: "3.7",
          totalRatingsString: "5",
          sla: {
            deliveryTime: 66,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 11.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "65-70 MINS",
            lastMileTravelString: "11.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextOpenTimeMessage: "Opens next at 12 am, tomorrow",
            restaurantClosedMeta: {
              title: "CLOSED",
              subtitle: "FOR TODAY",
            },
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          sld: true,
          unorderableMessage: "Opens next at 12 am, tomorrow",
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          availabilityServiceabilityMessage:
            "Currently closed for delivery. Opens next at 12 am, tomorrow",
          orderabilityCommunication: {
            title: {
              text: "CURRENTLY",
            },
            subTitle: {
              text: "CLOSED",
            },
            message: {
              text: "Opens tomorrow at 12:00 AM",
              textColour: "primary",
            },
            customIcon: {
              bgGradientColorStart: "#EB8322",
              bgGradientColorEnd: "#EE5803",
            },
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"6e83aae7-34c8-99a6-1a15-ba92a2672203","grid":"938278ab-bcd5-48b3-9371-a72d97dc7cc2","queryUniqueId":"ca11f1d9-f6a4-65e1-a928-efeb5583f688","query":"resturant"}',
          objectValue: "905403",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "905403",
            query: "resturant",
            sourceSessionId: "l2bfc6e4-55c7-430a-8887-eb61cbbcaaa4",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "f0f7a244b86528b76bfb91e58ba924a0",
          },
        },
      },
    },
  },
];

export default resList;
