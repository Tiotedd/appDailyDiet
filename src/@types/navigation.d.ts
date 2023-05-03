import { StatusStyleProps } from "../components/Meal/styles";
import { PercentTypeStyleProps } from "../components/Percent/styles"; 

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
      getMeal: {
        type: StatusStyleProps;
      }
      feedback: {
        type: StatusStyleProps;
      }
      statistic: {
        type: PercentTypeStyleProps;
      }
    }
  }
}