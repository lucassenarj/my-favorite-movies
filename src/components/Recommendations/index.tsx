import React from "react";

const RecentList = React.lazy(() => import("./../../components/RecentList"));

type Props = {
  resource: {
    recommendations: {
      read: Function,
    }
  }
}

function Recommendations({ resource }: Props) {
  const recommendationList = resource.recommendations.read();
  const { data: { results } } = recommendationList;
  return (
    <RecentList title="Recommendations" movies={results} />
  )
};

export default Recommendations;