import React from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";
import RecommendComponent from "../application/Recommend/";
import SingersComponent from "../application/Singers/";
import RankComponent from "../application/Rank/";
import AlbumComponent from "../application/Album/";
import SingerComponent from "./../application/Singer/";
import SearchComponent from "./../application/Search/";

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: HomeLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/recommend"} />
          },
          {
            path: "/recommend",
            component: RecommendComponent,
            routes: [
              {
                path: "/recommend/:id",
                component: AlbumComponent
              }
            ]
          },
          {
            path: "/singers",
            component: SingersComponent,
            key: "singers",
            routes: [
              {
                path: "/singers/:id",
                component: SingerComponent
              }
            ]
          },
          {
            path: "/rank/",
            component: RankComponent,
            key: "rank",
            routes: [
              {
                path: "/rank/:id",
                component: AlbumComponent
              }
            ]
          },
          {
            path: "/album/:id",
            exact: true,
            key: "album",
            component: AlbumComponent
          },
          {
            path: "/search",
            exact: true,
            key: "search",
            component: SearchComponent
          }
        ]
      }
    ]
  }
];
