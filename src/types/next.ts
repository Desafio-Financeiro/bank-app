/* eslint-disable @typescript-eslint/no-empty-object-type */
import { NextPage } from "next";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (_: React.ReactElement) => React.ReactNode;
};
