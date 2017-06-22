"use strict";

app.factory("RecoFactory", function () {

  let recommendation = null;

  return {
      setRecommendation:function (finalRecommendation) {
        recommendation = finalRecommendation;
      },
      getRecommendation:function () {
          return recommendation;
      }
  };
});

