import { IImage } from "@/types";
import Home from "./ui/home/home";

export default async function HomePage() {
  // const res = await fetch(
  //   `https://api.unsplash.com/photos?client_id=${process.env.API_KEY}&per_page=5`
  // );
  // const data: IImage[] = await res.json();
  const data: IImage[] = [
    {
      id: "EQ7x8WJMR4Q",
      slug: "an-orange-and-white-clown-fish-in-an-anemone-EQ7x8WJMR4Q",
      created_at: "2024-02-07T22:34:15Z",
      updated_at: "2024-03-03T23:57:19Z",
      promoted_at: null,
      width: 8256,
      height: 5504,
      color: "#735940",
      blur_hash: "LNI4wfxC0hI=ESSN$$$zD+R+t6xu",
      description:
        "NEOM is home to 2,000 different marine species, 600 of which are native to the Red Sea and cannot be found anywhere else in the world. | Islands of NEOM- NEOM, Saudi Arabia",
      alt_description: "an orange and white clown fish in an anemone",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?ixid=M3w1NzM3OTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzM3OTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1707343845208-a20c56d2c8ba",
      },
      links: {
        self: "https://api.unsplash.com/photos/an-orange-and-white-clown-fish-in-an-anemone-EQ7x8WJMR4Q",
        html: "https://unsplash.com/photos/an-orange-and-white-clown-fish-in-an-anemone-EQ7x8WJMR4Q",
        download:
          "https://unsplash.com/photos/EQ7x8WJMR4Q/download?ixid=M3w1NzM3OTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTU3MTgwOXw",
        download_location:
          "https://api.unsplash.com/photos/EQ7x8WJMR4Q/download?ixid=M3w1NzM3OTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwOTU3MTgwOXw",
      },
      likes: 118,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: {
        impression_urls: [],
        tagline: "Made to Change",
        tagline_url:
          "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
        sponsor: {
          id: "mYizSrdJkkU",
          updated_at: "2024-03-04T15:35:15Z",
          username: "neom",
          name: "NEOM",
          first_name: "NEOM",
          last_name: null,
          twitter_username: "neom",
          portfolio_url: "http://www.neom.com",
          bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
          location: "NEOM, Saudi Arabia",
          links: {
            self: "https://api.unsplash.com/users/neom",
            html: "https://unsplash.com/@neom",
            photos: "https://api.unsplash.com/users/neom/photos",
            likes: "https://api.unsplash.com/users/neom/likes",
            portfolio: "https://api.unsplash.com/users/neom/portfolio",
            following: "https://api.unsplash.com/users/neom/following",
            followers: "https://api.unsplash.com/users/neom/followers",
          },
          profile_image: {
            small:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            medium:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            large:
              "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
          },
          instagram_username: "discoverneom",
          total_collections: 7,
          total_likes: 1,
          total_photos: 222,
          total_promoted_photos: 72,
          accepted_tos: true,
          for_hire: false,
          social: {
            instagram_username: "discoverneom",
            portfolio_url: "http://www.neom.com",
            twitter_username: "neom",
            paypal_email: null,
          },
        },
      },
      topic_submissions: {},
      user: {
        id: "mYizSrdJkkU",
        updated_at: "2024-03-04T15:35:15Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: {
          self: "https://api.unsplash.com/users/neom",
          html: "https://unsplash.com/@neom",
          photos: "https://api.unsplash.com/users/neom/photos",
          likes: "https://api.unsplash.com/users/neom/likes",
          portfolio: "https://api.unsplash.com/users/neom/portfolio",
          following: "https://api.unsplash.com/users/neom/following",
          followers: "https://api.unsplash.com/users/neom/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 222,
        total_promoted_photos: 72,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "discoverneom",
          portfolio_url: "http://www.neom.com",
          twitter_username: "neom",
          paypal_email: null,
        },
      },
    },
    {
      id: "DgjKb7Y_R-4",
      slug: "a-man-standing-on-a-stair-case-next-to-a-woman-DgjKb7Y_R-4",
      created_at: "2024-03-03T23:27:24Z",
      updated_at: "2024-03-04T17:02:39Z",
      promoted_at: "2024-03-04T17:02:39Z",
      width: 6367,
      height: 6367,
      color: "#262626",
      blur_hash: "LPCZhRD%E1-;~qIAD%xut7RjM{M{",
      description: null,
      alt_description: "a man standing on a stair case next to a woman",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1709507779917-242b560288be?ixid=M3w1NzM3OTd8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1709507779917-242b560288be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1709507779917-242b560288be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1709507779917-242b560288be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1709507779917-242b560288be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709507779917-242b560288be",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-man-standing-on-a-stair-case-next-to-a-woman-DgjKb7Y_R-4",
        html: "https://unsplash.com/photos/a-man-standing-on-a-stair-case-next-to-a-woman-DgjKb7Y_R-4",
        download:
          "https://unsplash.com/photos/DgjKb7Y_R-4/download?ixid=M3w1NzM3OTd8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwOTU3MTgwOXw",
        download_location:
          "https://api.unsplash.com/photos/DgjKb7Y_R-4/download?ixid=M3w1NzM3OTd8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwOTU3MTgwOXw",
      },
      likes: 0,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "HMB3Q9gvW_g",
        updated_at: "2024-03-04T17:02:39Z",
        username: "dimadallacqua",
        name: "Dima DallAcqua",
        first_name: "Dima",
        last_name: "DallAcqua",
        twitter_username: null,
        portfolio_url: "https://vimeo.com/dallacquadima",
        bio: "Hey, I don’t know what to say about me, I’m a Cinematographer in the first place, but I’m also passionate about photography, so I decided to share with others with some pictures made by me. Wish you all the best, and let's be friends! 🙃",
        location: "USA",
        links: {
          self: "https://api.unsplash.com/users/dimadallacqua",
          html: "https://unsplash.com/@dimadallacqua",
          photos: "https://api.unsplash.com/users/dimadallacqua/photos",
          likes: "https://api.unsplash.com/users/dimadallacqua/likes",
          portfolio: "https://api.unsplash.com/users/dimadallacqua/portfolio",
          following: "https://api.unsplash.com/users/dimadallacqua/following",
          followers: "https://api.unsplash.com/users/dimadallacqua/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1706939693138-472077426a50image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1706939693138-472077426a50image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1706939693138-472077426a50image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "_my_camera_and_i",
        total_collections: 0,
        total_likes: 33,
        total_photos: 103,
        total_promoted_photos: 31,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "_my_camera_and_i",
          portfolio_url: "https://vimeo.com/dallacquadima",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "XknFXvr2ZkI",
      slug: "a-dark-alley-with-a-lamp-on-the-side-of-it-XknFXvr2ZkI",
      created_at: "2023-04-25T20:05:13Z",
      updated_at: "2024-03-04T17:02:33Z",
      promoted_at: "2024-03-04T17:02:33Z",
      width: 7952,
      height: 5304,
      color: "#260c0c",
      blur_hash: "L34-wtNH0f%1NyoKw]bIWVWCoLt6",
      description: null,
      alt_description: "a dark alley with a lamp on the side of it",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1682453040852-8d7cd82e74ce?ixid=M3w1NzM3OTd8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1682453040852-8d7cd82e74ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1682453040852-8d7cd82e74ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1682453040852-8d7cd82e74ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1682453040852-8d7cd82e74ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682453040852-8d7cd82e74ce",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-dark-alley-with-a-lamp-on-the-side-of-it-XknFXvr2ZkI",
        html: "https://unsplash.com/photos/a-dark-alley-with-a-lamp-on-the-side-of-it-XknFXvr2ZkI",
        download:
          "https://unsplash.com/photos/XknFXvr2ZkI/download?ixid=M3w1NzM3OTd8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwOTU3MTgwOXw",
        download_location:
          "https://api.unsplash.com/photos/XknFXvr2ZkI/download?ixid=M3w1NzM3OTd8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwOTU3MTgwOXw",
      },
      likes: 1,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "vspB8ZgNay0",
        updated_at: "2024-03-04T17:02:33Z",
        username: "fredlemonnimages",
        name: "Frédéric LE MONNIER",
        first_name: "Frédéric",
        last_name: "LE MONNIER",
        twitter_username: "fredlemonnimage",
        portfolio_url: "https://www.le-monnier.net",
        bio: "Photographe amateur, à la recherche de merveilleux endroits pour capturer de belles lumières. Si vous souhaitez soutenir mon travail, n'hésitez pas à faire un don (même symbolique) :)",
        location: "Paris",
        links: {
          self: "https://api.unsplash.com/users/fredlemonnimages",
          html: "https://unsplash.com/@fredlemonnimages",
          photos: "https://api.unsplash.com/users/fredlemonnimages/photos",
          likes: "https://api.unsplash.com/users/fredlemonnimages/likes",
          portfolio:
            "https://api.unsplash.com/users/fredlemonnimages/portfolio",
          following:
            "https://api.unsplash.com/users/fredlemonnimages/following",
          followers:
            "https://api.unsplash.com/users/fredlemonnimages/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-fb-1681833590-857c180e1afd.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-fb-1681833590-857c180e1afd.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-fb-1681833590-857c180e1afd.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "fredlemonnimages",
        total_collections: 5,
        total_likes: 1,
        total_photos: 116,
        total_promoted_photos: 2,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "fredlemonnimages",
          portfolio_url: "https://www.le-monnier.net",
          twitter_username: "fredlemonnimage",
          paypal_email: null,
        },
      },
    },
    {
      id: "abOv3wOl6Dk",
      slug: "a-close-up-of-a-snake-on-a-branch-abOv3wOl6Dk",
      created_at: "2024-03-01T10:59:59Z",
      updated_at: "2024-03-04T17:02:26Z",
      promoted_at: "2024-03-04T17:02:26Z",
      width: 5760,
      height: 3840,
      color: "#260c0c",
      blur_hash: "L96%+qNH58%1$*WVNHoe0zs:-nNH",
      description: "Saw Scaled Viper, photographed at Arabian Wildlife Center",
      alt_description: "a close up of a snake on a branch",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1709290608385-e6b029804f9d?ixid=M3w1NzM3OTd8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1709290608385-e6b029804f9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1709290608385-e6b029804f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1709290608385-e6b029804f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1709290608385-e6b029804f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709290608385-e6b029804f9d",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-close-up-of-a-snake-on-a-branch-abOv3wOl6Dk",
        html: "https://unsplash.com/photos/a-close-up-of-a-snake-on-a-branch-abOv3wOl6Dk",
        download:
          "https://unsplash.com/photos/abOv3wOl6Dk/download?ixid=M3w1NzM3OTd8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwOTU3MTgwOXw",
        download_location:
          "https://api.unsplash.com/photos/abOv3wOl6Dk/download?ixid=M3w1NzM3OTd8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwOTU3MTgwOXw",
      },
      likes: 1,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "E9SoGgZ_JCo",
        updated_at: "2024-03-04T17:02:27Z",
        username: "hpzworkz",
        name: "Hassan Pasha",
        first_name: "Hassan",
        last_name: "Pasha",
        twitter_username: null,
        portfolio_url: "https://hpzworkz.jimdo.com/",
        bio: "I'm creative at heart, whether I'm leading my team projects or capturing the world through my lens.  I'm fueled by the dynamic energy of my team during the day and find creative release with my photography at night.",
        location: "Dubai",
        links: {
          self: "https://api.unsplash.com/users/hpzworkz",
          html: "https://unsplash.com/@hpzworkz",
          photos: "https://api.unsplash.com/users/hpzworkz/photos",
          likes: "https://api.unsplash.com/users/hpzworkz/likes",
          portfolio: "https://api.unsplash.com/users/hpzworkz/portfolio",
          following: "https://api.unsplash.com/users/hpzworkz/following",
          followers: "https://api.unsplash.com/users/hpzworkz/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1695115157984-86af490a2feaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1695115157984-86af490a2feaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1695115157984-86af490a2feaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "hpzworkz",
        total_collections: 0,
        total_likes: 27,
        total_photos: 201,
        total_promoted_photos: 6,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "hpzworkz",
          portfolio_url: "https://hpzworkz.jimdo.com/",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "v3Jod2iGmoA",
      slug: "an-aerial-view-of-a-house-in-the-middle-of-a-forest-v3Jod2iGmoA",
      created_at: "2024-02-29T16:13:25Z",
      updated_at: "2024-03-04T15:56:01Z",
      promoted_at: "2024-03-04T15:56:01Z",
      width: 6048,
      height: 8064,
      color: "#26260c",
      blur_hash: "L59s#3$y$_-mxt^faft40#NI%1WD",
      description: null,
      alt_description: "an aerial view of a house in the middle of a forest",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1709220762690-61f6b533c295?ixid=M3w1NzM3OTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1709220762690-61f6b533c295?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1709220762690-61f6b533c295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1709220762690-61f6b533c295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1709220762690-61f6b533c295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM3OTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwOTU3MTgwOXw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1709220762690-61f6b533c295",
      },
      links: {
        self: "https://api.unsplash.com/photos/an-aerial-view-of-a-house-in-the-middle-of-a-forest-v3Jod2iGmoA",
        html: "https://unsplash.com/photos/an-aerial-view-of-a-house-in-the-middle-of-a-forest-v3Jod2iGmoA",
        download:
          "https://unsplash.com/photos/v3Jod2iGmoA/download?ixid=M3w1NzM3OTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwOTU3MTgwOXw",
        download_location:
          "https://api.unsplash.com/photos/v3Jod2iGmoA/download?ixid=M3w1NzM3OTd8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwOTU3MTgwOXw",
      },
      likes: 7,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        travel: {
          status: "rejected",
        },
        nature: {
          status: "rejected",
        },
        wallpapers: {
          status: "rejected",
        },
      },
      user: {
        id: "Vo2vaROlkIY",
        updated_at: "2024-03-04T15:56:02Z",
        username: "vrrosario",
        name: "Victor Rosario",
        first_name: "Victor",
        last_name: "Rosario",
        twitter_username: "VrVictorRosario",
        portfolio_url: "https://www.instagram.com/vr.victorrosario/",
        bio: "I'm a Caribbean-based photographer and artist, focusing on capturing the raw beauty of my homeland through my iPhone and drone. I'm passionate about creating new and exciting ways to share my art with the world.",
        location: "Dominican Republic",
        links: {
          self: "https://api.unsplash.com/users/vrrosario",
          html: "https://unsplash.com/@vrrosario",
          photos: "https://api.unsplash.com/users/vrrosario/photos",
          likes: "https://api.unsplash.com/users/vrrosario/likes",
          portfolio: "https://api.unsplash.com/users/vrrosario/portfolio",
          following: "https://api.unsplash.com/users/vrrosario/following",
          followers: "https://api.unsplash.com/users/vrrosario/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1673549329853-4c1a89707ebcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1673549329853-4c1a89707ebcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1673549329853-4c1a89707ebcimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "vr.victorrosario",
        total_collections: 9,
        total_likes: 389,
        total_photos: 197,
        total_promoted_photos: 39,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "vr.victorrosario",
          portfolio_url: "https://www.instagram.com/vr.victorrosario/",
          twitter_username: "VrVictorRosario",
          paypal_email: null,
        },
      },
    },
  ];

  return (
    <main className=" min-h-[90vh] px-5 w-full mt-[10vh]">
      <Home data={data} />
    </main>
  );
}
