import React from 'react';
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import "./global.css";

export const App = () => {
  return (
	<Layout>
		<Main />
	</Layout>
  );
}