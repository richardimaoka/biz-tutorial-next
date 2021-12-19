import { useEffect } from "react";
import { useNavigate } from "react-router";

export const NavigateToFirstPageContainer = (): JSX.Element => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/1");
  });

  return <></>;
};
