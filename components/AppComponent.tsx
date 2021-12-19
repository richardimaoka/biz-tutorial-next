/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContainer } from "./MainContainer";
import { TutorialComponent } from "./TutorialComponent";
import { NavigateToFirstPageContainer } from "./NavigateToFirstPageContainer";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const AppComponent = (): JSX.Element => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TutorialComponent />}>
          <Route index element={<NavigateToFirstPageContainer />} />
          <Route path=":pageNum" element={<MainContainer />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

export default AppComponent;
